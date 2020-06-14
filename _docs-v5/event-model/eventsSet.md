---
title: eventsSet
---

Called after event data is initialized **OR** changed in any way.

<div class='spec'>
function( events )
</div>

`events` is an array of [Event Objects](event-object). It contains every event in memory, the same result [Calendar::getEvents](Calendar-getEvents) would return.

This callback will be useful for syncing an external data source with all calendar event data.
