---
title: select
type: method
---

A method for programmatically selecting a period of time.

<div class='spec' markdown='1'>
.fullCalendar( 'select', *start*, [ *end* ], [ *resource* ] )
</div>

`start` and `end` are [parsable Dates](date-parsing).

The `end` parameter is exclusive, meaning if you want to your last full-day selection to be Thursday, then specify Friday.

The `end` parameter is optional.

A start string like `"2014-01-22"` has an ambiguous time and will result in an all-day selection.

If the [Scheduler plugin](scheduler) is installed, the final `resource` argument can be a [Resource Object](resource-object) or a raw resource ID that you would like to select. If the current view supports resources but this value is not specified, the enter range across all resources is selected.
