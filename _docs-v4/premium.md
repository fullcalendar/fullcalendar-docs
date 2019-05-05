---
title: Premium Plugins
layout: docs-sublanding
demos:
  - timeline-standard-view-demo
  - vertical-resource-standard-demo
---

FullCalendar "Scheduler" is the name for a collection of premium plugins. There are currently two distinct plugins that provide new views, both of which are good at displaying *resources* (things that events can be assigned to, like rooms):

- [Timeline View](timeline-view) - good at displaying a large number of resources
- [Vertical Resource View](vertical-resource-view) - good at displaying a fewer number of resources

Scheduler is a premium product that has different licensing than the standard FullCalendar library.
<a href='{{ site.baseurl }}/license' class='more-link'>More about licensing</a>


## Free Trial

Scheduler can be downloaded and evaluated for an unlimited amount of time, free of charge.
This evaluation version is licensed under a Creative Commons license that does not allow distribution
of source code modifications nor use in commercial production websites or products.


### License Key

While developing, in order to hide the license warning, use the following key:

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
});
```

<h3>
  Download:
  <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.fullcalendar_scheduler_latest.version }}/fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip'
    onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip')"
    >fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip</a>
</h3>

[View changelog and all releases &raquo;]({{ site.fullcalendar_scheduler_repo }}/releases)


### Package Managers

FullCalendar Scheduler is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). [Follow the instructions &raquo;]({{ site.baseurl }}/docs/initialize-es6)
