---
title: Initialize with Script Tags
description: Use pre-built bundles and HTML script tags
---

It's possible to manually include the necessary `<script>` tags in the head of your HTML page and then initialize a calendar via browser globals. Leverage one of FullCalendar's prebuilt bundles or include individual plugins


## Standard Bundle

First, obtain the standard `fullcalendar` bundle in one of the following ways:

- **Download**: <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.latest-releases.v6 }}/fullcalendar-{{ site.data.latest-releases.v6 }}.zip'>fullcalendar-{{ site.data.latest-releases.v6 }}.zip</a>
- **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar?version={{ site.data.latest-releases.v6 }})
- **NPM:** `npm install fullcalendar`

Then, write the following initialization code:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>
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

The `fullcalendar` bundle's `index.global(.min).js` file includes the following packages:

- `@fullcalendar/core`
- `@fullcalendar/interaction` (for [date selecting](date-clicking-selecting), [event dragging & resizing](event-dragging-resizing))
- `@fullcalendar/daygrid` (for [month](month-view) and [dayGrid](daygrid-view) views)
- `@fullcalendar/timegrid` (for [timeGrid](timegrid-view) views)
- `@fullcalendar/list` (for [list views](list-view))


## Premium Bundle

First, obtain the premium `fullcalendar-scheduler` bundle in one of the following ways:

- **Download**: <a href='{{ site.fullcalendar_premium_repo }}/releases/download/v{{ site.data.latest-releases.v6 }}/fullcalendar-scheduler-{{ site.data.latest-releases.v6 }}.zip'>fullcalendar-scheduler-{{ site.data.latest-releases.v6 }}.zip</a>
- **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar-scheduler?version={{ site.data.latest-releases.v6 }})
- **NPM:** `npm install fullcalendar-scheduler`

Then, write the following initialization code:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>
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

The `fullcalendar-scheduler` bundle's `index.global(.min).js` file includes the following packages:

- `@fullcalendar/core`
- `@fullcalendar/interaction` (for [date selecting](date-clicking-selecting), [event dragging & resizing](event-dragging-resizing))
- `@fullcalendar/daygrid` (for [month](month-view) and [dayGrid](daygrid-view) views)
- `@fullcalendar/timegrid` (for [timeGrid](timegrid-view) views)
- `@fullcalendar/list` (for [list views](list-view))
- `@fullcalendar/adaptive` (for [print optimization](print))
- `@fullcalendar/scrollgrid`
- `@fullcalendar/timeline` ([more info](timeline-view-no-resources))
- `@fullcalendar/resource`
- `@fullcalendar/resource-daygrid` ([more info](resource-daygrid-view))
- `@fullcalendar/resource-timegrid` ([more info](vertical-resource-view))
- `@fullcalendar/resource-timeline` ([more info](timeline-view))


## Individual Plugins

You can also include `<script>` tags for individual plugins. Example:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/core@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>
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
