#!/usr/bin/env bash

set -e # always immediately exit upon error

cd "`dirname $0`/.." # start in project root

npm run build
npx gulp lintspaces
./scripts/htmlproofer.sh
