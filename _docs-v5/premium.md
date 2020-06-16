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

During the free trial, in order to hide the license warning, use the following key:

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
});
```

But first, you must install the necessary plugins...


## Package Managers

FullCalendar Scheduler is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). You'll first need to install FullCalendar’s `core` package as well as the premium plugins you plan to use. For example, the following is how you install [Resource Timeline View](timeline-view):

```sh
npm install --save @fullcalendar/core@5.0.0-rc @fullcalendar/resource-timeline@5.0.0-rc
```

To initialize a calendar, <a href='initialize-es6' class='more-link'>read about using an ES6 build system</a>


## Download

You can also download the library manually:

**Latest:** [fullcalendar-scheduler-5.0.0-rc.zip](https://github.com/fullcalendar/fullcalendar-scheduler/releases/download/v5.0.0-rc/fullcalendar-scheduler-5.0.0-rc.zip)

(<a href='{{ site.fullcalendar_scheduler_repo }}/releases'>view all releases</a>)

Once you've downloaded it, you can initialize a calendar <a href='initialize-globals' class='more-link'>using script tags and browser globals</a>
