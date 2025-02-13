---
id: testing-print-styles
title: Testing Your Print Styles
---

Chrome Developer Tools let you simulate how your page will appear when printed.

## Emulating Print Media in DevTools

### Method 1: Using the Command Menu

1. Open the Command Menu with `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).
2. Type **"Show Rendering"** and select it.
3. In the **Rendering** panel at the bottom, locate **Emulate CSS media type** and choose **print**.

### Method 2: Using the Rendering Panel Directly

1. Click the **three vertical dots** in the top-right of the DevTools pane.
2. Select **More Tools** > **Rendering**.
3. In the Rendering panel, select **print** from the **Emulate CSS media type** dropdown.

Your webpage will refresh to display the print styles. Make adjustments as needed and see the results instantly.

## Testing with Print to PDF

For a more realistic preview of how your page will look when printed, use your browser’s **"Print to PDF"** feature. This process allows you to generate a PDF version of your page and inspect the final output, including layout, styling, and pagination.

- **How to Do It:**
  1. Press `Ctrl+P` (or `Cmd+P` on macOS) to open the print dialog.
  2. Choose **"Save as PDF"** as the destination.
  3. Click **Print/Save** to generate the PDF.
  4. Open the PDF to review how your print styles render on paper.

*Example Screenshot:*
![Rendering Panel](https://via.placeholder.com/600x400?text=Rendering+Panel)
