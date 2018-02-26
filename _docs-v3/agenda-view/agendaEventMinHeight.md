---
title: agendaEventMinHeight
since_version: 3.6.0
---

Guarantees that events within the Agenda views will be a minimum height.

<div class='spec' markdown='1'>
Integer / null
</div>

An integer pixel value can be specified to force all Agenda view events to be *at least* the given pixel height.

If not specified (the default), all events will have a height determined by their `start` and `end` times. This may result in visually scrunched events if an event's end is very soon after its start.
