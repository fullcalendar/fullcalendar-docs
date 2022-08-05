---
title: resourceAdd
---

Called after a resource has been added to the calendar.

<div class='spec' markdown='1'>
function( addInfo )
</div>

This fires after [Calendar::addResource](addResource) is called.

The `addInfo` argument has the following properties:

<table>

<tr>
<th>resource</th>
<td>a <a href='resource-object'>Resource Object</a> for the added resource</td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
