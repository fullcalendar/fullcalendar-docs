---
title: eventResizeStop
type: callback
---

Triggered when event resizing stops.

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

This callback is *guaranteed* to be triggered after the user resizes an event, even if the event doesn't change in duration. It is triggered **before** the event's information has been modified (if changed in duration) and before the [eventResize](eventResize) callback is triggered.

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

If you want to get the event's information **after** it has changed, use the [eventResize](eventResize) callback.
