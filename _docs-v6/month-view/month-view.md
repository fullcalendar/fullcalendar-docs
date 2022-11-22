---
title: Month View
children:
  - title: Month-View-specific Options
    children:
      - fixedWeekCount
      - showNonCurrentDates
demos:
  - month-view-demo
---

Month view displays the current month's days, and usually a few days of the previous and next months, in a table-like format. It's technically considered "dayGridMonth" view and is part of the [DayGrid plugin](daygrid-view). It can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin ],
  initialView: 'dayGridMonth'
});
...
```

Or you can choose to initialized Month view [as a global bundle](initialize-globals):

```html
<script src='fullcalendar/dist/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth'
});
...
</script>
```

The following options are specific to month view. However, there are numerous other options throughout the docs that affect the display of month view, such as the [locale-related options](localization) and [date/time display options](date-display).
