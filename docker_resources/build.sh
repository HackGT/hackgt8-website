#!/bin/sh
yarn install
yarn global add parcel-bundler
ls
PARCEL_WORKERS=1 parcel build src/index.html
