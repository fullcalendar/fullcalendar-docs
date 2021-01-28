---
title: eventDrop
type: callback
---

Triggered when dragging stops and the event has moved to a *different* day/time.

<div class='spec' markdown='1'>
function( *eventDropInfo* ) { }
</div>

`eventDropInfo` is a plain object with the following properties:

<table>

<tr>
<th>delta</th>
<td markdown='1'>
A [Duration Object](duration-object) that represents the amount of time the event was moved by.
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element that was dragged.
</td>
</tr>

<tr>
<th>event</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event (date, title, etc) **after** the drop.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

<tr>
<th>newResource</th>
<td markdown='1'>
If the resource has changed, this is the [Resource Object](resource-object) the event **went to**.
If the resource has not changed, this will be undefined.
For use with the [resource plugins]({{ site.baseurl }}/pricing) only.
</td>
</tr>

<tr>
<th>oldEvent</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event **before** the drop.
</td>
</tr>

<tr>
<th>oldResource</th>
<td markdown='1'>
If the resource has changed, this is the [Resource Object](resource-object) the event **came from**.
If the resource has not changed, this will be undefined.
For use with the [resource plugins]({{ site.baseurl }}/pricing) only.
</td>
</tr>

<tr>
<th>revert</th>
<td markdown='1'>
A function that, if called, reverts the event's start/end date to the values before the drag. This is useful if an ajax call should fail.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

eventDrop *does not* get called when an external event lands on the calendar. [eventReceive](eventReceive) is called instead.

Here is an example demonstrating most of these arguments:

```js
var calendar = new Calendar(calendarEl, {

  events: [
    // events here
  ],

  editable: true,

  eventDrop: function(info) {
    alert(info.event.title + " was dropped on " + info.event.start.toISOString());

    if (!confirm("Are you sure about this change?")) {
      info.revert();
    }
  }

});
```

## Resources

When an event has been newly dropped on a resource, the [Event Object's](event-object) resources will be updated to reflect.
