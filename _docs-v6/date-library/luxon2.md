---
title: Luxon 2 Plugin
---

[Luxon](https://moment.github.io/luxon/index.html) is a JavaScript date library that cleverly leverages the browser's native APIs for many things such as time zones, locales, and formatting.

The FullCalendar plugin provides you the following functionality:

- Lets you use Luxon [formatting strings](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all date-formatting settings
- Lets you convert native [Date objects](date-object) emitted from the API into [Luxon DateTime objects](https://moment.github.io/luxon/api-docs/index.html#datetime) that match the calendar's time zone and locale
- Lets you convert [Duration objects](duration-object) emitted from the API into [Luxon Durations objects](https://moment.github.io/luxon/api-docs/index.html#duration)
- Provides you a named time-zone implementation for the [timeZone](timeZone) setting


## Usage with NPM

First, install the `@fullcalendar/luxon2` package along with any other packages you plan to use:

```
npm install --save \
  @fullcalendar/luxon2 \
  @fullcalendar/core \
  @fullcalendar/daygrid
```

Then, create a new calendar and pass in the plugins:

```js
import { Calendar } from '@fullcalendar/core'
import luxon2Plugin from '@fullcalendar/luxon2'
import dayGridPlugin from '@fullcalendar/daygrid'

let calendar = document.getElementById('calendar')
let calendar = new Calendar(calendarEl, {
  plugins: [ luxon2Plugin, dayGridPlugin ],
  titleFormat: 'LLLL d, yyyy' // you can now use Luxon format strings!
})

calendar.render()
```


## Usage with Script Tags

You can also configure the Luxon plugin with [script tags](initialize-globals). This example leverages CDN links:

```html
<!-- luxon lib -->
<script src='https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/global/luxon.min.js'></script>

<!-- fullcalendar bundle -->
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>

<!-- the luxon-to-fullcalendar connector. must go AFTER the luxon lib -->
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/luxon2@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>

<script>
  var calendar = document.getElementById('calendar')
  var calendar = new FullCalendar.Calendar(calendarEl, {
    titleFormat: 'LLLL d, yyyy' // you can now use Luxon format strings!
  })

  calendar.render()
</script>
```


## Formatting

The plugin allows you to specify [luxon formatting strings](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) wherever a [date formatting input](date-formatting) is expected:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  titleFormat: 'LLLL d, yyyy' // you can now use Luxon format strings!
})
```

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  titleFormat: '{LLLL {d}}, yyyy'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
});
```


## Luxon Objects

Using the provided utility methods, you can convert dates and durations supplied by FullCalendar's API into Luxon objects and durations:

```js
import { Calendar } from '@fullcalendar/core';
import { toLuxonDateTime, toLuxonDuration } from '@fullcalendar/luxon2';
...
let calendar = new Calendar(calendarEl, {

  dateClick: function(arg) {
    let dt = toLuxonDateTime(arg.date, calendar); // calendar is required
    console.log('clicked on ' + dt.toISO());
  },

  eventDrop: function(arg) {
    let dur = toLuxonDuration(arg.delta, calendar); // calendar is required
    console.log('event moved ' + dur.toISO());
  }
});
...
```

When using script tags, these utility functions are available as `FullCalendar.Luxon2.toLuxonDateTime` and `FullCalendar.Luxon2.toLuxonDuration`.
