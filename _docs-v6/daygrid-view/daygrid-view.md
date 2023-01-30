---
title: DayGrid View
title_for_landing: DayGrid
excerpt_separator: <!--more-->
layout: docs-sublanding
children:
  - title: Daygrid-specific Options
    children:
      - monthStartFormat
demos:
  - daygrid-view-demo
  - daygridyear-view-demo
---

A DayGrid view displays one or more cells, each representing a day.<!--more--> Either install via [script tags](initialize-globals) or [individual packages](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/daygrid
```

There are numerous other options throughout the docs that affect the display of DayGrid view, such as the [date/time display options](date-display) and [locale-related options](localization).


## Week & Day View

The following example shows how to toggle between `dayGridWeek` and `dayGridDay`:

```js
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridWeek',
  headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridWeek,dayGridDay' // user can switch between the two
  }
})
```

[View a demo &raquo;](daygrid-view-demo)


## Month View

The `dayGridMonth` view is the most common. [View docs specifically for month view &raquo;](month-view)


## Year View

The `dayGridYear` view shows one continuous grid of cells for an entire year. The user most scroll. The first cell of each month is emphasized, as controlled by [monthStartFormat](monthStartFormat).

```js
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridYear'
})
```

[View a demo &raquo;](daygridyear-view-demo)

`dayGridYear` view was added in **v6.1.0**.


## Custom Duration

You can create DayGrid views [with arbitrary durations](custom-view-with-settings). The following creates a 4-week view:

```js
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridFourWeek',
  views: {
    dayGridFourWeek: {
      type: 'dayGrid',
      duration: { weeks: 4 }
    }
  }
})
```
