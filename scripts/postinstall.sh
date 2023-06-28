#!/usr/bin/env bash

set -e
cd "`dirname $0`/.."

if [[ -n "${GITHUB_ACTION}" ]]; then
  echo "Github Actions detected. Skipping postinstall."
else
  bundle install
fi
