---
title: Background Events
type: guide
layout: docs-sublanding
demos:
  - background-events-demo
---

Events that appear as background highlights can be achieved by setting an [Event Object](event-object)'s `display` property to `"background"`:

```js
var calendar = new Calendar(calendarEl, {
  initialDate: '2014-11-10',
  initialView: 'timeGridWeek',
  events: [
    {
      start: '2014-11-10T10:00:00',
      end: '2014-11-10T16:00:00',
      display: 'background'
    }
  ]
});
```

Result:

<img src='background-events.png' width='500' alt='background events example' />

Background events that are **timed** will only be rendered on the time slots in TimeGrid view. Background events that are **all-day** will only be rendered in month view or the all-day slots of TimeGrid view.


## Color

The color of background events can be manipulated by targeting the `fc-bgevent` className, one of your own custom classNames provided by the [Event Object](event-object)'s `className` property, or by explicitly specifying a color with each [Event Object](event-object)'s or [Event Source](event-source-object)'s `color` or `backgroundColor` properties.


## Inverse Backgrounds

The spans of time *not* occupied by an event can be colored by setting the `display` property to `"inverse-background"`:

```js
var calendar = new Calendar(calendarEl, {
  plugins: [ 'timeGrid' ],
  initialDate: '2014-11-10',
  initialView: 'timeGridWeek',
  events: [
    {
      groupId: 'testGroupId',
      start: '2014-11-10T10:00:00',
      end: '2014-11-10T16:00:00',
      display: 'inverse-background'
    }
  ]
});
```

Result:

<img src='background-events-inverse.png' width='500' alt='inverse background example' />

Events that share the same `groupId` will be grouped together when this rendering happens.

## Modifying Events

The [editable](editable) property of a calendar determines whether the events on it can be modified. However, Background Events are not editable. They can not be *dragged* or *resized*.
