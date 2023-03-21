---
title: Multi-Month Stack
excerpt_separator: <!--more-->
since_version: 6.1.0
demos:
  - multimonth-stack-demo
related:
  - multiMonthTitleFormat
  - showNonCurrentDates
  - fixedWeekCount
  - businessHours
  - weekends
---

You can create a specific type of [Multi-Month Grid](multimonth-grid) with a single column. The user must scroll to see months beyond the first.<!--more--> This is achieved by setting [multiMonthMaxColumns](multiMonthMaxColumns) to `1`.

Either install via [script tags](initialize-globals) or [individual packages](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/multimonth
```

Then initialize the calendar in JavaScript:

```js
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'

const calendar = new Calendar(calendarEl, {
  plugins: [multiMonthPlugin],
  initialView: 'multiMonthYear',
  multiMonthMaxColumns: 1 // force a single column
});
```

[View a demo &raquo;](multimonth-stack-demo)

Months are separate by month headers that stick to the top of the scroll container. The text of the header is controlled by [multiMonthTitleFormat](multiMonthTitleFormat).

There are numerous other options throughout the docs that affect the display of Multi-Month view, such as the [date/time display options](date-display) and [locale-related options](localization).


## Without Month Headers

Want one continuous table of cells without month headers? [See dayGridYear view &raquo;](daygrid-view#year-view)


## Endless Scroll

Want endless scrolling of months that goes on forever? [Follow this GitHub ticket &raquo;](https://github.com/fullcalendar/fullcalendar/issues/2276)
