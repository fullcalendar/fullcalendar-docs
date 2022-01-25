#!/usr/bin/env bash
#
# Checks built html files for various things, mainly integrity of links.
# Provide an --external param to verify existence of external links.
# NOTE: this script does NOT build the site beforehand
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

if [[ ! -d './_site' ]]; then
  echo
  echo "Must build site before linting."
  echo
  exit 1
fi

# ignore absolute paths with a leading slash
url_ignores="/^\//"

other_flags=""

if [[ "$1" == "--external" ]]
then
  echo
  echo "Will check external links."
  echo
else
  other_flags="$other_flags --disable-external"
fi

# flags:
# --check-favicon    # would like to enable but chokes on /fragments/
# --assume-extension # treat /mypath as /mypath.html
# --url-ignore       # if these paths don't resolve, don't complain
#
bundle exec htmlproofer ./_site \
  --check-html \
  --assume-extension \
  --file-ignore '/\.\/_site\/assets\/.*/' \
  --url-ignore "$url_ignores" \
  $other_flags

echo
echo "No problems with built html."
echo
