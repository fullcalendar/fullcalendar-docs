---
title: Initialize with ES6 Build System
excerpt_separator: <!--more-->
---

For non-trivial projects, it is recommended to use an ES6-compatible build system like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org) along with a package manager like [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).<!--more--> A setup like this will ensure all necessary files are compiled together into a unified bundle. You won't need to worry about manually including `<script>` tags on the page.

Your build system will need to know how to process CSS files. This is because fullcalendar core and many of the plugins import their own stylesheets. For Webpack, you can use [css-loader](https://webpack.js.org/loaders/css-loader/).

- [View the **Webpack** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/webpack)
- [View the **Rollup** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/rollup)


## Initialize a Calendar with Plugins

FullCalendar's functionality is broken up into "plugins" ([see a full list](plugin-index)). You only include a plugin if you need the features it provides, otherwise, you can omit the plugin and prevent it from being compiled into your bundle, saving space. By default, the bare core of FullCalendar does not do *anything*. You'll *need* to use a plugin to display a calendar view at the very least.

First, use NPM or Yarn to install the `core` package along with any plugins you plan to use:

```
npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list
```

Then, import your plugins and supply them to a new `Calendar` instance:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek'
  }
});
...
```


## Premium Plugins

The set of [premium plugins](premium) works in the same way. You'll need to install the `core` package as well as any premium plugins you plan to use:

```
npm install --save @fullcalendar/core @fullcalendar/resource-timeline
```

Then, import your plugins and supply them to a new `Calendar` instance:

```js
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceTimelinePlugin ],
  initialView: 'resourceTimeline',
  resources: [
    // your resource list
  ]
});
...
```

Example repos:

- [View the **Webpack** + **Scheduler** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/webpack-scheduler)
- [View the **Rollup** + **Scheduler** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/rollup-scheduler)
