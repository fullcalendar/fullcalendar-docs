---
title: dropAccept
---

Provides a way to filter which external elements can be dropped onto the calendar.

<div class='spec' markdown='1'>
String/Function, *default*: `"*"`
</div>

By default, after setting a calendar' [droppable](droppable) option to `true`, the calendar will accept any draggables that are dropped onto the calendar. The `dropAccept` option allows the calendar be more selective about which elements can/can't be dropped.

The value of `dropAccept` can be a string [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). It can also be a function that accepts the draggable item as a single argument, and returns `true` if the element can be dropped onto the calendar.

In the following example, the first draggable (with id `"draggable1"`) can be dropped on the calendar, while the second draggable (with id `"draggable2"`) cannot:

```html
...
<div id='calendar'></div>

<div id='draggable1' class='cool-event'></div>
<div id='draggable2'></div>
...
```

and here is the JavaScript:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var draggableEl1 = document.getElementById('draggable1');
  var draggableEl2 = document.getElementById('draggable2');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin ],
    droppable: true,
    dropAccept: '.cool-event',
    drop: function() {
      alert('dropped!');
    }
  });

  calendar.render();

  new Draggable(draggableEl1);
  new Draggable(draggableEl2);
});
```
