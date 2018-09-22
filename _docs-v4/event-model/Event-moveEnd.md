---
title: Event::moveEnd
---

Will move an event's end date by a specific period of time.

<div class='spec' markdown='1'>
event.moveEnd( *delta* )
</div>

`delta` is a [Duration](duration-object) or something that will parse into a Duration.

The event's `start` date will remain the same, making this method anologous to resizing an event from its end date. If you want to move both the `start` and the `end` together, use [moveDates](Event-moveDates).

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
