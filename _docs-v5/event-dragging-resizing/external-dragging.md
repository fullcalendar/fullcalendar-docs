---
title: External Event Dragging
---

It's possible to take elements that live outside of a calendar and make them drag-and-droppable. When they are dropped on a specific date of a calendar, a new event might be created and certain callbacks might fire. It is possible to achieve this using FullCalendar alone, without any third party libraries.

[See a live demo](external-dragging-demo).

To demonstrate the most basic case, you can create a draggable element by instantiating a `Draggable`. You must also set the calendar's [droppable](droppable) setting to `true` and import the `interaction` plugin:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', function() {
  let draggableEl = document.getElementById('mydraggable');
  let calendarEl = document.getElementById('mycalendar');

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin ],
    droppable: true
  });
  calendar.render();

  let draggable = new Draggable(draggableEl);

  // when you're done...
  // draggable.destroy();
});
```

You can also instantiate a `Draggable` on a container element that holds the elements that you want to be draggable, queryable by a selector:

```js
new Draggable(containerEl, {
  itemSelector: '.item-class'
});
```

In either of these examples, if one of these external elements is dropped on a calendar, it will fire the [drop](drop) callback.


## Associating Event Data

If you associate event data with the draggable element, it can create an event on the calendar when dropped. You can do this in a few different ways. First, you can attach an HTML `data-event` attribute to the element with JSON that holds the event data:

```html
<div id='draggable-el' data-event='{ "title": "my event", "duration": "02:00" }'>drag me</div>
```

This must be used in tandem with instantiating a `new Draggable`. Also, make sure your **JSON is valid**! For example, property names must be enclosed in double quotes!

If you want to do everything entirely in JavaScript, you can specify an `eventData` object:

```js
new Draggable(draggableEl, {
  eventData: {
    title: 'my event',
    duration: '02:00'
  }
});
```

You can also specify `eventData` as a function that returns an object. This function receives the element to be dragged.

```js
new Draggable(containerEl, {
  itemSelector: '.item-class',
  eventData: function(eventEl) {
    return {
      title: eventEl.innerText,
      duration: '02:00'
    };
  }
});
```


## Other Draggable Settings

The `new Draggable` constructor accepts these properties:

<table>

<tr>
<th>eventData</th>
<td markdown='1'>
Explained above. An object or a function that returns an object. Exact properties explained below.
</td>
</tr>

<tr>
<th>itemSelector</th>
<td markdown='1'>
Explained above. A CSS selector that matches draggable elements within a container element.
</td>
</tr>

<tr>
<th>longPressDelay</th>
<td markdown='1'>
Like [eventLongPressDelay](eventLongPressDelay).
</td>
</tr>

<tr>
<th>minDistance</th>
<td markdown='1'>
Like [eventDragMinDistance](eventDragMinDistance).
</td>
</tr>

<tr>
<th>appendTo</th>
<td markdown='1'>
An HTML element that will be the parent of the "mirror" element that follows the mouse while dragging. Defaults to the `<body>`.
</td>
</tr>

</table>

The `eventData` object can have any of the [parsable Event object](event-parsing) properties in addition to some others:

<table>

<tr>
<th>startTime</th>
<td markdown='1'>
A [duration](duration). The starting time-of-day that will be used when the external element is dropped on an all-day slot.
</td>
</tr>

<tr>
<th>duration</th>
<td markdown='1'>
A [duration](duration). How long the resulting event will be when it's dropped.
</td>
</tr>

<tr>
<th>create</th>
<td markdown='1'>
Enter `false` if you do not want an event to be created upon drop. You might want to do this to simply draw an "event mirror" while dragging. `true` by default.
</td>
</tr>

</table>


## Which Callbacks Will Fire?

When an external element is dropped on a calendar, the [drop](drop) callback will always fire, regardless of its associated event data.

The [eventReceive](eventReceive) callback will fire only if there is associated event data **AND** the `create` property within the event data is not `false`.


## Overlapping and Constraining

When there is event data associated with the drag, normal event overlap/constraint rules apply, such as [eventOverlap](eventOverlap) and [eventConstraint](eventConstraint).



## Third Party Libs

You may leverage a third-party drag-n-drop library instead. You might want to do this if you prefer the visual effects provided by another library, or if you need "sorting" or dragging between containers, functionality that FullCalendar does not provide.

[More info about third-party drag-n-drop &raquo;](third-party-dragging)
