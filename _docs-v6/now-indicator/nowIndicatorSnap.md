---
title: nowIndicatorSnap
since_version: 6.1.19
---

Determines whether the now indicator aligns with the start of the slot.

<div class='spec' markdown='1'>
`true`/`false`/`'auto'`, *default*: `'auto'`
</div>

Relevant to timeline/resource-timeline view.

The default `'auto'` value will snap when the slot unit is either year, month, week, day, or hour. For units smaller than an hour, the now-indicator's coordinate will exactly reflect the current [now](now).

Set to `false` to ensure the now-indicator's coordinate ALWAYS exactly reflect the current [now](now).
