---
title: List View
children:
  - title: List-View-specific Options
    children:
      - listDayFormat
      - listDayAltFormat
      - noEventsMessage
demos:
  - list-view-demo
---

A list view displays events in a simple vertical list for a specific interval of time. If there are no events during a specific interval of time, the [noEventsMessage](noEventsMessage) is displayed. List view was added in FullCalendar version `3.0.0`. There are 4 preset list views: **listDay**, **listWeek**, **listMonth**, and **listYear**. You can initialize a list view like this:

```js
$('#calendar').fullCalendar({
  defaultView: 'listWeek'
});
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'list'`.

The following settings are specific to list-view. However, many other settings throughout the API also affect list-view as well, such as [eventRender](eventRender) and [eventClick](eventClick).
