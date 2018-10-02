---
title: Background Events
type: guide
layout: docs-sublanding
demos:
  - background-events-demo
---

Events that appear as background highlights can be achieved by setting an [Event Object](event-object)'s `rendering` property to `"background"`:

```js
var calendar = new Calendar(calendarEl, {
  defaultDate: '2014-11-10',
  defaultView: 'agendaWeek',
  events: [
    {
      start: '2014-11-10T10:00:00',
      end: '2014-11-10T16:00:00',
      rendering: 'background'
    }
  ]
});
```

Result:

<img src='background-events.png' width='500' alt='background events example' />

Background events that are **timed** will only be rendered on the time slots in agenda view. Background events that are **all-day** will only be rendered in month view or the all-day slots of agenda view.


## Color

The color of background events can be manipulated by targeting the `fc-bgevent` className, one of your own custom classNames provided by the [Event Object](event-object)'s `className` property, or by explicitly specifying a color with each [Event Object](event-object)'s or [Event Source](event-source-object)'s `color` or `backgroundColor` properties.


## Inverse Backgrounds

The spans of time *not* occupied by an event can be colored by setting the `rendering` property to `"inverse-background"`. Events that share the same `id` will be grouped together when this rendering happens.

<img src='background-events-inverse.png' width='500' alt='inverse background example' />
