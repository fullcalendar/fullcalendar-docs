---
title: Event::setDates
---

Sets an event's `start` date, `end` date, and `allDay` properties at the same time.

<div class='spec' markdown='1'>
event.setDates( *start*, *end*, [ *options* ] )
</div>

`start` and `end` are parameters that must [parse into a Date Objects](date-parsing). `end` can be null, in which case the end date will be cleared.

`options` is an optional plain object that can have the following property:

- `allDay` &mdash; `true` or `false`. will modify this event's `allDay` property.

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
