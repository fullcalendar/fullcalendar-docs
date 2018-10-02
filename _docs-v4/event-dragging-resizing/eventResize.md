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
<th>prevEvent</th>
<td markdown='1'>
An [Event Object](event-object) that holds information about the event **before** the resize.
</td>
</tr>

<tr>
<th>startDelta</th>
<td markdown='1'>
A [Duration Object](duration-object) that represents the amount of time the event's **start date** was moved by.
</td>
</tr>

<tr>
<th>endDelta</th>
<td markdown='1'>
A [Duration Object](duration-object) that represents the amount of time the event's **end date** was moved by.
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
