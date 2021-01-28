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
          initialView: 'dayGridMonth'
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


## Scheduler

If you want to use any of the [premium Scheduler functionality]({{ site.baseurl }}/pricing), use the `fullcalendar-scheduler` bundle instead. Its ZIP and CDN links are also listed on the [Getting Started page](getting-started). The code will be virtually the same:

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
          initialView: 'resourceTimelineWeek'
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


## Bundle Contents

Here are the packages inside of each bundle:

- `fullcalendar` - the `main.js` and `main.css` files include the following packages:
  - `@fullcalendar/core`
  - `@fullcalendar/interaction`
  - `@fullcalendar/daygrid`
  - `@fullcalendar/timegrid`
  - `@fullcalendar/list`
  - `@fullcalendar/bootstrap` (though you'll still need Bootstrap/FontAwesome. [more info](bootstrap-theme))
  - `@fullcalendar/google-calendar`
- `fullcalendar-scheduler` - the `main.js` and `main.css` files include the following packages:
  - `@fullcalendar/core`
  - `@fullcalendar/interaction`
  - `@fullcalendar/daygrid`
  - `@fullcalendar/timegrid`
  - `@fullcalendar/list`
  - `@fullcalendar/bootstrap` (though you'll still need Bootstrap/FontAwesome. [more info](bootstrap-theme))
  - `@fullcalendar/google-calendar`
  - `@fullcalendar/adaptive` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/scrollgrid` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/timeline` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/resource-common` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/resource-daygrid` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/resource-timegrid` ([premium]({{ site.baseurl }}/pricing))
  - `@fullcalendar/resource-timeline` ([premium]({{ site.baseurl }}/pricing))


## Different Approaches

If you're already using a build system like [Webpack](https://webpack.js.org/), or you want a smaller build by trimming away plugins you don't use, look at how to set up FullCalendar with an [ES6 build system](initialize-es6).
