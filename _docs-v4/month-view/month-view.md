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

Month view displays the current month's days, and usually a few days of the previous and next months, in a table-like format. It can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin ],
  defaultView: 'dayGridMonth'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
```

Or you can choose to initialized Month view [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid' ],
  defaultView: 'dayGridMonth'
});
...
</script>
```

The following options are specific to month view. However, there are numerous other options throughout the docs that affect the display of month view, such as the [locale-related options](localization) and [date/time display options](date-display).
