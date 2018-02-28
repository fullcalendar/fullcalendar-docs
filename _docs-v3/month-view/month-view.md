---
title: Month View
children:
  - title: Month-View-specific Options
    children:
      - fixedWeekCount
      - showNonCurrentDates
demos:
  - month-view-demo
---

Month view displays the current month's days, and usually a few days of the previous and next months, in a table-like format. It can be initialized like so:

```js
$('#calendar').fullCalendar({
  defaultView: 'month'
});
```

The following options are specific to month view. However, there are numerious other options throughout the docs that affect the display of month view, such as the [local-related options](localization) and [date/time display options](date-display).
