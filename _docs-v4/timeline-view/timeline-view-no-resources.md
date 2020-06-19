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
  defaultView: 'timelineWeek'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/timeline/main.css' rel='stylesheet' />
```

Or you can choose to initialized the Timeline views [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/timeline/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/timeline/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'timeline' ],
  defaultView: 'timelineWeek'
});
...
</script>
```
