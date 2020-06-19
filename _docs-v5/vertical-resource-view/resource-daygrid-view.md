---
title: Resource DayGrid View
is_premium: true
---

A [DayGrid view](daygrid-view) like `dayGridDay` can be given resource functionality. It is initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save @fullcalendar/core@5.0.0-rc @fullcalendar/resource-daygrid@5.0.0-rc
```

```js
import { Calendar } from '@fullcalendar/core';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceDayGridPlugin ],
  initialView: 'resourceDayGridDay',
  resources: [
    // your list of resources
  ]
});
...
```

Or, you can choose to initialize Timeline view with the `fullcalendar-scheduler` [global bundle](initialize-globals):

```html
<link href='fullcalendar-scheduler/main.css' rel='stylesheet' />
<script src='fullcalendar-scheduler/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'resourceDayGridDay',
  resources: [
    // your list of resources
  ]
});
...
</script>
```
