#!/usr/bin/env bash
#
# Builds the jekyll site in a portable manner.
# Accepts one param: production OR development
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

bundler install # installs rubygems
npm install
npm run clean
npm run build
