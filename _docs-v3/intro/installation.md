---
title: Loading the Code
description: How to get FullCalendar and its dependencies loaded onto your page.
---

You must first get FullCalendar's code loaded onto the page before initializing a calendar. You can write your own script tags or you can use a build system like Webpack.


## Script Tags

First, download FullCalendar's code from the [downloads page]({{ site.baseurl }}/download). After unzipping, find the files `fullcalendar.js` and `fullcalendar.css`.

Then, download the JavaScript files for FullCalendar's two dependencies: [jQuery](http://jquery.com/) and [Moment](http://momentjs.com/).

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
npm install jquery fullcalendar
```

Then, you must install a build system like [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/) that will automatically bundle all of your code. [See an example repo that uses Webpack &raquo;](https://github.com/fullcalendar/webpack-example)

Then, write a module that imports both jQuery and FullCalendar:

```js
import $ from 'jquery';
import 'fullcalendar';
```

Your import for `fullcalendar` does not need to be named. It will attached to jQuery as a plugin. [In the next section](initialization), you will learn how to use jQuery to initialize a calendar.

You must also include FullCalendar's stylesheet somehow, some options:  
Html link tag:  
```html
<link rel="stylesheet" type="text/css" href="./node_modules/fullcalendar/dist/fullcalendar.min.css">
``` 
Css import:  
```css
@import "./node_modules/fullcalendar/dist/fullcalendar.min.css";
```
webpack [css-loader](https://github.com/webpack-contrib/css-loader) plugin:  
```js
import "./node_modules/fullcalendar/dist/fullcalendar.min.css"
```
*(the path names might be different)*
