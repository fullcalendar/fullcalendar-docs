---
title: eventPositioned
type: callback
---

Triggered after an event has been placed on the calendar in its final position.

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
The HTML element that has just been rendered.
</td>
</tr>

<tr>
<th>isMirror</th>
<td markdown='1'>
`true` if the rendered element is a "mirror" from a user drag, resize, or selection (see [selectMirror](selectMirror)). `false` otherwise.
</td>
</tr>

<tr>
<th>isStart</th>
<td markdown='1'>
`true` if the rendered element is the starting slice of the event's range. `false` otherwise.
</td>
</tr>

<tr>
<th>isEnd</th>
<td markdown='1'>
`true` if the rendered element is the ending slice of the event's range. `false` otherwise.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

In a similar way to [eventRender](eventRender), when a single event has multiple elements, DOM manipulation is allowed on each element in the event. For example, if a `timeGridWeek` event spans multiple columns, each event “segment” (individual span of time after slicing) is rendered with individual elements.

The `eventPositioned` callback is triggered for each segment of the event. In other words, an event spanning two columns will trigger two callbacks, with three columns triggering three callbacks, and so forth.
