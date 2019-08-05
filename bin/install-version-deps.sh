#!/usr/bin/env bash

set -e # always immediately exit upon error

cd "`dirname $0`/.." # start in project root

for pkg_json in assets/v*/package.json
do
  dir=`dirname "$pkg_json"`
  echo "installing $dir..."

  cd "$dir"
  npm ci
  cd -
done
