---
title: eventResize
type: callback
---

Triggered when resizing stops and the event has changed in duration.

<div class='spec' markdown='1'>
function( *eventResizeInfo* ) { }
</div>

`eventResizeInfo` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event (date, title, etc) **after** the resize.
</td>
</tr>

<tr>
<th>relatedEvents</th>
<td>an array of other related <a href='event-object'>Event Objects</a> that were also resized. an event might have other <a href='recurring-events'>recurring event</a> instances or might be linked to other events with the same <code>groupId</code></td>
</tr>

<tr>
<th>oldEvent</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event **before** the resize.
</td>
</tr>

<tr>
<th>endDelta</th>
<td markdown='1'>
A [Duration Object](duration-object) that represents the amount of time the event's **end date** was moved by.
</td>
</tr>

<tr>
<th>startDelta</th>
<td markdown='1'>
A [Duration Object](duration-object) that represents the amount of time the event's **start date** was moved by.
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

<tr>
<th>el</th>
<td markdown='1'>
The HTML element that was being dragged.
</td>
</tr>


<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

</table>

This callback is fired *before* the [eventChange](eventChange) callback is fired.

Here is an example demonstrating most of these properties:

```js
var calendar = new Calendar(calendarEl, {

  events: [
    // events here
  ],

  editable: true,

  eventResize: function(info) {
    alert(info.event.title + " end is now " + info.event.end.toISOString());

    if (!confirm("is this okay?")) {
      info.revert();
    }
  }

});
```
