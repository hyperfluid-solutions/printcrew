#!/bin/bash

VERSION=$(jq -r .version package.json)
BUILDDIR="build"

if ! [[ -d "$BUILDDIR" ]]; then
  mkdir -p "$BUILDDIR"
fi

zip -r $BUILDDIR/printcrew-$VERSION.zip manifest.json src/*.js icons/* styles/*
