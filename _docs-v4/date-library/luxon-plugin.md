---
title: Luxon Plugin
---

Luxon is an up-and-coming JavaScript date library that cleverly leverages the browser's native APIs for many things such as time zones, locales, and formatting. However, it requires **IE11 and above**, and if you want to use named time zones, **it does not support IE at all**, only Microsoft Edge. If these browser requirements are okay for your project, then all is good!

The plugin provides you the following functionality:

- Lets you use Luxon [formatting strings](https://moment.github.io/luxon/docs/manual/formatting.html#toformat) for all date-formatting settings
- Lets you convert native [Date objects](date-object) emitted from the API into [Luxon DateTime objects](https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html) that match the calendar's time zone and locale
- Lets you convert [Duration objects](duration-object) emitted from the API into [Luxon Durations objects](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html)
- Provides you a "named time zone implementation" for the [timeZoneImpl](timeZoneImpl) setting

Example using formatting strings:

```js
require { Calendar } from 'fullcalendar'
require 'fullcalendar-luxon' // simply require the file

var calendar = new Calendar(calendarEl, {
  titleFormat: 'LLLL d, yyyy' // you can now use format strings
})
```

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
...
var calendar = new Calendar(calendarEl, {
  titleFormat: '{LLLL {d}}, yyyy'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
})
```

Example using date/duration conversion:

```js
require { Calendar } from 'fullcalendar'
require { toDateTime, toDuration } from 'fullcalendar-luxon'

var calendar = new Calendar(calendarEl, {

  dateClick: function(arg) {
    var dt = toDateTime(calendar, arg.date) // calendar must be first argument
    console.log('clicked on ' + dt.toISO())
  },

  eventDrop: function(arg) {
    var dur = toDuration(calendar, arg.delta) // calendar must be first argument
    console.log('event moved ' + dur.toISO())
  }

})
```

Example using `timeZoneImpl`:

```js
require { Calendar } from 'fullcalendar'
require 'fullcalendar-luxon' // simply require the file

var calendar = new Calendar(calendarEl, {
  timeZone: 'Europe/Moscow',
  timeZoneImpl: 'luxon'
})
```
