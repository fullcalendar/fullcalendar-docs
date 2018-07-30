---
title: eventMouseout
type: callback
---

Triggered when the user mouses out of an event.

<div class='spec' markdown='1'>
function( *event*, *jsEvent*, *view* ) { }
</div>

`event` is an [Event Object](event-object) that holds the event's information (date, title, etc).

`jsEvent` holds the jQuery event with low-level information such as mouse coordinates.

`view` holds the current [View Object](view-object).

Within the callback function, `this` is set to the event's `<div>` element.

eventMouseout will *not* be triggered for [background events](background-events).
