---
title: eventAfterRender
type: callback
---

Triggered after an event has been placed on the calendar in its final position.

<div class='spec' markdown='1'>
function( *event*, *element*, *view* ) { }
</div>

`event` is the [Event Object](event-object) that is attempting to be rendered.

`element` is a newly created jQuery element that will be used for rendering. It has already been populated with the correct time/title text.

A single event can also have multiple elements. This can be seen in the case of an agendaWeek event spanning multiple columns, where each event “segment” (individual span of time after slicing) is rendered with individual elements. DOM manipulation is allowed on each element in the event instead of just the first element.

When registering callbacks, the user should expect a single callback to be triggered for each segment of the event. In other words, an event spanning two columns will trigger two callbacks, with three columns triggering three callbacks, and so forth.
