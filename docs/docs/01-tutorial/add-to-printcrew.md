---
id: add-to-print-crew
title: Add to Print Crew
---

Thank you for contributing to our Chrome extension! This guide will walk you through adding print styles for a new site, updating the extension's `manifest.json`, and submitting a pull request (PR) on GitHub.

---

## Step 1: Fork and Clone the Repository

1. **Fork the Repository:**
   - Navigate to the repository on GitHub.
   - Click the **Fork** button in the upper-right corner to create your own copy.

1. **Clone Your Fork Locally:**

```bash
git clone https://github.com/hyperfluid-solutions/printcrew.git
cd printcrew
```

1. **Create a New Branch:**

```bash
git checkout -b feat/new-site-name
```

## Step 2: Create and Add the CSS File

1. Create a New CSS File under `styles/{siteName}/{viewName}/style.css`

## Step 3: Modify the `manifest.json`

1. Open `manifest.json`:
1. Add a New Entry for the Site:

```json
{
  "content_scripts": [
    {
      "matches": ["*://example.com/*"],
      "css": ["styles/example.com.css"]
    }
    // ... other site entries
  ]
}
```

## Step 4: Test Your Changes

1. Load the Extension in Chrome:

  - Open Chrome and navigate to `chrome://extensions`
  - Enable **Developer Mode** (toggle in the top right)
  - Click **Load unpacked** and select your project directory

1. Visit the New Site:

  - Navigate to the new site
  - Verify your custom styles are applied correctly in the print preview screen

1. Test with Print ot PDF:

  - This step is recommended if the view is hidden behind an account or login
  - Open the print dialog (`Ctrl+P` or `Cmd+P`)
  - Choose **Save as PDF** to generate a PDF preview and ensure your print styles render as expected.
  - If this is safe to share, save the file to be added to your pull request.
