---
title: eventChange
---

Called after an event has been modified in some way.

<div class='spec' markdown='1'>
function( changeInfo )
</div>

This happens when any [Event Object](event-object) setter method is called, like [setStart](Event-setStart). It is also called after an event has been dragged or resized. `eventChange` will fire *after* [eventDrop](eventDrop) and [eventResize](eventResize).

The `changeInfo` argument has the following properties:

<table>

<tr>
<th>event</th>
<td>an <a href='event-object'>Event Object</a> with the updated changed data</td>
</tr>

<tr>
<th>relatedEvents</th>
<td>an array of other related <a href='event-object'>Event Objects</a> that were also affected. an event might have other <a href='recurring-events'>recurring event</a> instances or might be linked to other events with the same <code>groupId</code></td>
</tr>

<tr>
<th>oldEvent</th>
<td>an <a href='event-object'>Event Object</a> with data prior to the change</td>
</tr>

<tr>
<th>revert</th>
<td>a function that can be called to reverse this action</td>
</tr>

</table>
