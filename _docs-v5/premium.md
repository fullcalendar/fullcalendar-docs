---
title: Premium Plugins
layout: docs-sublanding
demos:
  - timeline-standard-view-demo
  - vertical-resource-standard-demo
images:
  - filename: timeline-print.png
    caption: Print optimization in Timeline view
---

FullCalendar "Scheduler" is the name for a collection of premium plugins. There are currently two distinct plugins that provide new views, both of which are good at displaying *resources* (things that events can be assigned to, like rooms):

- [Timeline View](timeline-view) - good at displaying a large number of resources
- [Vertical Resource View](vertical-resource-view) - good at displaying a fewer number of resources
- [Print Optimization](print)

Scheduler is a premium product that has different licensing than the standard FullCalendar library.
<a href='{{ site.baseurl }}/license' class='more-link'>More about licensing</a>


## Free Trial


Scheduler can be downloaded and evaluated for an unlimited amount of time, free of charge. This evaluation version is licensed under a Creative Commons license that does not allow distribution of source code modifications nor use in commercial production websites or products.</p>

During your free trial, in order to hide the license warning, use the following [license key]({{ site.baseurl }}/docs/schedulerLicenseKey):</p>

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
});
```

[Learn how to initialize a calendar &raquo;]({{ site.baseurl }}/docs/getting-started)
