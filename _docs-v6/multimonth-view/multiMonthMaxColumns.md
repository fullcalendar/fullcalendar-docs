---
title: multiMonthMaxColumns
since_version: 6.1.0
---

The maximum columns of months that [Multi-Month Grid](multimonth-grid) will attempt to render.

<div class='spec' markdown='1'>
Number, *default*: `3`
</div>

By default, [Multi-Month Grid](multimonth-grid) will attempt to display 3 columns of mini-months. If there is insufficient space, requiring each month to be smaller than [multiMonthMinWidth](multiMonthMinWidth), fewer columns will be displayed.

To display one single column of months, set `multiMonthMaxColumns` to `1`.
