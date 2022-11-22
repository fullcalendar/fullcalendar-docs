---
title: Timeline View with no Resources
---

You might like the way the time axis operates in Timeline view, but you simply don't want to display resource rows. If this is the case, you can initialize a plain timeline view in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import timelinePlugin from '@fullcalendar/timeline';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ timelinePlugin ],
  initialView: 'timelineWeek'
});
...
```

Or, you can choose to initialize Timeline view with the `fullcalendar-scheduler` [global bundle](initialize-globals):

```html
<script src='fullcalendar-scheduler/dist/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'timelineWeek'
});
...
</script>
```
