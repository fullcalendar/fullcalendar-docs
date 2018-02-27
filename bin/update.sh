#!/usr/bin/env bash
#
# Builds the jekyll site in a portable manner.
# Accepts one param: production OR development (default)
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

# install rubygems
bundler install

npm install

if [[ "$1" ]]
then
  echo 'Building as PRODUCTION'
  JEKYLL_ENV="$1" bundle exec jekyll build
else
  echo 'Building as DEVELOPMENT'
  bundle exec jekyll build
fi
