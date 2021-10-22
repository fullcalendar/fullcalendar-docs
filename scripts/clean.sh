# always immediately exit upon error
set -e

# don't complain when globs don't match anything
shopt -s nullglob

rm -rf assets/*.*
