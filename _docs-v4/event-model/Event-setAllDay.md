---
title: Event::setAllDay
---

Sets whether an event is considered all-day.

<div class='spec' markdown='1'>
event.setAllDay( *bool* )
</div>

`bool` must be `true` or `false`.

If converting to `allDay:false`, if the event's start and end dates will have their times set to 00:00:00.

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
