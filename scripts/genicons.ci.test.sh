#!/bin/bash

if [[ -n $( git status --porcelain icons) ]]; then
  exit 1
fi
