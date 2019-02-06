---
title: Initialize with Script Tags
---

It's possible to manually include the necessary `<script>` tags in the head of your HTML page and then initialize a calendar via browser globals.

This technique is simple because you don't need to worry about a build system. However, it's less maintainable in the long-run because you need to manually ensure all dependencies are included and all script tags are ordered correctly. If you need something more advanced, read the article on [Initializing with an ES6 build system](initialize-es6).

The first step is to download and unzip a ZIP archive from the [Downloads page](/download). Alternatively, you can use a CDN like unpkg (see [fullcalendar's list of files](https://unpkg.com/fullcalendar/)). Once you get ahold of the files, do something like this:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />

    <link href='fullcalendar/core/main.css' rel='stylesheet' />
    <link href='fullcalendar/daygrid/main.css' rel='stylesheet' />

    <script src='fullcalendar/core/main.js'></script>
    <script src='fullcalendar/daygrid/main.js'></script>

    <script>

      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'dayGrid' ]
        });

        calendar.render();
      });

    </script>
  </head>
  <body>

    <div id='calendar'></div>

  </body>
</html>
```

You'll need to ensure the correct JavaScript and CSS external files are included in the `<head>` of you page. You'll always need the `core` files, which offer the `FullCalendar` global variable.

[View a runnable example &raquo;](initialize-globals-demo)

## Plugins

FullCalendar's functionality is broken up into "plugins". You only include a plugin if you need the features it provides, otherwise, you can omit the plugin and save your users from having to download it. By default, the bare core of FullCalendar does not do *anything*. You'll *need* to use a plugin to display a calendar view at the very least.

For a full list of plugins, visit the [Plugin Index &raquo;](plugin-index)

Merely including the `<script>` and `<link>` tags for a plugin is not enough to correctly load it. You'll need to active each plugin in the `plugins` list:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid', 'timeGrid', 'list' ] // an array of strings!
});
```

Keep in mind, this technique will not work if you are using an [ES6 build system](initialize-es6)!
