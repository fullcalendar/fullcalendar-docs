---
title: allDayMaintainDuration
---

Determines how an event's duration should be mutated when it is dragged from a timed section to an all-day section and vice versa.

<div class='spec' markdown='1'>
`true` or `false` (the default)
</div>

When `true`, the duration will remain roughly the same before and after it is dragged to/from an all-day section. "Roughly" because if an event has a duration with hourly precision, it will be rounded down to the nearest whole-day.

When `false`, the default, the event's duration will be reset to [defaultAllDayEventDuration](defaultAllDayEventDuration) (probably one day) if it is being dropped in an all-day section or [defaultTimedEventDuration](defaultTimedEventDuration) (probably one hour) if it is being dropped in a timed section.
