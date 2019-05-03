---
title: selectable
---

Allows a user to highlight multiple days or timeslots by clicking and dragging.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

To let the user make selections by clicking and dragging, the `interaction` plugin **must be loaded** and this option must be set to `true`.
<a href='date-clicking-selecting-demo' class='more-link'>See a demo</a>

The [select](select-callback) and [unselect](unselect-callback) callbacks will be useful for monitoring when selections are made and cleared.

To learn the ways in which selections can be cleared, read the docs for the [unselect](unselect-callback) callback.

## Loading the Interaction Plugin

You must load the interaction plugin in order for `selectable` to work. You can do this with [and ES6 build system](initialize-es6):

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid'; // for dayGridMonth view
...
let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin, dayGridPlugin ],
  defaultView: 'dayGridMonth',
  selectable: true
});
...
```

Alternatively, you can use [script tags and browser globals](initialize-globals):

```html
<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/interaction/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'interaction', 'dayGrid' ],
  defaultView: 'dayGridMonth',
  selectable: true
});
...
</script>
```
