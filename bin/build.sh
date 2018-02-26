#!/usr/bin/env bash
#
# Builds the jekyll site in a portable manner.
# Accepts one param. If values is "production", builds with production paths/urls.
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

if [[ "$1" == "production" ]]
then
  JEKYLL_ENV=production bundle exec jekyll build
else
  bundle exec jekyll build
fi
