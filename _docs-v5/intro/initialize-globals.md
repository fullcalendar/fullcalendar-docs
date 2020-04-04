---
title: Initialize with Script Tags
---

It's possible to manually include the necessary `<script>` tags in the head of your HTML page and then initialize a calendar via browser globals. You will leverage one of FullCalendar's prebuilt bundles to do this.

The first step is to visit the [Getting Started page](getting-started) to download a ZIP archive or get CDN links. Once you have that, write something like this:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link href='fullcalendar/main.css' rel='stylesheet' />
    <script src='fullcalendar/main.js'></script>
    <script>

      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          defaultView: 'dayGridMonth'
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

[View a runnable example &raquo;](initialize-globals-demo)

The `main.js` file does <strong>NOT</strong> include the following plugins:

- `google-calendar` - write a separate script tag for `<bundle-dir>/google-calendar.js`
- `rrule` - write separate script tag for `<bundle-dir>/rrule.js` and the [rrule JS file](https://www.jsdelivr.com/package/npm/rrule?path=dist%2Fes5)
- `luxon` - write separate script tag for `<bundle-dir>/luxon.js` and the [luxon JS file](https://www.jsdelivr.com/package/npm/luxon?path=build%2Fglobal)
- `moment` - write separate script tag for `<bundle-dir>/moment.js` and the [moment JS file](https://www.jsdelivr.com/package/npm/moment)
- `moment-timezone` - write separate script tag for `<bundle-dir>/moment-timezone.js` and the [moment-timezone JS file(s)](https://www.jsdelivr.com/package/npm/moment-timezone)


## Scheduler

If you want to use any of the premium [Scheduler]({{ site.baseurl }}/scheduler) functionality, use the `fullcalendar-scheduler` bundle instead. Its ZIP and CDN links are also listed on the [Getting Started page](getting-started). The code will be virtually the same:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link href='fullcalendar-scheduler/main.css' rel='stylesheet' />
    <script src='fullcalendar-scheduler/main.js'></script>
    <script>

      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          defaultView: 'resourceTimelineWeek'
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

You won't need to include the `fullcalendar-scheduler` bundle AND the `fullcalendar` bundle. The `fullcalendar-scheduler` bundle includes everything.


## Plugins

If you're already using a build system like [Webpack](https://webpack.js.org/), or you want a smaller build by trimming away plugins you don't use, look at how to set up FullCalendar with an [ES6 build system](initialize-es6).
