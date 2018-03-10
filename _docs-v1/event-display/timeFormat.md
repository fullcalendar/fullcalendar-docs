---
title: timeFormat
since_version: 1.1
---

Determines the time-text that will be displayed on each event.

<div class='spec' markdown='1'>
String/[View Option Hash](view-option-hash), *default*:

```js
{
  // for agendaWeek and agendaDay
  agenda: 'h:mm{ - h:mm}', // 5:00 - 6:30

  // for all other views
  '': 'h(:mm)t'            // 7p
}
```
</div>

A single format string will change the time-text for events in all views. A [View Option Hash](view-option-hash) may be provided to target specific views (this is what the default does).

Uses [formatDate](formatDate)/[formatDates](formatDates) formatting rules.
(The formatting rules were much different in versions before 1.3. [See here](formatDate-pre-13))

Time-text will only be displayed for [Event Objects](event-object) that have `allDay` equal to `false`.

Here is an example of displaying all events in a 24-hour format:

```js
$('#calendar').fullCalendar({
  events: [
    {
      title:  'My Event',
      start:   '2010-01-01T14:30:00',
      allDay: false
    }
    // other events here...
  ],
  timeFormat: 'H(:mm)' // uppercase H for 24-hour clock
});
```

<div class='version-info' markdown='1'>
A *View Option Hash* can only be provided in version 1.4 and later.
</div>
