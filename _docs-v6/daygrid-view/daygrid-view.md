---
title: DayGrid View
layout: docs-sublanding
children:
  - title: Daygrid-specific Options
    children:
      - monthStartFormat
demos:
  - daygrid-view-demo
  - daygridyear-view-demo
---

A DayGrid view is a view with one or more columns, each representing a day. The pre-configured DayGrid views are **dayGridDay** **dayGridWeek**, and **dayGridYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/daygrid
```

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin ],
  initialView: 'dayGridWeek'
});
...
```

Or you can choose to initialized DayGrid view [as a global bundle](initialize-globals):

```html
<script src='fullcalendar/dist/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridWeek'
});
...
</script>
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'dayGrid'`.

There are numerous other options throughout the docs that affect the display of DayGrid view, such as the [locale-related options](localization) and [date/time display options](date-display).


<h2 id='large-duration'>dayGridYear and other large durations</h2>

When using **dayGridYear** or a large custom duration, the first day cell of any new month will have a bold title. To control the date format of this title, use [monthStartFormat](monthStartFormat).
