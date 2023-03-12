#!/bin/bash

mkdir -p docs
rm -rf docs/*
cd www && npm install && npm run build
mv ./dist/* ../docs/
rm -rf dist
