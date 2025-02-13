---
id: locating-and-editing-stylesheets
title: Locating and Editing Stylesheets
---

## Locating and Editing Stylesheets

Once you have DevTools open, you can inspect and modify your styles.

### Finding Your Styles

- **Elements Panel:** Click on an element to view its CSS rules in the **Styles** pane.
- **Sources Panel:** Alternatively, use the **Sources** tab to browse and edit your CSS files directly.

### Adding Print-Specific Styles with `@media print`

To create styles that only apply when printing, add an `@media print` block. You can test these changes live in DevTools.

#### Example CSS

```css
@media print {
  /* Hide elements that aren’t needed for printing */
  .sidebar, .navigation {
    display: none;
  }
  
  /* Optimize text and layout for print */
  body {
    font-size: 14pt;
    line-height: 1.4;
    background: #fff;
    color: #000;
    margin: 0;
    padding: 1em;
  }
  
  /* Ensure images resize appropriately */
  img {
    max-width: 100%;
    height: auto;
  }
}
