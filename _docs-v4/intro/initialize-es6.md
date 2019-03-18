---
title: Initialize with ES6 Build System
excerpt_separator: <!--more-->
---

For non-trivial projects, it is recommended to use an ES6-compatible build system like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org) along with a package manager like [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).<!--more--> A setup like this will ensure all necessary files are compiled together into a unified bundle. You won't need to worry about manually including `<script>` tags on the page.

You'll first need to install FullCalendar's `core` package as well as any plugins. We'll demonstrate the [DayGrid plugin](daygrid-view) with NPM:

```
npm install --save @fullcalendar/core @fullcalendar/daygrid
```

Then, you'll need to set up your build system. Setting up a system like Webpack can be a little complicated. Please read some tutorials on the internet or browse the [Webpack Example Repo](https://github.com/fullcalendar/webpack-example/tree/v4).

In your entrypoint file you will want to write something like this:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ]
  });

  calendar.render();
});
```

## Plugins

FullCalendar's functionality is broken up into "plugins". You only include a plugin if you need the features it provides, otherwise, you can omit the plugin and prevent it from being compiled into your bundle, saving space. By default, the bare core of FullCalendar does not do *anything*. You'll *need* to use a plugin to display a calendar view at the very least.

For a full list of plugins, visit the [Plugin Index &raquo;](plugin-index)

Before using a plugin, you must install it view npm/yarn. You can install multiple plugins at once:

```
npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list
```

When using an ES6 build system, you must pass in the references exported from each plugin module into the `plugins` array:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ]
});
...
```

Specifying anything else (like an array of strings) will not work!

## CSS

FullCalendar's core module, in addition to its plugins, provide stylesheets that must be included on your page. In the above example, you would need to somehow include the following files:

```html
node_modules/@fullcalendar/core/main.css
node_modules/@fullcalendar/daygrid/main.css
node_modules/@fullcalendar/timegrid/main.css
node_modules/@fullcalendar/list/main.css
```

One way to do this is to write a build script that concatenates these together. Then, serve the concatenated file.

Alternatively, you could use a system like Webpack with a [css-loader](https://github.com/webpack-contrib/css-loader). You would then be able to import your stylesheets **from your JavaScript**:

```js
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
```

A different approach is to use [SASS](https://sass-lang.com/). Assuming you have `node_modules` in your `includePaths`, you could include the stylesheets **from your SASS files**.
