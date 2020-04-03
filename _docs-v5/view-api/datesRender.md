---
title: datesRender
---

Triggered when a new set of dates has been rendered.

<div class='spec' markdown='1'>
function( info )
</div>

`info` is a plain object with the following:

<table>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for the container of the current view.
</td>
</tr>

</table>

This triggers after [viewSkeletonRender](viewSkeletonRender) callback but before the [eventRender](eventRender) callbacks.

If you need access to individual day-cells, use [dayRender](dayRender).
