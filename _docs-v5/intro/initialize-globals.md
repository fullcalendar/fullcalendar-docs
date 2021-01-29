---
title: Initialize with Script Tags
---

It's possible to manually include the necessary `<script>` tags in the head of your HTML page and then initialize a calendar via browser globals. You will leverage one of FullCalendar's prebuilt bundles to do this.


## Standard Bundle

First, get ahold of the standard `fullcalendar` bundle:

- **Download**: <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.releases[0].version }}/fullcalendar-{{ site.data.releases[0].version }}.zip' onclick="ga('send', 'pageview', '/downloads/fullcalendar-{{ site.data.releases[0].version }}.zip')">fullcalendar-{{ site.data.releases[0].version }}.zip</a>
- **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar)
- **NPM:** `npm install fullcalendar`

Then, write the following initialization code:

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

The `fullcalendar` bundle's `main.js` and `main.css` files include the following packages:

- `@fullcalendar/core`
- `@fullcalendar/interaction`
- `@fullcalendar/daygrid`
- `@fullcalendar/timegrid`
- `@fullcalendar/list`
- `@fullcalendar/bootstrap` (though you'll still need Bootstrap/FontAwesome. [more info](bootstrap-theme))
- `@fullcalendar/google-calendar`


## Premium Bundle

First, get ahold of the premium `fullcalendar-scheduler` bundle:

- **Download**: <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.releases[0].version }}/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip' onclick="ga('send', 'pageview', '/downloads/fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip')">fullcalendar-scheduler-{{ site.data.releases[0].version }}.zip</a>
- **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar-scheduler)
- **NPM:** `npm install fullcalendar-scheduler`

Then, write the following initialization code:

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

The `fullcalendar-scheduler` bundle's `main.js` and `main.css` files include the following packages:

- `@fullcalendar/core`
- `@fullcalendar/interaction`
- `@fullcalendar/daygrid`
- `@fullcalendar/timegrid`
- `@fullcalendar/list`
- `@fullcalendar/bootstrap` (though you'll still need Bootstrap/FontAwesome. [more info](bootstrap-theme))
- `@fullcalendar/google-calendar`
- `@fullcalendar/adaptive`
- `@fullcalendar/scrollgrid`
- `@fullcalendar/timeline`
- `@fullcalendar/resource-common`
- `@fullcalendar/resource-daygrid`
- `@fullcalendar/resource-timegrid`
- `@fullcalendar/resource-timeline`
