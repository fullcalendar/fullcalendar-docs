---
title: selectAllow
---

Exact programmatic control over where the user can select.

<div class='spec' markdown='1'>
function(selectInfo)
</div>

This callback will be called for every new potential selection as the user is dragging.

The callback function will receive information about where the user is attempting to select (`selectInfo`) and must return either `true` or `false`.

The `selectInfo` object will have the following properties:
<table>

<tr>
<th>start</th>
<td markdown='1'>
[Date](date-object). A date indicating the beginning of the selection.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
[Date](date-object). A date indicating the end of the selection.

In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date property is **exclusive**. For example, if the selection is all-day and the last day is a Thursday, `end` will be Friday.
</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
String. An [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) string representation of the start date. It will have a timezone offset similar to the calendar's [timeZone](timeZone) e.g. `2018-09-01T12:30:00-05:00`. If selecting all-day cells, it won't have a time nor timezone part e.g. `2018-09-01`.
</td>
</tr>

<tr>
<th>endStr</th>
<td markdown='1'>
String. An [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) string representation of the end date. It will have a timezone offset similar to the calendar's [timeZone](timeZone) e.g. `2018-09-02T12:30:00-05:00`. If selecting all-day cells, it won't have a time nor timezone part e.g. `2018-09-02`.
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
Boolean. `true` or `false` whether the selection happened on all-day cells.
</td>
</tr>

<tr>
<th>resource</th>
<td markdown='1'>
[Resource object](resource-object). If the current view is a resource view, this is the [Resource object](resource-object) that was selected. This is only available when using one of the [resource plugins](/pricing).
</td>
</tr>

</table>
