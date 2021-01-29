---
title: Premium Plugins
is_premium: true
layout: docs-sublanding
demos:
  - timeline-standard-view-demo
  - vertical-resource-standard-demo
images:
  - filename: timeline-print.png
    caption: Print optimization in Timeline view
---

FullCalendar Premium (also known as "FullCalendar Scheduler") is a collection of plugins released under a [different license]({{ site.baseurl }}/license) than the standard plugins. Each plugin offers additional functionality:

- [Timeline View](timeline-view) - display a large number of resources, with dates/times spanning horizontally
- [Vertical Resource View](vertical-resource-view) - display resources as columns
- [Print Optimization](print) - improve how your calendar looks when printed

A Premium plugin is initialized in the same way a typical Standard plugin would be initialized.

[Learn how to initialize a calendar &raquo;]({{ site.baseurl }}/docs/getting-started)


## Free Trial

FullCalendar Premium can be downloaded and evaluated for an unlimited amount of time, free of charge. This evaluation version is licensed under a [Creative Commons license](https://creativecommons.org/licenses/by-nc-nd/4.0/) that does not allow distribution of source code modifications nor use in commercial production websites or products.

During your free trial, in order to hide the license warning, use the following [license key](schedulerLicenseKey):

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
});
```

[Learn how to initialize a calendar &raquo;]({{ site.baseurl }}/docs/getting-started)
