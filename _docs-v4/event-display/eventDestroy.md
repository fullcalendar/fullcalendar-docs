---
title: eventDestroy
type: callback
---

Called before an event's element is removed from the DOM.

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

`info` is a plain object that contains the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
The associated [Event Object](event-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element that is being destroyed.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

This callback gets called once for every event element. It is a great way to tear down any plugins you might have applied in [eventRender](eventRender).
