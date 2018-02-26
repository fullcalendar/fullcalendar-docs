#!/usr/bin/env bash
#
# Builds the jekyll site in a portable manner.
# Accepts one param: production OR development (default)
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

if [[ "$1" ]]
then
  JEKYLL_ENV="$1" bundle exec jekyll build
else
  bundle exec jekyll build
fi
