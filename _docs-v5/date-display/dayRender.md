---
title: dayRender
type: callback
---

A hook for modifying a day cell's DOM.

<div class='spec' markdown='1'>
function( dayRenderInfo ) { }
</div>

`dayRenderInfo` is a plain object with the following properties:

<table>

<tr>
<th>date</th>
<td markdown='1'>
The [Date](date-object) for the given day.
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for the given day.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

This callback lets you modify the day cells elements that are part of each calendar view.

You cannot return a new element. You must only modify the `dayRenderInfo.el` (a `<td>` element) that is provided.

This callback is called each time a cell needs to be freshly rendered.
