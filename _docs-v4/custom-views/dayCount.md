---
title: dayCount
---

Sets the exact number of days displayed in a custom view, regardless of [weekends](weekends) or [hiddenDays](hiddenDays).

<div class='spec' markdown='1'>
Integer
</div>

When a view's range is specified with a [duration](duration), hidden days will simply be omitted, and the view will stretch to fill the missing space. However, if you specify `dayCount`, you are guaranteed to see a certain number of days.

Example for a [Custom View](custom-view-with-settings):

```js
var calendar = new Calendar(calendarEl, {
  weekends: false,
  defaultView: 'agendaFourDay',
  views: {
    agendaFourDay: {
      type: 'agenda',
      dayCount: 4
    }
  }
});
```

Simpler example for a calendar with one view:

```js
var calendar = new Calendar(calendarEl, {
  weekends: false,
  defaultView: 'agenda',
  dayCount: 4
});
```
