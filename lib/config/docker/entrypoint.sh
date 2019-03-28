#!/usr/bin/env bash

cd /ock-core
rm -rf package-lock.json > /dev/null 2>&1
rm -rf packages/core/package-lock.json 2>&1
npm --quiet install lerna -g && npm --quiet install -g nodemon
touch lerna.before
lerna bootstrap >> output.log 2> errors.log

touch lerna.ok

bash
