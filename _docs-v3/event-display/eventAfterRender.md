---
title: eventAfterRender
type: callback
---

Triggered after an event has been placed on the calendar in its final position.

<div class='spec' markdown='1'>
function( *event*, *element*, *view* ) { }
</div>

In a similar way to [eventRender](eventRender), when a single event has multiple elements, DOM manipulation is allowed on each element in the event. For example, if an agendaWeek event spans multiple columns, each event “segment” (individual span of time after slicing) is rendered with individual elements.

The `eventAfterRender` callback is triggered for each segment of the event. In other words, an event spanning two columns will trigger two callbacks, with three columns triggering three callbacks, and so forth.
