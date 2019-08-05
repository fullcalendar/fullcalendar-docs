#!/usr/bin/env bash

set -e # always immediately exit upon error

cd "`dirname $0`/.." # start in project root

for pkg_json in assets/v*/package.json
do
  dir=`dirname "$pkg_json"`
  echo "installing $dir..."

  cd "$dir"

  # would want to do `npm ci`
  # but server doesn't have it
  rm -rf node_modules
  npm install

  cd -
done
