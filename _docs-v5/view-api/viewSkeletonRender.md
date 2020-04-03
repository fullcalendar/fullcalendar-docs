---
title: viewSkeletonRender
type: callback
---

Triggered after a view's non-date-related DOM structure has been rendered.

<div class='spec' markdown='1'>
function( info )
</div>

`info` is a plain object with the following:

<table>

<tr>
<th>view</th>
<td markdown='1'>
The new [View Object](view-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for the container of the new view.
</td>
</tr>

</table>

This callback will get triggered when the initial view renders or when the user changes the view, but before the [datesRender](datesRender) callback fires, which is a callback for when all date/time cells have been rendered.
