---
permalink: /reduced-test-cases
is_community: true
title: Reduced Test Cases
layout: text
assets: [ 'demo-to-codepen.js' ]
---

## Step 1: Isolate the bug on your end

More often than not, the problem is with your code, not with FullCalendar. To determine this, remove as much of your code as possible:

- Remove all unrelated stylesheets and JS files
- Remove all unrelated 3rd party libraries
- Remove all server-side logic. Use static HTML and JSON files instead.

For more info on this technique, read [Reduced Test Cases](http://css-tricks.com/reduced-test-cases/).


## Step 2: Post a public demonstration of the bug

Use a service like [Codepen](http://codepen.io/) or [JSFiddle](http://jsfiddle.net/) to demonstrate the bug online. Enter your JS, CSS, HTML, and JSON and wire up all the relevant dependencies. To help you get started, here are some **debugging templates:**


<!-- NOTE: when updating these URLs, also update in individual doc articles -->

### FullCalendar v5

- <a data-codepen='{{ site.baseurl }}/docs/v5/initialize-globals-demo'>Standard</a>
- <a data-codepen='{{ site.baseurl }}/docs/v5/debug-json-feed'>Standard with JSON feed</a>
- <a data-codepen='{{ site.baseurl }}/docs/v5/debug-scheduler'>Scheduler plugins</a>
- <a data-codepen='{{ site.baseurl }}/docs/v5/debug-scheduler-json-feed'>Scheduler plugins with JSON feed</a>
- <a href='https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v5/react?file=/src/DemoApp.jsx' target='_blank'>React component</a>
- <a href='https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v5/vue?file=/src/DemoApp.vue' target='_blank'>Vue component</a>
- <a href='https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v5/angular?file=/src/app/app.component.ts' target='_blank'>Angular component</a>

### FullCalendar v4

- <a data-codepen='{{ site.baseurl }}/docs/initialize-globals-demo'>Standard</a>
- <a data-codepen='{{ site.baseurl }}/docs/debug-json-feed'>Standard with JSON feed</a>
- <a data-codepen='{{ site.baseurl }}/docs/debug-scheduler'>Scheduler plugins</a>
- <a data-codepen='{{ site.baseurl }}/docs/debug-scheduler-json-feed'>Scheduler plugins with JSON feed</a>
- <a href='https://codesandbox.io/s/2z6wp2jozn' target='_blank'>React component</a>
- <a href='https://codesandbox.io/s/8xyz32l0r8' target='_blank'>Vue component</a>
- <a href='https://stackblitz.com/github/fullcalendar/fullcalendar-example-projects/tree/master/angular' target='_blank'>Angular component</a>

### FullCalendar v3

- <a data-codepen='{{ site.baseurl }}/docs/v3/initialization-demo'>Standard</a>
- <a data-codepen='{{ site.baseurl }}/docs/v3/debug-json-feed'>Standard with JSON feed</a>
- <a data-codepen='{{ site.baseurl }}/docs/v3/timeline-standard-view-demo'>Scheduler</a>
- <a data-codepen='{{ site.baseurl }}/docs/v3/debug-scheduler-json-feed'>Scheduler with JSON feed</a>
