---
title: Scheduler Plugin
layout: docs-sublanding
demos:
  - timeline-standard-view-demo
  - vertical-resource-standard-demo
---

The Scheduler plugin provides you with two extra calendar views to use, both of which are good at displaying *resources* (things that events can be assigned to, like rooms):

- [Timeline View](timeline-view) - good at displaying a large number of resources
- [Vertical Resource View](vertical-resource-view) - good at displaying a fewer number of resources

Scheduler is a [premium plugin]({{ site.baseurl }}/scheduler) that has different licensing than the core FullCalendar library. [More information &raquo;]({{ site.baseurl }}/scheduler/license)
/pull/38/pull/38

## Installation with Script Tags

In the `<head>` of your page, include the necessary FullCalendar *and* Scheduler files:

```html
<link href='fullcalendar.css' rel='stylesheet' />
<link href='scheduler.css' rel='stylesheet' />
<script src='moment.js'></script>
<script src='jquery.js'></script>
<script src='fullcalendar.js'></script>
<script src='scheduler.js'></script>
```

The ordering of the `<script>` tags is important.


## Installation as an NPM Module (Webpack / Browserify)

Use NPM to install FullCalendar:

```sh
npm install jquery fullcalendar fullcalendar-scheduler
```

Then, you must install a build system like [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/) that will automatically bundle all of your code. [See an example repo that uses Webpack &raquo;](https://github.com/fullcalendar/scheduler-webpack-example)

Then, write a module that imports both jQuery, FullCalendar, and Scheduler:

```js
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
```

You must also include FullCalendar's stylesheet somehow, some options:

Html link tag:

```html
<link rel="stylesheet" type="text/css" href="./node_modules/fullcalendar-scheduler/dist/scheduler.min.css">
```

Css import:

```css
@import "./node_modules/fullcalendar-scheduler/dist/scheduler.min.css";
```

webpack [css-loader](https://github.com/webpack-contrib/css-loader) plugin:

```js
import "./node_modules/fullcalendar-scheduler/dist/scheduler.min.css"
```

*(the path names might be different)*

## Initializing a View

To learn how to initialize a calendar with a resource view, see the documentation for [Timeline View](timeline-view) and [Vertical Resource View](vertical-resource-view).
