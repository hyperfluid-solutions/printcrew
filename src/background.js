// background.js

// Converts a match pattern to a RegExp (see function above)
function convertMatchPatternToRegex(matchPattern) {
  let escaped = matchPattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
  let regexString = "^" + escaped.replace(/\\\*/g, ".*");
  return new RegExp(regexString, "i");
}

// Checks if the URL matches any content_script match pattern from the manifest.
function matchesContentScript(url) {
  const manifest = chrome.runtime.getManifest();
  const contentScripts = manifest.content_scripts || [];
  for (const cs of contentScripts) {
    if (!cs.matches) continue;
    for (const pattern of cs.matches) {
      const regex = convertMatchPatternToRegex(pattern);
      if (regex.test(url)) {
        return true;
      }
    }
  }
  return false;
}

// Updates the extension's icon based on the current tab's URL.
function updateIconForTab(tab) {
  if (!tab || !tab.url) {
    chrome.action.setIcon({
      tabId: tab.id,
      path: {
        16: "../icons/unknown16.png",
        32: "../icons/unknown32.png",
        48: "../icons/unknown48.png",
        128: "../icons/unknown128.png",
      },
    });
    chrome.action.setTitle({
      tabId: tab.id,
      title: "Click to give Print Crew access to check page for print styles.",
    });
    return;
  }

  if (matchesContentScript(tab.url)) {
    // Set the icon to "active" if the URL matches one of the content_scripts patterns.
    chrome.action.setIcon({
      tabId: tab.id,
      path: {
        16: "../icons/active16.png",
        32: "../icons/active32.png",
        48: "../icons/active48.png",
        128: "../icons/active128.png",
      },
    });
    chrome.action.setTitle({
      tabId: tab.id,
      title: "Print view available!",
    });
  } else {
    // Revert to the "inactive" icon if it doesn't match.
    chrome.action.setIcon({
      tabId: tab.id,
      path: {
        16: "../icons/inactive16.png",
        32: "../icons/inactive32.png",
        48: "../icons/inactive48.png",
        128: "../icons/inactive128.png",
      },
    });
    chrome.action.setTitle({
      tabId: tab.id,
      title: "Create new print view ➡",
    });
  }
}

// Listen for tab updates. This covers full page reloads or URL changes.
chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  // Check if the URL has changed, or the page has finished loading.
  if (
    changeInfo.url ||
    (changeInfo.status && changeInfo.status === "complete")
  ) {
    updateIconForTab(tab);
  }
});

// Listen for tab activation (when the user switches tabs).
chrome.tabs.onActivated.addListener(async () => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  updateIconForTab(tab);
});

// For single-page applications (SPA) that use the History API to update the URL without a full reload
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    updateIconForTab(tab);
  });
});
