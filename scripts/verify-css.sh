#!/bin/bash

echo "Finding CSS files..."
# Find all .css files except those in node_modules.
files=$(find . -type f -name "*.css" -not -path "*/node_modules/*")
exit_code=0
for file in $files; do
  echo "Verifying $file ..."
  node test/verify-css.js "$file" || exit_code=1
done
if [ $exit_code -ne 0 ]; then
  echo "One or more CSS files are not entirely wrapped in '@media print'."
  exit 1
fi
echo "All CSS files are valid."
