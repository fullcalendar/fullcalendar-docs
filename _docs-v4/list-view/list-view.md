---
title: List View
children:
  - title: List-View-specific Options
    children:
      - listDayFormat
      - listDayAltFormat
      - noEventsMessage
demos:
  - list-view-demo
---

A list view displays events in a simple vertical list for a specific interval of time. If there are no events during a specific interval of time, the [noEventsMessage](noEventsMessage) is displayed. There are 4 preset list views: **listDay**, **listWeek**, **listMonth**, and **listYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ listPlugin ],
  defaultView: 'listWeek'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/list/main.css' rel='stylesheet' />
```

Or you can choose to initialized the List views [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/list/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/list/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'list' ],
  defaultView: 'listWeek'
});
...
</script>
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'list'`.

The following settings are specific to list-view. However, many other settings throughout the API also affect list-view as well, such as [eventRender](eventRender) and [eventClick](eventClick).
