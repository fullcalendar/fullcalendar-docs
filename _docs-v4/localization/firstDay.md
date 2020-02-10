---
title: firstDay
---

The day that each week begins.

<div class='spec' markdown='1'>
Integer, *default*: `0` (Sunday)
</div>

The default value depends on the current [locale](locale).

The value must be a number that represents the day of the week.

Sunday=`0`, Monday=`1`, Tuesday=`2`, etc.

If [weekNumberCalculation](weekNumberCalculation) is set to `'ISO'`, this option defaults to `1` (Monday). (Note that RFC5545 follows the ISO standard as "\[t]he WKST rule part specifies the day on which the workweek starts \[and the] [default value is MO](https://tools.ietf.org/html/rfc5545#section-3.3.10)".

