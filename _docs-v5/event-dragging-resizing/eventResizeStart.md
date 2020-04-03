---
title: eventResizeStart
type: callback
---

Triggered when event resizing begins.

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

`info` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event (date, title, etc) **after** the drop.
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
