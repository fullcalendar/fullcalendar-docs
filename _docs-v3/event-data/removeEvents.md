---
title: removeEvents
type: method
---

Removes events from the calendar.

<div class='spec' markdown='1'>
.removeEvents( [, *idOrFilter* ] )
</div>

If `idOrFilter` is omitted, *all* events are removed.

If `idOrFilter` is an ID, all events with the same ID will be removed.

`idOrFilter` may also be a filter function that accepts one [Event Object](event-object) argument and returns `true` if it should be removed.
