---
title: titleRangeSeparator
---

The date range in the **agendaWeek** title is, by default, separated by "-" between the beginning and end date.

`titleRangeSeparator` allows the user to override and customize the range separator (ex. changing the separator from "-" to "to"). The user's customized separator
will be added to the default range format, as well as the customed range format generated with `titleFormat`. 

```
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultDate: '2016-12-07',
    defaultView: 'agendaWeek',
    views: {
      week: {
        titleFormat: 'MMM D YYYY'
        titleRangeSeparator: ' to ',
      }
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Long Event',
        start: '2016-12-07',
        end: '2016-12-10'
      }
    ]
  });
```
