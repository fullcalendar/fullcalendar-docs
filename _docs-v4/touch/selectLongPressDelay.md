---
title: selectLongPressDelay
since_version: 3.1.0
---

For touch devices, the amount of time the user most hold down before a date becomes selectable.

<div class='spec' markdown='1'>
Integer, *default*: `1000` (1 second)
</div>

This value is specified in milliseconds. If not specified, it falls back to [longPressDelay](longPressDelay).

Only applicable when the calendar is being used on a touch device. Otherwise, there is no delay.
