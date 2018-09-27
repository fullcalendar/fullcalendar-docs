---
title: Dragging Between Calendars
---

It's possible to initialize two or more separate Calendars, and then allow the user to drag events between the calendars!

**All** calendars involved need to have their [editable](editable) setting set to `true`. The, calendars you want to be able to **receive** events should have their [droppable](droppable) setting set to `true`. Barebones code example:

```js
import { Calendar } from 'fullcalendar';

var srcCalendarEl = document.getElementById('source-calendar');
var srcCalendar = new Calendar(srcCalendarEl, {
  editable: true,
  events: [
    // event data here
  ]
});
srcCalendar.render();

var destCalendarEl = document.getElementById('destination-calendar');
var destCalendar = new Calendar(destCalendarEl, {
  editable: true,
  droppable: true // will let it receive events!
});
destCalendar.render();
```

When dropped, the [drop callback](drop) and [eventReceive callback](eventReceive) will fire.

See a live demo &raquo; (TODO)
