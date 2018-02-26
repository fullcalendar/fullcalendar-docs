---
title: renderEvents
type: method
since_version: 3.1
---

Renders multiple new events on the calendar in batch.

<div class='spec' markdown='1'>
.fullCalendar( 'renderEvents', *events* [, *stick* ] )
</div>

This method is similar to the [renderEvent](renderEvent) method though it accepts an **array of events** as its main argument, to render multiple events at the same time. This reduces the number of event rerenders that must happen, for performance reasons.
