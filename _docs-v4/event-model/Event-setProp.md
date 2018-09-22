---
title: Event::setProp
---

Modifies any of the non-date-related properties of an [Event Object](event-object).

<div class='spec' markdown='1'>
event.setProp( *name*, *value* )
</div>

This will cause the event to rerender. If there are other [events](event-object) that share the same `groupId`, those events' props will be similarly modified.

To modify any of the `extendedProps`, use [setExtendedProp](Event-setExtendedProp).

To modify date-related properties like `start`, `end`, and `allDay`, use the following methods:

- [setStart](Event-setStart)
- [setEnd](Event-setEnd)
- [setDates](Event-setDates)
- [setAllDay](Event-setAllDay)
- [moveStart](Event-moveStart)
- [moveEnd](Event-moveEnd)
- [moveDates](Event-moveDates)
