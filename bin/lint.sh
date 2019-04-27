#!/usr/bin/env bash
#
# This script is run by a continuous integration system like TravisCI
# It lints, and if successful, deploys.
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

gulp lintspaces

./bin/update.sh
./bin/htmlproofer.sh
