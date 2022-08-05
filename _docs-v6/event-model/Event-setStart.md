---
title: Event::setStart
---

Sets an event's start date.

<div class='spec' markdown='1'>
event.setStart( *date*, [ *options* ] )
</div>

`date` is something that must [parse into a Date Object](date-parsing).

`options` is an optional plain object that can have the following property:

- `maintainDuration` &mdash; if set to `true`, the event's `end` will also be adjusted in order to keep the same duration

If you'd like to set both the `start` and `end` at the same time, use [setDates](Event-setDates) instead.

If there are other events that share the same `groupId`, those events' dates will be similarly modified.
