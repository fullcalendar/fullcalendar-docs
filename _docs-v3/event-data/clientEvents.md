---
title: clientEvents
type: method
---

Retrieves events that FullCalendar has in memory.

<div class='spec' markdown='1'>
.clientEvents( [, *idOrFilter* ] ) -> Array
</div>

This method will return an array of [Event Objects](event-object) that FullCalendar has stored in client-side memory.

If `idOrFilter` is omitted, *all* events will be returned.

If `idOrFilter` is an ID, all events with the same ID will be returned.

`idOrFilter` may also be a filter function that accepts one [Event Object](event-object) argument and returns `true` if it should be included in the result set.
