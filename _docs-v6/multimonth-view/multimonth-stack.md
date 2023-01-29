---
title: MultiMonth Stack View
title_for_landing: MultiMonth Stack
excerpt_separator: <!--more-->
demos:
  - multimonth-stack-demo
related:
  - multiMonthTitleFormat
  - showNonCurrentDates
  - fixedWeekCount
  - businessHours
  - weekends
---

You can create a specific type of [MultiMonth view](multimonth-view) with a single column. The user must scroll to see months beyond the first.<!--more--> This is achieved by setting [multiMonthMaxColumns](multiMonthMaxColumns) to `1`.

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


## Without Month Headers

Want one continuous table of cells without month headers? [See dayGridYear view &raquo;](daygrid-view#year-view)


## Endless Scroll

Want endless scrolling of months that goes on forever? [Follow this GibHub ticket &raquo;](https://github.com/fullcalendar/fullcalendar/issues/2276)
