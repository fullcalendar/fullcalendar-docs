---
title: Month View
children:
  - title: Month-View-specific Options
    children:
      - weekMode
---

Month view displays the current month's days, and usually a few days of the previous and next months, in a table-like format. It can be initialized like so:

```js
$('#calendar').fullCalendar({
  defaultView: 'monthView'
});
```

The following options are specific to month view. However, there are numerous other options throughout the docs that affect the display of month view, such as the [locale-related options](localization) and [date/time display options](date-display).
