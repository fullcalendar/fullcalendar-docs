---
title: eventTimeFormat
---

Determines the time-text that will be displayed on each event.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *defaults*:

```js
// TimeGrid views. '7:00'
{
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
}

// DayGrid views. '7p'
{
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
}

// List views. '7pm'
{
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
}
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single setting alone will set the value for all views.

Time-text will only be displayed for [Event Objects](event-object) that have `allDay` equal to `false`.

Here is an example of displaying all events in a 24-hour format:

```js
var calendar = new Calendar(calendarEl, {
  events: [
    {
      title:  'My Event',
      start:  '2010-01-01T14:30:00',
      allDay: false
    }
    // other events here...
  ],
  eventTimeFormat: { // like '14:30:00'
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
});
```
