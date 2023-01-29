---
title: TimeGrid View
title_for_landing: TimeGrid
excerpt_separator: <!--more-->
children:
  - title: TimeGrid-specific Options
    children:
      - eventMinHeight
      - eventShortHeight
      - slotEventOverlap
      - allDaySlot
      - article: all-day-render-hooks
        points:
          - allDayClassNames
          - allDayContent
          - allDayDidMount
          - allDayWillUnmount
related:
  - eventMaxStack
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - slotMinTime
  - slotMaxTime
  - expandRows
  - nowIndicator
  - scrollTime
demos:
  - timegrid-standard-view-demo
  - timegrid-custom-view-demo
---

A TimeGrid view displays one-or-more horizontal days as well as an axis of time, usually midnight to midnight, on the vertical axis.<!--more--> Either install via [script tags](initialize-globals) or [individual packages](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/timegrid
```

There are numerous other options throughout the docs that affect the display of TimeGrid view, such as the [date/time display options](date-display) and [locale-related options](localization).


## Week & Day View

The following example shows how to toggle between `timeGridWeek` and `timeGridDay`:

```js
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'

const calendar = new Calendar(calendarEl, {
  plugins: [timeGridPlugin],
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'timeGridWeek,timeGridDay' // user can switch between the two
  }
})
```

[View a demo &raquo;](timegrid-standard-view-demo)


## Custom Duration

You can create TimeGrid views [with arbitrary durations](custom-view-with-settings). The following creates a 4-day view:

```js
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'

const calendar = new Calendar(calendarEl, {
  plugins: [timeGridPlugin],
  initialView: 'timeGridFourDay',
  views: {
    timeGridFourDay: {
      type: 'timeGrid',
      duration: { days: 4 }
    }
  }
})
```

[View a demo &raquo;](timegrid-custom-view-demo)
