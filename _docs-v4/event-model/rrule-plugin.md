---
title: RRule Plugin
---

The RRule plugin is a connector to the [rrule js library](https://github.com/jakubroztocil/rrule). It is powerful for specifying recurring events, moreso than FullCalendar's built-in [simple event recurrence](recurring-events).

It introduces some new [event properties](event-parsing):

```js
import { Calendar } from '@fullcalendar/core';
import rrulePlugin from '@fullcalendar/rrule';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ rrulePlugin ],
  events: [
    {
      // standard property
      title: 'my recurring event',

      rrule: 'DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20120601;BYDAY=MO,FR',
      // ...or, an object...
      rrule: {
        freq: 'weekly',
        interval: 5,
        byweekday: [ 'mo', 'fr' ],
        dtstart: '2012-02-01T10:30:00',
        until: '2012-06-01'
      },

      // for specifying the end time of each instance
      duration: '02:00'
    }
  ]
});
...
```

If you are using `<script>` tags and browser globals, you must ensure the original non-plugin `rrule.js` dist file [from the rrule site](https://jakubroztocil.github.io/rrule/) is included on your page first.

The `rrule` property accepts whatever the rrule lib accepts for a `new RRule`. [See the docs](https://github.com/jakubroztocil/rrule). You can specify a string or an object.

If you're specifying an object, you can write some of the properties in a way that's more convenient than what rrule requires:

- You don't need to use the RRule constants like `RRule.WEEKLY`. You can just specify the string `'weekly'`. This is better for JSON serialization.
- You can specify `dtstart` as an [ISO8601 string](date-parsing). If the string does not have time part, the event will be all-day. The time part will determine each recurrence's start time. If it doesn't have a UTC offset, it will be parsed according to the current [timeZone](timeZone).
- You can specify `until` as an [ISO8601 string](date-parsing). If it doesn't have a UTC offset, it will be parsed according to the current [timeZone](timeZone).

The `duration` property must be something that [parses into a Duration](duration-object). If not specified, each event will appear to have the default duration. See [defaultAllDayEventDuration](defaultAllDayEventDuration), [defaultTimedEventDuration](defaultTimedEventDuration), and [forceEventDuration](forceEventDuration) for more info.
