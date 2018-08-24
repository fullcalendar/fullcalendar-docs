---
title: droppable
---

Determines if external jQuery UI draggables can be dropped onto the calendar.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

This option operates with jQuery UI draggables. You must [download](http://jqueryui.com/download) the appropriate jQuery UI files and initialize a [draggable](http://jqueryui.com/demos/draggable/) element. Additionally, you must set the calendar's `droppable` option to `true`.

Here is how you might initialize an element that can be dragged onto a calendar:

```js
$('#my-draggable').draggable({
  revert: true,      // immediately snap back to original position
  revertDuration: 0  //
});

$('#calendar').fullCalendar({
  droppable: true,
  drop: function(date) {
    alert("Dropped on " + date.format());
  }
});
```

## How can I use this to add events?

Good question. Please see the [eventReceive](eventReceive) article. This is only available in version 2.2 and above.


## Specifying Duration

Data can be attached to the element in order to specify its duration when dropped. A [Duration](moment-duration)-ish value can be provided. This can either be done via jQuery:

```js
$('.draggable').data('duration', '03:00'); // three hours
```

Or via an HTML5 attribute:

```html
<div class="draggable" data-duration="03:00" />
```

If no duration is specified, [defaultAllDayEventDuration](defaultAllDayEventDuration) or [defaultTimedEventDuration](defaultTimedEventDuration) will apply.


## Overlapping and Constraining

When there is no event data associated with the drag, the areas where the drop is allowed are determined by [selectOverlap](selectOverlap) and [selectConstraint](selectConstraint).

When there is event data associated with the drag (see [eventReceive](eventReceive)), normal event overlap/constraint rules apply, such as [eventOverlap](eventOverlap) and [eventConstraint](eventConstraint).
