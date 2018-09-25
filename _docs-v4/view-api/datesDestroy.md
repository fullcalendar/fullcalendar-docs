---
title: datesDestroy
---

Triggered before the currently rendered set of dates is removed from the DOM.

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

This triggers before [viewSkeletonDestroy](viewSkeletonDestroy).
