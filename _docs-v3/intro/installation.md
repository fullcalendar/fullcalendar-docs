---
title: Loading the Code
description: How to get FullCalendar and its dependencies loaded onto your page.
---

You must first get FullCalendar's code loaded onto the page before initializing a calendar. You can write your own script tags or you can use a build system like Webpack.


## Script Tags

First, download a ZIP from the [releases page]({{ site.fullcalendar_repo }}/releases). After unzipping, find the files `fullcalendar.js` and `fullcalendar.css`.

Then, download the JavaScript files for FullCalendar's two dependencies: [jQuery](https://jquery.com/) and [Moment](https://momentjs.com/).

Then, write something like this in the `<head>` of your page:

```html
<link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
<script src='lib/jquery.min.js'></script>
<script src='lib/moment.min.js'></script>
<script src='fullcalendar/fullcalendar.js'></script>
```

It is important that you load jQuery and Moment's JS files *before* loading FullCalendar's JS files.


## As an NPM module (Webpack / Browserify)

Use NPM to install FullCalendar:

```sh
npm install jquery moment fullcalendar
```

Then, you must install a build system like [Webpack](https://webpack.js.org/) or [Browserify](https://browserify.org/) that will automatically bundle all of your code. [See an example repo that uses Webpack &raquo;](https://github.com/fullcalendar/webpack-example/tree/v3)

Then, write a module that imports both jQuery and FullCalendar:

```js
import $ from 'jquery';
import 'fullcalendar';
```

Your import for `fullcalendar` does not need to be named. It will attached to jQuery as a plugin. [In the next section](initialization), you will learn how to use jQuery to initialize a calendar.

You must also include FullCalendar's stylesheet somehow, either manually with a `<link>` tag or via Webpack's [css-loader](https://github.com/webpack-contrib/css-loader).
