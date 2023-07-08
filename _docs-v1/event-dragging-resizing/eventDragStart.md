---
title: eventDragStart
type: callback
---

Triggered when event dragging begins.

<div class='spec' markdown='1'>
function( *event*, *jsEvent*, *ui*, *view* ) { }
</div>

`event` is an [Event Object](event-object) that hold the event's information (date, title, etc).

`jsEvent` holds the native javascript event with low-level information such as click coordinates.

`ui` holds the [jQuery UI object](https://jqueryui.com/demos/draggable/).

`view` holds the current [View Object](view-object).
