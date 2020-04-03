---
title: DayGrid View
layout: docs-sublanding
demos:
  - daygrid-view-demo
---

A DayGrid view is a view with one or more columns, each representing a day. The pre-configured DayGrid views are **dayGridDay** and **dayGridWeek**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin ],
  defaultView: 'dayGridWeek'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
```

Or you can choose to initialized DayGrid view [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid' ],
  defaultView: 'dayGridWeek'
});
...
</script>
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'dayGrid'`.

There are numerous other options throughout the docs that affect the display of DayGrid view, such as the [locale-related options](localization) and [date/time display options](date-display).
