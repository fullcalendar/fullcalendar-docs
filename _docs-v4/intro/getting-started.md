---
title: Getting Started
---



# FullCalendar Normal Stuff

<h2>
  Latest:
  <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.fullcalendar_latest.version }}/fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip'
    onclick="ga('send', 'pageview', '/downloads/fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip')"
    >fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip</a>
</h2>

[Changelog + All Releases &raquo;]({{ site.fullcalendar_repo }}/releases)


## Package Managers

FullCalendar is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). [Follow the instructions &raquo;]({{ site.baseurl }}/docs/initialize-es6)


## CDN

A number of free CDNs host FullCalendar's dist files. A clever way to choose a CDN and figure out the URLs of the files you need is to visit the package on [Yarn](https://yarnpkg.com/). For example, visit the [@fullcalendar/core](https://yarnpkg.com/en/package/@fullcalendar/core) package. Then, look at the "CDNs" area on the sidebar.

You'll be manually initializing FullCalendar with [script tags and globals]({{ site.baseurl }}/docs/initialize-globals), so make sure you've included all the necessary files for whatever [plugins you choose]({{ site.baseurl }}/docs/plugin-index).



# FullCalendar Scheduler Stuff

## Free Trial

Scheduler can be downloaded and evaluated for an unlimited amount of time, free of charge.
This evaluation version is licensed under a Creative Commons license that does not allow distribution
of source code modifications nor use in commercial production websites or products.

[Read more about licensing &raquo;]({{ site.baseurl }}/scheduler/license)


## License Key

While developing, in order to hide the license warning, use the following key:

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
});
```

<h2>
  Download:
  <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.fullcalendar_scheduler_latest.version }}/fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip'
    onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip')"
    >fullcalendar-scheduler-{{ site.data.fullcalendar_scheduler_latest.version }}.zip</a>
</h2>

[View changelog and all releases &raquo;]({{ site.fullcalendar_scheduler_repo }}/releases)


## Package Managers

FullCalendar Scheduler is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). [Follow the instructions &raquo;]({{ site.baseurl }}/docs/initialize-es6)

