---
title: resourceRemove
---

Called after a resource has been removed from the calendar.

<div class='spec' markdown='1'>
function( removeInfo )
</div>

This fires after [Resource::remove](Resource-remove) is called.

The `removeInfo` argument has the following properties:

<table>

<tr>
<th>resource</th>
<td>the <a href='resource-object'>Resource Object</a> that was removed</td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
