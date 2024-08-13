---
title: eventLimit
---

Limits the number of events displayed on a day. The rest will show up in a popover.

<div class='spec' markdown='1'>
Boolean, Integer. *default:* `false`
</div>

When there are too many events, a link that looks like "+2 more" is displayed. The exact action that happens when the user clicks the link is determined by [eventLimitClick](eventLimitClick).

A value of `false` (the default) will display all events as-is.

A value of `true` will limit the number of events to the height of the day cell. [View a live demo](event-popover-demo).

An integer value will limit the events to a specific number of rows.

For the all-day section in the agenda views, a value of `true` will limit the number of events to `5`. To fine-tune this, use [View-Specific Options](view-specific-options) like this:

```js
$('#calendar').fullCalendar({
  eventLimit: true, // for all non-agenda views
  views: {
    agenda: {
      eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
    }
  }
});
```
