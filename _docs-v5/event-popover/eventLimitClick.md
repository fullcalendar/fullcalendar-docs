---
title: eventLimitClick
---

Determines the action taken when the user clicks on a "more" link created by the [eventLimit](eventLimit) option.

<div class='spec' markdown='1'>
"popover", "week", "day", view name (string), function
</div>

`"popover"` (the default)
:   Displays a rectangular panel over the cell with a full list of events for that day.

`"week"`
:   Goes to a week view, as determined by the views in the [header](header).

`"day"`
:   Goes to a day view, as determined by the views in the [header](header).

*view name*
:   A literal string name of any of the available views.

*function*
:   A callback function, for executing arbitrary code.


## Callback Function

<div class='spec' markdown='1'>
function( *info* )
</div>

`info` is an object with the following properties:

<table>

<tr>
<th>date</th>
<td markdown='1'>
The [Date object](date-object) representation of the day
</td>
</tr>

<tr>
<th>dayEl</th>
<td markdown='1'>
The HTML element for the day cell.
</td>
</tr>

<tr>
<th>moreEl</th>
<td markdown='1'>
The HTML element for the "more" link.
</td>
</tr>

<tr>
<th>segs</th>
<td markdown='1'>
An array of all event "segment" objects for the given day. More information below.
</td>
</tr>

<tr>
<th>hiddenSegs</th>
<td markdown='1'>
An array of only the segment objects that were not displayed prior.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event for the click.
</td>
</tr>

</table>

A callback function can return a string value, like `"day"`, that will be processed as the new value of the setting.


## Event Segment Object

<table>

<tr>
<th>event</th>
<td markdown='1'>
The [Event Object](event-object)
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
The [Date](date-object) for when this stretch of the event begins
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
The [Date](date-object) for when this stretch of the event ends. In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date is **exclusive**.
</td>
</tr>

<tr>
<th>isStart</th>
<td markdown='1'>
Boolean (`true` or `false`). Determines whether this is, chronologically, the first segment for the event.
</td>
</tr>

<tr>
<th>isEnd</th>
<td markdown='1'>
Boolean (`true` or `false`). Determines whether this is, chronologically, the last segment for the event.
</td>
</tr>

</table>
