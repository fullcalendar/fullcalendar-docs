---
title: nextDayThreshold
---

When an event's end time spans into another day, the minimum time it must be in order for it to render as if it were on that day.

<div class='spec' markdown='1'>
Duration, default: `"00:00:00"`
</div>

Only affects timed events that appear on whole-days. Whole-day cells occur in [DayGrid views](daygrid-view) and the all-day slots in the [TimeGrid views](timegrid-view).

For example, if `nextDayThreshold` were `'09:00'` (9am), the following event would appear to take up only one day:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, timeGridPlugin ],
    defaultView: 'dayGridMonth',
    defaultDate: '2014-02-01',
    nextDayThreshold: '09:00:00',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [    
      {
        // Goes from 8pm to 2am the next day.
        title: 'Event 1',
        start: '2014-02-04T20:00:00',
        end: '2014-02-05T02:00:00'
      }
    ]
  });

  calendar.render();
});
```

Whereas, the following event would appear to take up two days:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, timeGridPlugin ],
    defaultView: 'dayGridMonth',
    defaultDate: '2014-02-01',
    nextDayThreshold: '09:00:00',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [    
      {
        // Goes from 8pm to 10am the next day.
        title: 'Event 2',
        start: '2014-02-04T20:00:00',
        end: '2014-02-05T10:00:00'
      }
    ]
  });

  calendar.render();
});
```

It is important to stress that this `nextDayThreshold` option, set on the Calendar itself, is ignored when `allDay` is `true`. Generally, as discussed when defining an [Event object](event-parsing), `allDay`, `start` and `end` properties are sufficient for specifying an event that lasts an entire day. 

However, when `allDay` is `false`, this additional `nextDayThreshold` property allows an override of the default behaviour of exclusive end dates by setting the cut-off point (or minimum) for the event to be rendered on that date.
    
