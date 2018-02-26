---
title: selectable
since_version: 1.4.6
---

Allows a user to highlight multiple days or timeslots by clicking and dragging.

<div class='spec' markdown='1'>
Boolean/[View Option Hash](view-option-hash), *default*: `false`
</div>

To let the user make selections by clicking and dragging, this option must be set to `true`.

The [select](select-callback) and [unselect](unselect-callback) callbacks will be useful for monitoring when selections are made and cleared.

To learn the ways in which selections can be cleared, read the docs for the [unselect](unselect-callback) callback.

To view an example of how to create a new event based on a user's selection see "demos/selectable.html" in the download, or [visit this page](selectable.html).

<div class='version-info' markdown='1'>
A View Option Hash has been supported since version 1.4.7
</div>
