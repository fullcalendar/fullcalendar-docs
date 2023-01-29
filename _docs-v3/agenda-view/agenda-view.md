---
title: Agenda View
children:
  - title: Agenda-specific Options
    children:
      - allDaySlot
      - allDayText
      - slotEventOverlap
      - agendaEventMinHeight
related:
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - minTime
  - maxTime
  - nowIndicator
  - scrollTime
demos:
  - agenda-standard-view-demo
  - agenda-custom-view-demo
---

Agenda view displays one-or-more horizontal days as well as an axis of time, usually midnight to midnight, on the vertical axis. The two predefined agenda views are **agendaDay** and **agendaWeek**. They can be initialized like this:

```js
$('#calendar').fullCalendar({
  defaultView: 'agendaWeek'
});
```

Agenda views of other durations can be made with a [custom view](custom-view-with-settings) with type `'agenda'`.

The following options are specific to agenda view. However, there are numerous other options throughout the docs that affect the display of agenda view, such as the [date/time display options](date-display) and [locale-related options](localization).
