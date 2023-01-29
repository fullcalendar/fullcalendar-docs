---
title: MultiMonth Grid View
title_for_landing: MultiMonth Grid
excerpt_separator: <!--more-->
children:
  - title: Multimonth-specific Options
    children:
      - multiMonthMaxColumns
      - multiMonthMinWidth
      - multiMonthTitleFormat
related:
  - showNonCurrentDates
  - fixedWeekCount
  - businessHours
  - weekends
demos:
  - multimonth-view-demo
---

The MultiMonth view displays multiple individual months.<!--more--> Either install via [script tags](initialize-globals) or [individual packages](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/multimonth
```

There are numerous other options throughout the docs that affect the display of MultiMonth view, such as the [date/time display options](date-display) and [locale-related options](localization).


## Year as a Grid

The `multiMonthYear` view displays a 3x4 grid of months. However, if space does not allow, it will responsively shift to 2x6 or even 1x12. The [multiMonthMinWidth](multiMonthMinWidth) setting ultimately determines the number of columns. Example:

```js
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'

let calendar = new Calendar(calendarEl, {
  plugins: [multiMonthPlugin],
  initialView: 'multiMonthYear'
})
```

[View a live demo &raquo;](multimonth-view-demo)


## Year as a Stack

The `multiMonthYear` view can be configured as a single column (aka "stack"). [View docs specifically for MultiMonth Stack &raquo;](multimonth-stack)



## Custom Duration

You can create MultiMonth views [with arbitrary durations](custom-view-with-settings). The following creates a 4-month view:

```js
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'

const calendar = new Calendar(calendarEl, {
  plugins: [multiMonthPlugin],
  initialView: 'multiMonthFourMonth',
  views: {
    multiMonthFourMonth: {
      type: 'multiMonth',
      duration: { months: 4 }
    }
  }
})
```
