---
title: eventRemove
---

Called after an event has been removed from the calendar.

<div class='spec' markdown='1'>
function( removeInfo )
</div>

This happens when [Event::remove](Event-remove) is called. It also happens when an event is being dragged [to another calendar](other-calendar-dragging), in which case `eventRemove` fires *after* [eventLeave](eventLeave).

The `removeInfo` argument has the following properties:

<table>

<tr>
<th>event</th>
<td>the <a href='event-object'>Event Object</a> that was removed</td>
</tr>

<tr>
<th>relatedEvents</th>
<td>an array of other related <a href='event-object'>Event Objects</a> that were also be removed. an event might have other <a href='recurring-events'>recurring event</a> instances or might be linked to other events with the same <code>groupId</code></td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
