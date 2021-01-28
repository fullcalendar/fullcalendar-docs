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


## Package Managers

FullCalendar Scheduler is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). You'll first need to install FullCalendar’s `core` package as well as the premium plugins you plan to use. For example, the following is how you install [Resource Timeline View](timeline-view):

```sh
npm install --save @fullcalendar/core @fullcalendar/resource-timeline
```

To initialize a calendar, <a href='initialize-es6' class='more-link'>read about using an ES6 build system</a>


## Download

You can also download the library manually:

**Latest:** <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.releases[0].version }}/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip' onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip')">
  fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip
</a>
(<a href='{{ site.fullcalendar_scheduler_repo }}/releases'>view all releases</a>)

Once you've downloaded it, you can initialize a calendar <a href='initialize-globals' class='more-link'>using script tags and browser globals</a>
