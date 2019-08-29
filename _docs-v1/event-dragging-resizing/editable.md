---
title: editable
since_version: 1.3
---

Determines whether the events on the calendar can be modified.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

This determines if the events can be *dragged* and *resized*. Enables/disables both at the same time. If you don't want both, use `editable` in conjunction with [eventStartEditable](eventStartEditable) and [eventDurationEditable](eventDurationEditable).

This option can be overridden on a per-event basis with the [Event Object](event-object) `editable` property. However, Background Events can not be *dragged* or *resized*.

<div class='version-info' markdown='1'>
Prior to version 1.3, the *draggable* option was used instead.
</div>
