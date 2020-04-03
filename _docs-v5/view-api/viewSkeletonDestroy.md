---
title: viewSkeletonDestroy
type: callback
---

Triggered before a view's DOM skeleton is removed from the DOM.

<div class='spec' markdown='1'>
function( info )
</div>

`info` is a plain object with the following:

<table>

<tr>
<th>view</th>
<td markdown='1'>
The [View Object](view-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for the container of the existing view.
</td>
</tr>

</table>

This callback will be triggered immediately before the view is about to be removed from the DOM. This could happen because of a view type switch or a [destroy](destroy) method call.
