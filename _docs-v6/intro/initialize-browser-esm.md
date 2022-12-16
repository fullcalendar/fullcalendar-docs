---
title: Initialize with Script Tags (ESM)
---

Use FullCalendar as an ES module within a `<script>` tag, preferably with [import maps](https://www.honeybadger.io/blog/import-maps/). Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <script type='importmap'>
      {
        "imports": {
          "@fullcalendar/core": "https://cdn.skypack.dev/@fullcalendar/core@{{ site.data.latest-releases.v6 }}",
          "@fullcalendar/daygrid": "https://cdn.skypack.dev/@fullcalendar/daygrid@{{ site.data.latest-releases.v6 }}"
        }
      }
    </script>
    <script type='module'>
      import { Calendar } from '@fullcalendar/core'
      import dayGridPlugin from '@fullcalendar/daygrid'

      document.addEventListener('DOMContentLoaded', function() {
        const calendarEl = document.getElementById('calendar')
        const calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin],
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }
        })
        calendar.render()
      })
    </script>
  </head>
  <body>
    <div id='calendar'></div>
  </body>
</html>
```
