---
title: Loading the Code
description: How to get FullCalendar and its dependencies loaded onto your page.
---

You must first get FullCalendar's code loaded onto the page before initializing a calendar. You can write your own script tags or you can use a build system like Webpack.


## Script Tags

First, download FullCalendar's code from the [downloads page]({{ site.baseurl }}/download). After unzipping, find the files `fullcalendar.js` and `fullcalendar.css`.

Then, write something like this in the `<head>` of your page:

```html
<link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
<script src='fullcalendar/fullcalendar.js'></script>
```


## As an NPM module (Webpack / Browserify)

Use NPM to install FullCalendar:

```sh
npm install fullcalendar
```

Then, you must install a build system like [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/) that will automatically bundle all of your code. [See an example repo that uses Webpack &raquo;](https://github.com/fullcalendar/webpack-example)

Then, write a module that imports the FullCalendar module:

```js
import { Calendar } from 'fullcalendar';
```

[In the next section](initialization), you will learn how to initialize a calendar.

You must also include FullCalendar's stylesheet somehow, either manually with a `<link>` tag or via Webpack's [css-loader](https://github.com/webpack-contrib/css-loader).
