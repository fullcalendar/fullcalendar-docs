---
title: eventDragStop
type: callback
---

Triggered when event dragging stops.

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

This callback is *guaranteed* to be triggered after the user drags an event, even if the event doesn't change date/time. It is triggered before the event's information has been modified (if moved to a new date/time) and before the [eventDrop](eventDrop) callback is triggered.

`info` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event (date, title, etc) **before** the drop.
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

</table>
