---
title: eventAdd
---

Called after an event has been added to the calendar.

<div class='spec' markdown='1'>
function( addInfo )
</div>

This fires after [Calendar::addEvent](Calendar-addEvent) is called or when an external event is dropped from [outside the calendar](external-dragging) or from [a different calendar](other-calendar-dragging). If being called as a result of the latter two, `eventAdd` will be fired *after* [eventReceive](eventReceive).

The `addInfo` argument has the following properties:

<table>

<tr>
<th>event</th>
<td>an <a href='event-object'>Event Object</a> for the added event</td>
</tr>

<tr>
<th>relatedEvents</th>
<td>an array of other related <a href='event-object'>Event Objects</a> that have also been added. an event might have other <a href='recurring-events'>recurring event</a> instances or might be linked to other events with the same <code>groupId</code></td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
