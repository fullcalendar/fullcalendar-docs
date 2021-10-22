# always immediately exit upon error
set -e

cd "`dirname $0`/.." # start in project root

npm run build
./scripts/lintspaces.js
./scripts/htmlproofer.sh
