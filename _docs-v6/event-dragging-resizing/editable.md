---
title: editable
---

Determines whether the events on the calendar can be modified.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

This determines if the events can be *dragged* and *resized*. Enables/disables both at the same time. If you don't want both, use the more specific [eventStartEditable](eventStartEditable) and [eventDurationEditable](eventDurationEditable) instead.

This option can be overridden on a per-event basis with the [Event Object](event-object) `editable` property. However, [Background Events](background-events) can not be *dragged* or *resized*.

## Required Plugin

This functionality requires the `interaction` plugin. If you are using [an ES6 build system](initialize-es6), you can do something like this:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin ],
  editable: true
})
...
```

Alternatively, if you are using [a global bundle](initialize-globals), you can do something like this:

```html
<script src='fullcalendar/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  // no plugin configuration required!
  editable: true
})
...
</script>
```

[View a demo](event-dragging-resizing-demo) with a calendar's events being editable.
