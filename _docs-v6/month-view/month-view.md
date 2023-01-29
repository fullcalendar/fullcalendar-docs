---
title: Month View
title_for_landing: Month
children:
  - title: Month-View-specific Options
    children:
      - fixedWeekCount
      - showNonCurrentDates
demos:
  - month-view-demo
---

The Month view is a specific type of [DayGrid view](daygrid-view) called `dayGridMonth`. Either install via [script tags](initialize-globals) or [individual packages](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/daygrid
```

Then initialize the calendar in JavaScript:

```js
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth'
});
```

[View a demo &raquo;](month-view-demo)

There are numerous other options throughout the docs that affect the display of DayGrid view, such as the [date/time display options](date-display) and [locale-related options](localization).
