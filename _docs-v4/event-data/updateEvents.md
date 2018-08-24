---
title: updateEvents
type: method
since_version: 3.1
---

Changes data for multiple events, rerendering them all.

<div class='spec' markdown='1'>
.updateEvents( *events* )
</div>

This method is similar to the [updateEvent](updateEvent) method though it accepts an **array of events** as its main argument, to update multiple events at the same time. This reduces the number of event rerenders that must happen, for performance reasons.
