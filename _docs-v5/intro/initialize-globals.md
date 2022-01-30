---
title: Initialize with Script Tags
description: Use pre-built bundles and HTML script tags
---

It's possible to manually include the necessary `<script>` tags in the head of your HTML page and then initialize a calendar via browser globals. You will leverage one of FullCalendar's prebuilt bundles to do this.


## Standard Bundle

First, obtain the standard `fullcalendar` bundle in one of the following ways:

- **Download**: <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.latest-releases.v5 }}/fullcalendar-{{ site.data.latest-releases.v5 }}.zip'>fullcalendar-{{ site.data.latest-releases.v5 }}.zip</a>
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
- `@fullcalendar/interaction` (for [date selecting](date-clicking-selecting), [event dragging & resizing](event-dragging-resizing))
- `@fullcalendar/daygrid` (for [month](month-view) and [dayGrid](daygrid-view) views)
- `@fullcalendar/timegrid` (for [timeGrid](timegrid-view) views)
- `@fullcalendar/list` (for [list views](list-view))
- `@fullcalendar/bootstrap` (requires 3rd-party Bootstrap/FontAwesome packages. [more info](bootstrap-theme))
- `@fullcalendar/google-calendar` ([more info](google-calendar))


## Premium Bundle

First, obtain the premium `fullcalendar-scheduler` bundle in one of the following ways:

- **Download**: <a href='{{ site.fullcalendar_scheduler_repo }}/releases/download/v{{ site.data.latest-releases.v5 }}/fullcalendar-scheduler-{{ site.data.latest-releases.v5 }}.zip'>fullcalendar-scheduler-{{ site.data.latest-releases.v5 }}.zip</a>
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

[View a runnable example &raquo;](timeline-standard-view-demo)

You won't need to include the `fullcalendar-scheduler` bundle AND the `fullcalendar` bundle. The `fullcalendar-scheduler` bundle includes everything.

The `fullcalendar-scheduler` bundle's `main.js` and `main.css` files include the following packages:

- `@fullcalendar/core`
- `@fullcalendar/interaction` (for [date selecting](date-clicking-selecting), [event dragging & resizing](event-dragging-resizing))
- `@fullcalendar/daygrid` (for [month](month-view) and [dayGrid](daygrid-view) views)
- `@fullcalendar/timegrid` (for [timeGrid](timegrid-view) views)
- `@fullcalendar/list` (for [list views](list-view))
- `@fullcalendar/bootstrap` (requires 3rd-party Bootstrap/FontAwesome packages. [more info](bootstrap-theme))
- `@fullcalendar/google-calendar` ([more info](google-calendar))
- `@fullcalendar/adaptive` (for [print optimization](print))
- `@fullcalendar/scrollgrid`
- `@fullcalendar/timeline` ([more info](timeline-view-no-resources))
- `@fullcalendar/resource-common`
- `@fullcalendar/resource-daygrid` ([more info](resource-daygrid-view))
- `@fullcalendar/resource-timegrid` ([more info](vertical-resource-view))
- `@fullcalendar/resource-timeline` ([more info](timeline-view))
