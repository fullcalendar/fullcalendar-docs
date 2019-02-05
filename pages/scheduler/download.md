---
permalink: /scheduler/download
title: Download Scheduler
layout: scheduler-text
---

{% assign latest_version = "1.9.4" %}


# Free Trial

Scheduler can be downloaded and evaluated for an unlimited amount of time, free of charge.
This evaluation version is licensed under a Creative Commons license that does not allow distribution
of source code modifications nor use in commercial production websites or products.

[Read more about licensing &raquo;]({{ site.baseurl }}/scheduler/license)


## License Key

While developing, in order to hide the license warning, use the following key:

```js
$('#calendar').fullCalendar({
  schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
});
```

<h2>
  Download:
  <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ latest_version }}/fullcalendar-scheduler-{{ latest_version }}.zip'
    onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ latest_version }}.zip')"
    >fullcalendar-scheduler-{{ latest_version }}.zip</a>
</h2>

[View changelog and all releases &raquo;]({{ site.fullcalendar_scheduler_repo }}/releases)


## Package Managers

You can install Scheduler via [NPM](https://www.npmjs.com/):

```
$ npm install fullcalendar-scheduler
```

You can also install Scheduler via [Bower](https://bower.io/):

```
$ bower install fullcalendar-scheduler
```


## V4 Beta Release

Want to try the v4 beta release, which doesn't rely on jQuery or Moment anymore?

[More information &raquo;]({{ site.baseurl }}/docs/v4/release-notes)
