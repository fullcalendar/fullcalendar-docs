---
title: drop
type: callback
---

Called when an [external draggable element](external-dragging) or [an event from another calendar](other-calendar-dragging) has been dropped onto the calendar.

<div class='spec' markdown='1'>
function( *dropInfo* ) { }
</div>

`dropInfo` is a plain object with the following properties:

<table>

<tr>
<th>draggedEl</th>
<td markdown='1'>
The HTML element that was being dragged.
</td>
</tr>

<tr>
<th>date</th>
<td markdown='1'>
The [Date](date-object) of where the draggable was dropped.
</td>
</tr>

<tr>
<th>resource</th>
<td markdown='1'>
If the current view is a resource-view, the [Resource Object](resource-object) the element was dropped on. Must be using one of the [resource plugins](premium).
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
`true` or `false` whether dropped on one of the all-day cells.
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
<th>dateStr</th>
<td markdown='1'>
The [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) representation of where the draggable was dropped.
</td>
</tr>

</table>

If you need an Event object, see [eventReceive](eventReceive) instead.
