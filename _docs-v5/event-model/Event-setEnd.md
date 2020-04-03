---
title: Event::setEnd
---

Sets an event's end date.

<div class='spec' markdown='1'>
event.setEnd( *date* )
</div>

`date` is something that must [parse into a Date Object](date-parsing). It can also be `null`, in which case the event's end will be cleared.

If you'd like to set both the `start` and `end` at the same time, use [setDates](Event-setDates) instead.

If there are other events that share the same `groupId`, those events' end dates will be similarly modified.
