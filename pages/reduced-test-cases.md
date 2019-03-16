---
permalink: /reduced-test-cases
is_support: true
title: Reduced Test Cases
layout: text
custom_js: demo-to-codepen
---

## Step 1: Isolate the bug on your end

More often than not, the problem is with your code, not with FullCalendar. To determine this, remove as much of your code as possible:

- Remove all unrelated stylesheets and JS files
- Remove all unrelated 3rd party libraries
- Remove all server-side logic. Use static HTML and JSON files instead.

For more info on this technique, read [Reduced Test Cases](http://css-tricks.com/reduced-test-cases/).


## Step 2: Post a public demonstration of the bug

Use a service like [Codepen](http://codepen.io/) or [JSFiddle](http://jsfiddle.net/) to demonstrate the bug online. Enter your JS, CSS, HTML, and JSON and wire up all the relevant dependencies. To help you get started, here are some **debugging templates:**

<div style='margin:2em 0 2em 2em'>
  <div style='font-weight:bold'>V4 FullCalendar Standard</div>
  <div style='margin-top:.5em'>
    <a data-codepen='{{ site.baseurl }}/docs/initialize-globals-demo'>simple template</a> |
    <a data-codepen='{{ site.baseurl }}/docs/debug-json-feed'>JSON feed template</a>
  </div>
</div>

<div style='margin:2em 0 2em 2em'>
  <div style='font-weight:bold'>V4 Scheduler Add-on</div>
  <div style='margin-top:.5em'>
    <a data-codepen='{{ site.baseurl }}/docs/debug-scheduler'>simple template</a> |
    <a data-codepen='{{ site.baseurl }}/docs/debug-scheduler-json-feed'>JSON feed template</a>
  </div>
</div>

<div style='margin:2em 0 2em 2em'>
  <div style='font-weight:bold'>V3 FullCalendar Standard</div>
  <div style='margin-top:.5em'>
    <a data-codepen='{{ site.baseurl }}/docs/v3/initialization-demo'>simple template</a> |
    <a data-codepen='{{ site.baseurl }}/docs/v3/debug-json-feed'>JSON feed template</a>
  </div>
</div>

<div style='margin:2em 0 2em 2em'>
  <div style='font-weight:bold'>V3 Scheduler Add-on</div>
  <div style='margin-top:.5em'>
    <a data-codepen='{{ site.baseurl }}/docs/v3/timeline-standard-view-demo'>simple template</a> |
    <a data-codepen='{{ site.baseurl }}/docs/v3/debug-scheduler-json-feed'>JSON feed template</a>
  </div>
</div>

*Instructions:* Make your changes, Click *Share* at the top, then get the *Link*.
