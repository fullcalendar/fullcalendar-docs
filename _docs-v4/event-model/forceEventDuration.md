---
title: forceEventDuration
---

A flag to force assignment of an event's `end` if it is unspecified.

<div class='spec' markdown='1'>
Boolean, *default:* `false`
</div>

If an event's `end` is not specified, it will be calculated and assigned to the [Event Object](event-object) using [defaultTimedEventDuration](defaultTimedEventDuration) or [defaultAllDayEventDuration](defaultAllDayEventDuration).
