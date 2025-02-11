// verify-css.js
const fs = require('fs');
const postcss = require('postcss');

// The CSS file path is provided as the first argument.
const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node verify-css.js <path-to-css-file>');
  process.exit(1);
}

try {
  const cssContent = fs.readFileSync(filePath, 'utf8');
  const root = postcss.parse(cssContent, { from: filePath });
  let valid = true;

  // Iterate over top-level nodes.
  for (const node of root.nodes) {
    // Allow comments and empty nodes.
    if (node.type === 'comment') continue;
    if (node.type === 'atrule') {
      // Check that the at-rule is a media rule with exactly "print" as its parameter.
      if (node.name === 'media' && node.params.trim() === 'print') {
        // Optionally, you could further check that ALL rules are nested inside this block,
        // but here we simply check that every top-level node is the proper @media rule.
        continue;
      }
    }
    console.error(
      `ERROR in ${filePath}: Found a top-level CSS rule that is not wrapped in "@media print". Line(s) ${node.source?.start.line} - ${node.source?.end.line}`
    );
    valid = false;
  }

  if (!valid) {
    process.exit(1);
  } else {
    console.log(`SUCCESS: ${filePath} is fully wrapped in an "@media print" block.`);
  }
} catch (err) {
  console.error(`Error processing file ${filePath}:`, err);
  process.exit(1);
}
