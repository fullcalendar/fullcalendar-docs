---
title: editable
---

Determines whether the events on the calendar can be modified.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

This determines if the events can be *dragged* and *resized*. Enables/disables both at the same time. If you don't want both, use the more specific [eventStartEditable](eventStartEditable) and [eventDurationEditable](eventDurationEditable) instead.

This option can be overridden on a per-event basis with the [Event Object](event-object) `editable` property. However, [Background Events](background-events) can not be *dragged* or *resized*.

[View a demo](event-dragging-resizing-demo) with a calendar's events being editable.
