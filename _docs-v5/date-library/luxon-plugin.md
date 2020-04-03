---
title: Luxon Plugin
---

[Luxon](https://moment.github.io/luxon/index.html) is an up-and-coming JavaScript date library that cleverly leverages the browser's native APIs for many things such as time zones, locales, and formatting. However, it requires **IE11 and above**, and if you want to use named time zones, **it does not support IE at all**, only Microsoft Edge. If these browser requirements are okay for your project, then all is good!

The plugin provides you the following functionality:

- Lets you use Luxon [formatting strings](https://moment.github.io/luxon/docs/manual/formatting.html#toformat) for all date-formatting settings
- Lets you convert native [Date objects](date-object) emitted from the API into [Luxon DateTime objects](https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html) that match the calendar's time zone and locale
- Lets you convert [Duration objects](duration-object) emitted from the API into [Luxon Durations objects](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html)
- Provides you a named time-zone implementation for the [timeZone](timeZone) setting

Example using formatting strings with [an ES6 build system](initialize-es6):

```js
import { Calendar } from '@fullcalendar/core';
import luxonPlugin from '@fullcalendar/luxon';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ luxonPlugin ],
  titleFormat: 'LLLL d, yyyy' // you can now use format strings
});
...
```

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
let calendar = new Calendar(calendarEl, {
  titleFormat: '{LLLL {d}}, yyyy'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
});
```

Example using date/duration conversion:

```js
import { Calendar } from '@fullcalendar/core';
import { toDateTime, toDuration } from '@fullcalendar/luxon';
...
let calendar = new Calendar(calendarEl, {

  dateClick: function(arg) {
    let dt = toDateTime(arg.date, calendar); // calendar is required
    console.log('clicked on ' + dt.toISO());
  },

  eventDrop: function(arg) {
    let dur = toDuration(arg.delta, calendar); // calendar is required
    console.log('event moved ' + dur.toISO());
  }
});
...
```
