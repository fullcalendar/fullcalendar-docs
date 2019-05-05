---
title: Calendar::select
type: method
---

A method for programmatically selecting a period of time.

<div class='spec' markdown='1'>
calendar.select( *start*, [ *end* ] )<br>
-or-<br>
calendar.select( { *start*, *end*, *allDay*, *resourceId* } )
</div>

The method has two different signatures: one that accepts individual `start`/`end` arguments and another that accepts an object with keys.

`start` and `end` are [parsable Dates](date-parsing).

The `end` parameter is exclusive, meaning if you want to your last full-day selection to be Thursday, then specify Friday.

The `end` parameter is optional.

If one of the [resource plugins](premium) are installed, the `resourceId` argument can be a [Resource Object's](resource-object) ID that you would like to select. If the current view supports resources but this value is not specified, the given range is selected across all resources.
