---
title: selectable
---

Allows a user to highlight multiple days or timeslots by clicking and dragging.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

To let the user make selections by clicking and dragging, this option must be set to `true`. [See a demo](date-clicking-selecting-demo).

The [select](select-callback) and [unselect](unselect-callback) callbacks will be useful for monitoring when selections are made and cleared.

To learn the ways in which selections can be cleared, read the docs for the [unselect](unselect-callback) callback.
