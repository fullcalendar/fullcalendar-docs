---
title: Getting Started
---

There are a few different ways to install the FullCalendar library.


## Individual Packages

Use fullcalendar's individual packages if you use an ES6 build system like Webpack. First, install them from [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). You'll first need to install FullCalendar’s `core` package as well as any plugins. Example:

```sh
npm install --save @fullcalendar/core @fullcalendar/daygrid
```

To initialize a calendar, <a href='initialize-es6' class='more-link'>read about using an ES6 build system</a>


## Pre-built Bundles

You might want to avoid a built system by [initializing fullcalendar with script tags and globals](initialize-globals). If so, use one of the pre-built bundles:

- `fullcalendar`
  - **Download**: <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.releases[0].version }}/fullcalendar-{{ site.data.releases[0].version }}.zip' onclick="ga('send', 'pageview', '/downloads/fullcalendar-{{ site.data.releases[0].version }}.zip')">fullcalendar-{{ site.data.releases[0].version }}.zip</a>
  - **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar)
  - **NPM:** `npm install fullcalendar`
- `fullcalendar-scheduler` - [a premium product](premium)
  - **Download**: <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.releases[0].version }}/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip' onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip')">fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip</a>
  - **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar-scheduler)
  - **NPM:** `npm install fullcalendar-scheduler`
