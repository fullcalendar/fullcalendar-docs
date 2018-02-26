---
title: updateEvent
type: method
since_version: 1.2
---

Reports changes to an event and renders them on the calendar.

<div class='spec' markdown='1'>
.fullCalendar( 'updateEvent', *event* )
</div>

`event` must be the original [Event Object](event-object) for an event, **not** merely a reconstructed object. The original Event Object can obtained by callbacks such as [eventClick](eventClick), or by the [clientEvents](clientEvents) method.

Here is how you might update an event after a click:

```js
$('#calendar').fullCalendar({
  eventClick: function(event, element) {

    event.title = "CLICKED!";

    $('#calendar').fullCalendar('updateEvent', event);

  }
});
```
