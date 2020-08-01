---
title: RRule Plugin
---

The RRule plugin is a connector to the [rrule js library](https://github.com/jakubroztocil/rrule). It is powerful for specifying recurring events, moreso than FullCalendar's built-in [simple event recurrence](recurring-events).


## Usage with NPM

First, install the `@fullcalendar/rrule` package along with any other packages you plan to use:

```
npm install --save @fullcalendar/rrule @fullcalendar/core @fullcalendar/daygrid
```

Then, create a new calendar and pass in the plugins:

```js
import { Calendar } from '@fullcalendar/core'
import rrulePlugin from '@fullcalendar/rrule'
import dayGridPlugin from '@fullcalendar/daygrid'

let calendar = document.getElementById('calendar')
let calendar = new Calendar(calendarEl, {
  plugins: [ rrulePlugin, dayGridPlugin ],
  events: [
    // event data. see below
  ]
})

calendar.render()
```


## Usage with Script Tags

You can also configure the rrule plugin with [script tags](initialize-globals). This example leverages CDN links:

```html
<!-- rrule lib -->
<script src='https://cdn.jsdelivr.net/npm/rrule@2.6.4/dist/es5/rrule.min.js'></script>

<!-- fullcalendar bundle -->
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.2.0/main.min.js'></script>

<!-- the rrule-to-fullcalendar connector. must go AFTER the rrule lib -->
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/rrule@5.2.0/main.global.min.js'></script>

<script>
  var calendar = document.getElementById('calendar')
  var calendar = new FullCalendar.Calendar(calendarEl, {
    events: [
      // event data. see below
    ]
  })

  calendar.render()
</script>
```

<a class='more-link' href='rrule-global-demo'>View a live demo</a>


## Event Data

When using the RRule plugin, [event parsing](event-parsing) accepts these new properties:

<table>
<tr>
<th>rrule</th>
<td markdown='1'>
Accepts whatever the rrule lib accepts for a `new RRule`. [See the RRule docs](https://github.com/jakubroztocil/rrule). You can specify a string or an object.
</td>
</tr>
<tr>
<th>duration</th>
<td markdown='1'>
Must be something that [parses into a Duration](duration-object). If not specified, each event will appear to have the default duration. See [defaultAllDayEventDuration](defaultAllDayEventDuration), [defaultTimedEventDuration](defaultTimedEventDuration), and [forceEventDuration](forceEventDuration) for more info.
</td>
</tr>
</table>

You can specify the `rrule` property as an object:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  events: [
    {
      title: 'my recurring event',
      rrule: {
        freq: 'weekly',
        interval: 5,
        byweekday: [ 'mo', 'fr' ],
        dtstart: '2012-02-01T10:30:00', // will also accept '20120201T103000'
        until: '2012-06-01' // will also accept '20120201'
      }
    }
  ]
})
```

If you're specifying an object, you can write some of the properties in a way that's more convenient than what rrule requires. You don't need to use the RRule constants like `RRule.WEEKLY`. You can just specify the string `'weekly'`. This is better for JSON serialization.

You can also specify `rrule` as a string:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  events: [
    {
      title: 'my recurring event',
      rrule: 'DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20120601;BYDAY=MO,FR'
    }
  ]
})
```


## Times and Time Zones

The `dtstart` and `until` dates (or `DTSTART` and `UNTIL` when specifying a string) will be parsed in this way:

- If a time part is not specified (like `T10:30:00` or `T103000`), the event is assumed to be all-day.
- If a time zone part is not specified (like `Z`), the event will assume the [timeZone](timeZone) of the calendar.
