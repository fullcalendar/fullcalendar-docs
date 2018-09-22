---
title: Event::moveStart
---

Will move an event's start date by a specific period of time.

<div class='spec' markdown='1'>
event.moveStart( *delta* )
</div>

`delta` is a [Duration](duration-object) or something that will parse into a Duration.

This method does **not** modify the event's `end` date. If you modify the `start`, but keep the `end` the same, you are essentially changing the duration of the event. That's why this method is analogous to resizing an event from it's start. If you want to move both the `start` and the `end` together, use [moveDates](Event-moveDates).

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
