---
title: TimeGrid View
children:
  - title: TimeGrid-specific Options
    children:
      - eventMinHeight
      - eventShortHeight
      - slotEventOverlap
      - allDaySlot
      - article: all-day-render-hooks
        points:
          - allDayClassNames
          - allDayContent
          - allDayDidMount
          - allDayWillUnmount
related:
  - eventMaxStack
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - slotMinTime
  - slotMaxTime
  - expandRows
  - nowIndicator
  - scrollTime
demos:
  - timegrid-standard-view-demo
  - timegrid-custom-view-demo
---

A TimeGrid view displays one-or-more horizontal days as well as an axis of time, usually midnight to midnight, on the vertical axis. The two predefined TimeGrid views are the **timeGridWeek** and **timeGridDay** views. They can be initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/timegrid
```

```js
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ timeGridPlugin ],
  initialView: 'timeGridWeek'
});
...
```

Or you can choose to initialized the TimeGrid views [as a global bundle](initialize-globals):

```html
<script src='fullcalendar/dist/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'timeGridWeek'
});
...
</script>
```

TimeGrid views of other durations can be made with a [custom view](custom-view-with-settings) with type `'timeGrid'`.

The following options are specific to TimeGrid view. However, there are numerous other options throughout the docs that affect the display of TimeGrid view, such as the [locale-related options](localization) and [date/time display options](date-display).
