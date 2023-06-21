#!/usr/bin/env bash

set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

#
# INSTRUCTIONS:
# 1. temporarily remove all @fullcalendar dependencies from package.json
# 2. replace with "preact": "^10.0.5"
# 3. run `npm install`
# 4. run this script
# 5. in demo-v6-head.html, change resources to:
#      {% if page.needs_premium %}
#        <script src='{{ site.baseurl }}/fullcalendar-scheduler.min.js'></script>
#      {% else %}
#        <script src='{{ site.baseurl }}/fullcalendar.min.js'></script>
#      {% endif %}
#

rm -rf node_modules/@fullcalendar
rm -rf node_modules/fullcalendar
rm -rf node_modules/fullcalendar-scheduler

mkdir -p node_modules/@fullcalendar
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/core/dist node_modules/@fullcalendar/core
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/interaction/dist node_modules/@fullcalendar/interaction
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/daygrid/dist node_modules/@fullcalendar/daygrid
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/timegrid/dist node_modules/@fullcalendar/timegrid
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/list/dist node_modules/@fullcalendar/list
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/multimonth/dist node_modules/@fullcalendar/multimonth
cp -r /Users/adam/Code/fullcalendar-workspace/standard/packages/bootstrap5/dist node_modules/@fullcalendar/bootstrap5
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/premium-common/dist node_modules/@fullcalendar/premium-common
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/scrollgrid/dist node_modules/@fullcalendar/scrollgrid
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/timeline/dist node_modules/@fullcalendar/timeline
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/resource/dist node_modules/@fullcalendar/resource
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/resource-timegrid/dist node_modules/@fullcalendar/resource-timegrid
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/resource-timeline/dist node_modules/@fullcalendar/resource-timeline
cp -r /Users/adam/Code/fullcalendar-workspace/premium/packages/resource-daygrid/dist node_modules/@fullcalendar/resource-daygrid

cp -r /Users/adam/Code/fullcalendar-workspace/standard/bundle/dist/index.global.min.js fullcalendar.min.js
cp -r /Users/adam/Code/fullcalendar-workspace/premium/bundle/dist/index.global.min.js fullcalendar-scheduler.min.js
