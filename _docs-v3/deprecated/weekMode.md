---
title: weekMode
---

Determines the number of weeks displayed in a month view. Also determines each week's height.

<div class='removed-notice'>
This method has been removed in v3.
In its place, use <a href='fixedWeekCount'>fixedWeekCount</a>, which controls the number of rows,
and the <a href='height'>height</a>/<a href='contentHeight'>contentHeight</a> settings, which can be set to <code>"auto"</code>.
</div>

<div class='spec' markdown='1'>
String, *default*: `'fixed'`
</div>

Available options:

`'fixed'`
:   The calendar will always be 6 weeks tall. The height will always be the same, as determined by
    [height](height), [contentHeight](contentHeight), or [aspectRatio](aspectRatio).
    *Use [fixedWeekCount](fixedWeekCount) as `true` instead.*

`'liquid'`
:   The calendar will have either 4, 5, or 6 weeks, depending on the month.
    The height of the weeks will stretch to fill the available height, as determined by
    [height](height), [contentHeight](contentHeight), or [aspectRatio](aspectRatio).
    *Use [fixedWeekCount](fixedWeekCount) as `false` instead.*

`'variable'`
:   The calendar will have either 4, 5, or 6 weeks, depending on the month.
    Each week will have the same constant height, meaning the calendar’s height will change
    month-to-month.
    *Use [height](height) as `"auto"` and [fixedWeekCount](fixedWeekCount) as `false` instead.*
