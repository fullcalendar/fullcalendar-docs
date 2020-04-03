---
title: Dragging Between Calendars
---

It's possible to initialize two or more separate Calendars, and then allow the user to drag events between the calendars!

**All** calendars involved need to have their [editable](editable) setting set to `true` and have the `interaction` plugin loaded. The, calendars you want to be able to **receive** events should have their [droppable](droppable) setting set to `true`. Barebones code example:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', function() {
  let srcCalendarEl = document.getElementById('source-calendar');
  let destCalendarEl = document.getElementById('destination-calendar');

  let srcCalendar = new Calendar(srcCalendarEl, {
    plugins: [ interactionPlugin ],
    editable: true,
    events: [
      // event data here
    ]
  });

  let destCalendar = new Calendar(destCalendarEl, {
    plugins: [ interactionPlugin ],
    editable: true,
    droppable: true // will let it receive events!
  });

  srcCalendar.render();
  destCalendar.render();
});
```

When dropped, the [eventLeave](eventLeave), [drop](drop), and [eventReceive](eventReceive) callbacks will fire.

[See a live demo &raquo;](other-calendar-dragging-demo)
