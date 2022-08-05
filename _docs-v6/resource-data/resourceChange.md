---
title: resourceChange
---

Called after a resource has been modified in some way.

<div class='spec' markdown='1'>
function( changeInfo )
</div>

This fires after [Resource::setProp](Resource-setProp) or [Resource::setExtendedProp](Resource-setExtendedProp) is called.

The `changeInfo` argument has the following properties:

<table>

<tr>
<th>resource</th>
<td>a <a href='resource-object'>Resource Object</a> with the updated changed data</td>
</tr>

<tr>
<th>oldResource</th>
<td>a <a href='resource-object'>Resource Object</a> with data prior to the change</td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
