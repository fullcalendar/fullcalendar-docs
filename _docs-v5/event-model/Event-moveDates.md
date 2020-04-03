---
title: Event::moveDates
---

Will move an event's `start` and `end` dates by a specific period of time.

<div class='spec' markdown='1'>
event.moveDates( *delta* )
</div>

`delta` is a [Duration](duration-object) or something that will parse into a Duration.

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
