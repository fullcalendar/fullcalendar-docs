---
title: TimeGrid View
children:
  - title: TimeGrid-specific Options
    children:
      - allDaySlot
      - allDayText
      - slotEventOverlap
      - timeGridEventMinHeight
related:
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - minTime
  - maxTime
  - nowIndicator
  - scrollTime
demos:
  - timegrid-standard-view-demo
  - timegrid-custom-view-demo
---

A TimeGrid view displays one-or-more horizontal days as well as an axis of time, usually midnight to midnight, on the vertical axis. The two predefined TimeGrid views are the **timeGridWeek** and **timeGridDay** views. They can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ timeGridPlugin ],
  defaultView: 'timeGridWeek'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded. Please note that TimeGrid depends on the [DayGrid plugin](daygrid-view), so you'll need to manually include that stylesheet too:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/timegrid/main.css' rel='stylesheet' />
```

Or you can choose to initialized the TimeGrid views [entirely with script tags](initialize-globals). Please note that TimeGrid depends on the [DayGrid plugin](daygrid-view), so you'll need to manually include those tags too:

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='fullcalendar/timegrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script src='fullcalendar/timegrid/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'timeGrid' ],
  defaultView: 'timeGridWeek'
});
...
</script>
```

TimeGrid views of other durations can be made with a [custom view](custom-view-with-settings) with type `'timeGrid'`.

The following options are specific to TimeGrid view. However, there are numerous other options throughout the docs that affect the display of TimeGrid view, such as the [locale-related options](localization) and [date/time display options](date-display).
