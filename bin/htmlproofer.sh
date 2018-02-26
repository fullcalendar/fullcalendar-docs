#!/usr/bin/env bash
#
# Checks built html files for various things, mainly integrity of links.
# NOTE: this script does NOT build the site beforehand
#
set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

# ignore paths we know will exist once live including:
# scheduler/license-details
# scheduler/license-faq
url_ignores="/^\/(releases|issues|scheduler\/license-(details|faq))(\/|$)/"

other_flags=""

# if in TravisCI environment, don't check external link.
# too many problems with external sites giving bogus status codes.
if [[ "$TRAVIS_BRANCH" ]]
then
  other_flags="$other_flags --disable-external"
  echo
  echo "TravisCI detected. Won't check external sites."
  echo
fi

# flags:
# --check-favicon    # would like to enable but chokes on /fragments/
# --assume-extension # treat /mypath as /mypath.html
# --url-ignore       # if these paths don't resolve, don't complain
#
bundle exec htmlproofer ./_site \
  --check-html \
  --assume-extension \
  --url-ignore "$url_ignores" \
  $other_flags

echo
echo "No problems with built html."
echo
