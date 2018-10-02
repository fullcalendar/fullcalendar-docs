---
title: select
type: callback
excerpt_separator: <!--more-->
---

Triggered when a date/time selection is made.<!--more--> [See a demo](date-clicking-selecting-demo).

<div class='spec' markdown='1'>
function( *selectionInfo* )
</div>

`selectionInfo` is a plain object with the following properties:

<table>

<tr>
<th>start</th>
<td markdown='1'>
a [Date](date-object) indicating the beginning of the selection.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
a [Date](date-object) indicating the end of the selection.

**It is an exclusive value,** so if the selection is all-day, and the last day is a Thursday, `end` will be Friday.
</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
An ISO8601 string representation of the start date. Will have a time zone offset according to the calendar's [timeZone](timeZone) like `2018-09-01T12:30:00-05:00`. If selecting all-day cells, won't have a time part nor a time zone part, like `2018-09-01`.
</td>
</tr>

<tr>
<th>endStr</th>
<td markdown='1'>
Just like `startStr`, but for the `end` date.
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
`true` or `false` whether the selection happened on all-day cells.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

<tr>
<th>resource</th>
<td markdown='1'>
If the current view is a resource-view, the [Resource Object](resource-object) that was selected. Must be using the [Scheduler plugin](scheduler).
</td>
</tr>

</table>
