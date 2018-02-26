---
title: timeFormat
---

Determines the time-text that will be displayed on each event.

<div class='spec' markdown='1'>
[format string](date-formatting-string), *default*:

```
'h:mm'    // like '5:00', for agendaWeek and agendaDay
'h(:mm)t' // like '7p', for all other views
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single string alone will set the value for all views.

The default values will change based on the current [locale](locale).

Time-text will only be displayed for [Event Objects](event-object) that have `allDay` equal to `false`.

Here is an example of displaying all events in a 24-hour format:

```js
$('#calendar').fullCalendar({
  events: [
    {
      title:  'My Event',
      start:  '2010-01-01T14:30:00',
      allDay: false
    }
    // other events here...
  ],
  timeFormat: 'H(:mm)' // uppercase H for 24-hour clock
});
```
