---
title: MultiMonth View
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
  - multimonth-view-grid-demo
  - multimonth-view-stack-demo
---

Display multiple months. Similar to consecutive [DayGrid views](daygrid-view). Can be displayed as a grid or a vertical stack of months.<!--more--> Useful for displaying a whole year at once (12 individual months). Use `multiMonthYear` view for this.

First, install the necessary packages:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/multimonth
```

Then, you must decide between two different display modes:


<h2 id='responsive-grid'>A) Responsive grid (the default)</h2>

A 3x4 grid of months will be displayed if the screen space is available. Otherwise, the grid will responsively size to 2x6 or even 1x12. Example:

```js
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'

let calendar = new Calendar(calendarEl, {
  plugins: [multiMonthPlugin],
  initialView: 'multiMonthYear'
})
```

[View a live demo &raquo;](multimonth-view-grid-demo)

The [multiMonthMinWidth](multiMonthMinWidth) setting ultimately determines the number of columns.


<h2 id='vertical-stack'>B) Vertical stack</h2>

Create a vertical stack of months by forcing the grid to have a single column. Do this with the [multiMonthMaxColumns](multiMonthMaxColumns) setting.

```js
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'

let calendar = new Calendar(calendarEl, {
  plugins: [multiMonthPlugin],
  initialView: 'multiMonthYear',
  multiMonthMaxColumns: 1 // force a single columns
})
```

The month headers will stick as the user scrolls.

[View a live demo &raquo;](multimonth-view-stack-demo)


## DayGrid options

All of the settings that normally apply to [DayGrid](daygrid-view) will also apply to the calendars within multi-month. See the list of settings below.
