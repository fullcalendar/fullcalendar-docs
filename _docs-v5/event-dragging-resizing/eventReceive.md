---
title: eventReceive
type: callback
---

Called when an [external draggable element](external-dragging) with associated [event data](event-parsing) was dropped onto the calendar. Or an event [from another calendar](other-calendar-dragging).

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

`info` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
An [Event object](event-object) containing the newly created/received event.
</td>
</tr>

<tr>
<th>relatedEvents</th>
<td>an array of other related <a href='event-object'>Event Objects</a> that have also been received. an event might have other <a href='recurring-events'>recurring event</a> instances or might be linked to other events with the same <code>groupId</code></td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

<tr>
<th>draggedEl</th>
<td markdown='1'>
The HTML element that was being dragged.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

This callback is fired *before* the [eventAdd](eventAdd) callback is fired.


## Resources

When an event has been dropped on a resource, the `event`'s resources will reflect.
