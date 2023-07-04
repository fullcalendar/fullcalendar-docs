#!/usr/bin/env bash
#
# Checks built html files for various things, mainly integrity of links.
# Provide an --external param to verify existence of external links.
# NOTE: this script does NOT build the site beforehand
#
set -e
cd "`dirname $0`/.."

if [[ ! -d './_site' ]]; then
  echo
  echo "Must build site before linting."
  echo
  exit 1
fi

# ignore absolute paths with a leading slash
url_ignores="/^\//"

other_flags=""

if [[ "$1" == "--external" ]]; then
  echo
  echo "Will check external links."
  echo
else
  other_flags="$other_flags --disable-external=true"
fi

bundle exec htmlproofer ./_site \
  --ignore-files='/\.\/_site\/(assets|dist)\/.*/' \
  --ignore-urls="$url_ignores" \
  $other_flags

echo
echo "No problems with built html."
echo
