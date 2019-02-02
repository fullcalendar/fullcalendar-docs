---
title: Resource DayGrid View
is_premium: true
---

A [DayGrid view](daygrid-view) like `dayGridDay` can be given resource functionality. It is initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save @fullcalendar/core @fullcalendar/resource-daygrid
```

```js
import { Calendar } from '@fullcalendar/core';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceDayGridPlugin ],
  defaultView: 'resourceDayGridDay',
  resources: [
    // your list of resources
  ]
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/resource-daygrid/main.css' rel='stylesheet' />
```

Or you can choose to initialized it [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='fullcalendar/resource-daygrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script src='fullcalendar/resource-daygrid/main.js'></script>
<script>
...
let calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'resourceDayGrid' ],
  defaultView: 'resourceDayGridDay',
  resources: [
    // your list of resources
  ]
});
...
</script>
```
