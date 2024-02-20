---
title: Third-Party Dragging Libraries
---

It's possible to leverage a third-party library to do your [external element drag-n-drop](external-dragging) instead of using FullCalendar. You might want to do this if you prefer the visual effects of another library, need "sorting" functionality, or need the ability to drag-n-drop between multiple containers, functionality that FullCalendar does not have.

FullCalendar offers a way to do this via the `ThirdPartyDraggable` class. This class will work with **any** third-party drag-n-drop library, without needing any sort of specific adapter. The following example demonstrates [Dragula](https://bevacqua.github.io/dragula/):

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { ThirdPartyDraggable } from '@fullcalendar/interaction';
import dragula from 'dragula';

document.addEventListener('DOMContentLoaded', function() {
  let containerEl = document.getElementById('external-events-list');
  let calendarEl = document.getElementBy('mycalendar');

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin ],
    droppable: true
  });
  calendar.render();

  // Make the element draggable with Dragula
  let drake = dragula({
    containers: [ containerEl ],
    copy: true
  });

  // when you're done...
  // drake.destroy();

  // Allow FullCalendar to accept third-party draggables
  let draggable = new ThirdPartyDraggable(containerEl, {
    itemSelector: '.my-item',
    mirrorSelector: '.gu-mirror', // the dragging element that dragula renders
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });

  // when you're done...
  // draggable.destroy();
});
```

The API for `ThirdPartyDraggable` is very similar to [Draggable](external-dragging). Please check that out first.

The `ThirdPartyDraggable` constructor accepts the following options:

<table>

<tr>
<th>eventData</th>
<td markdown='1'>
An object or a function that returns an object.
</td>
</tr>

<tr>
<th>itemSelector</th>
<td markdown='1'>
A CSS selector that matches draggable elements within a container element.
</td>
</tr>

<tr>
<th>mirrorSelector</th>
<td markdown='1'>
Your third party library undoubtedly renders a placeholder element that moves as your mouse drags. It is useful to disable this placeholder element for when the element is dragged over a time slot and FullCalendar renders its own placeholder element. Specify a CSS selector, relative to the `<body>`.
</td>
</tr>

</table>
