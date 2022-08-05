---
title: weekNumberCalculation
---

The method for calculating week numbers that are displayed with the [weekNumbers](weekNumbers) setting.

<div class='spec' markdown='1'>
`"local"` (default), `"ISO"`, or a function
</div>

Specifying `"local"` causes the locale-specific calculation to be used, as determined by the calendar's [locale](locale) setting. This is the default.

Specifiying `"ISO"` results in [ISO8601 week numbers](http://en.wikipedia.org/wiki/ISO_8601#Week_dates). Specifying `"ISO"` changes the default value of [firstDay](firstDay) to `1` (Monday).

You may also specify a function, which must accept a single [Date](date-object) and return an integer week number.
