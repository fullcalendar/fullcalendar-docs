---
title: Agenda View
children:
  - title: Agenda-specific Options
    children:
      - allDaySlot
      - allDayText
      - slotEventOverlap
related:
  - slotMinutes
  - axisFormat
  - minTime
  - maxTime
  - firstHour
---

Agenda view displays one-or-more horizontal days as well as an axis of time, usually midnight to midnight, on the vertical axis. The two predefined agenda views are **agendaDay** and **agendaWeek**. They can be initialized like this:

```js
$('#calendar').fullCalendar({
  defaultView: 'agendaWeek'
});
```

The following options are specific to agenda view. However, there are numerious other options throughout the docs that affect the display of agenda view, such as the [local-related options](localization) and [date/time display options](date-display).
