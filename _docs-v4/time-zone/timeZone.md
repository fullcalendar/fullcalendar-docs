---
title: timeZone
layout: docs-sublanding
demos:
  - timeZone-demo
---

A time zone is a region of the world that serves as a context for displaying dates. It affects a Calendar instance in the following ways:

- How the datetime text renders on events
- The positioning of events. Which day or which part of the time axis an event is on top of.
- The way in which you should interpret the exposed native Date objects throughout the API, such as an [Event Object's](event-object) `start`/`end`, a [View object's](view-object) `activeStart`/`activeEnd`, or the dates exposed by the `dateClick` or `select` callbacks. Read more about [Date Objects](date-object).
- When event data is requested, the dates given to an [events function](events-function) or [json feed](events-json-feed)
- When event data is received, the way in which dates are parsed. This only affects dates that were supplied with no time zone information, aka [ISO8601 date strings](https://en.wikipedia.org/wiki/ISO_8601) that do not supply a UTC offset. Read more about [Date Parsing](date-parsing).

Here are the values you can enter for the `timeZone` setting and how they behave:


## `'local'` (the default)

Every browser has a default time zone, which is usually determined by the settings of the user's operating system. This is considered the "local" time zone. It will vary for different users of you calendar, depending on where they live or how they have their computer configured.

If your events' dates were defined relative to UTC, either via a millisecond time or an ISO8601 string with a UTC offset, then your dates will be appropriately shifted to display in the user's local time zone. If your dates were supplied as ISO8601 strings *without* UTC offsets, they will be parsed (and thus displayed) as if they were local.

When using the dates emitted from the API, you'll want to access their *local* values via methods like `getMonth()`, `getHours()`, and `toString()`. Read more about [Date Objects](date-object).

An example to summarize this behavior: (the placeholder XX:XX signifies the local time zone offset, which will vary)

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'local', // the default (unnecessary to specify)
  events: [
    { start: '2018-09-01T12:30:00Z' }, // will be shifted to local
    { start: '2018-09-01T12:30:00+XX:XX' }, // already same offset as local, so won't shift
    { start: '2018-09-01T12:30:00' } // will be parsed as if it were '2018-09-01T12:30:00+XX:XX'
  ],
  dateClick: function(arg) {
    console.log(arg.date.toString()); // use *local* methods on the native Date Object
    // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
  }
});
```


## `'UTC'`

Whereas the local timezone will vary from browser to browser, the UTC time zone is guaranteed to be the same in every browser. It will also not experience daylight savings times. The UTC time zone was designed this way and it serves as a time zone that other time zones define themselves relative to.

If your events' dates are defined as ISO8601 strings *with* UTC offsets, then your dates will be appropriately shifted to display in the 00:00 offset. If your dates were supplied as ISO8601 strings *without* time zone offsets, they will be parsed (and thus displayed) as if they were UTC.

When using the dates emitted from the API, you'll want to access their *UTC* values via methods like `getUTCMonth()`, `getUTCHours()`, and `toUTCString()`. Read more about [Date Objects](date-object).

In summary:

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  events: [
    { start: '2018-09-01T12:30:00Z' }, // already in UTC, so won't shift
    { start: '2018-09-01T12:30:00+XX:XX' }, // will shift to 00:00 offset
    { start: '2018-09-01T12:30:00' } // will be parsed as if it were '2018-09-01T12:30:00Z'
  ],
  dateClick: function(arg) {
    console.log(arg.date.toUTCString()); // use *UTC* methods on the native Date Object
    // will output something like 'Sat, 01 Sep 2018 00:00:00 GMT'
  }
});
```

If you'd like all your events to display consistently across browsers regardless of your users' local time zones, UTC will achieve that. However, if you are leveraging UTC to simulate some other *real* time zone, please use "named time zones with UTC-coercion" instead (mentioned below). It is more elegant and made for this purpose.


<h2 id='named-time-zones'>Named Time Zones</h2>

A named time zone is a specific region of the world specified by a string like `'America/New_York'` or `'Europe/Moscow'`. Just like the UTC time zone, it will display consistently across browsers because there is no ambiguity.

However, not all browsers natively support named time zones the same way they do local or UTC. More specifically, the native Date object doesn't know how to compute their time zone offsets. Thus, if you plan to use named time zones, you'll need to decide which time zone "implementation" FullCalendar should use, which come in the form of plugins.


<h3 id='UTC-coercion'>Without a Plugin ("UTC-coercion")</h3>

When no timezone-related plugins are present, the calendar will do "UTC-coercion", which means all dates will be *forced* into UTC-based native Date objects, even though those dates technically did not originate in UTC. Though this is a "hack" for working around browser limitations, it works quite well. You'll need to remember to use each native Date object's UTC-flavored methods like `getUTCDate()` and `toUTCString()`.

When parsing ISO8601 strings that have time zone offsets, like `2019-09-01T12:30:00-05:00`, the offset (`-05:00`) will essentially be ignored! If an Event Object accepted the date in this example, its `event.start.toISOString()` value would be `'2019-09-01T12:30:00Z'`.

Though the offset is ignored for parsing date strings into native Date Objects, the time zone offset will magically be available for event datetime formatting in [eventTimeFormat](eventTimeFormat).

What's the point of all of this? It allows your *server* to compute the time zone offset for each date within an arbitrary named time zone, since the browser is unable to. Then, the server can inject the correct time zone offset into a date string, which will be available for formatting in [eventTimeFormat](eventTimeFormat). All the while, the dates in the client-side JavaScript API will be consistently represented in UTC. This is usually done in tandem with an [event json feed](events-json-feed), which generates the date strings on the server side.

In summary:

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'America/New_York',
  events: [
    { start: '2018-09-01T12:30:00Z' }, // will be parsed in UTC, as-is
    { start: '2018-09-01T12:30:00+XX:XX' }, // will be parsed in UTC as '2018-09-01T12:30:00Z'
    { start: '2018-09-01T12:30:00' } // will be parsed in UTC as '2018-09-01T12:30:00Z'
  ],
  dateClick: function(arg) {
    console.log(arg.date.toUTCString()); // use *UTC* methods on the native Date Object
    // will output something like 'Sat, 01 Sep 2018 00:00:00 GMT'
  }
});
```


### With a TimeZone Plugin

You can leverage a plugin that does the heavy-lifting related to named time zones. These plugins make up for the lack of native time zone functionality. Though a plugin will add bloat to your final JavaScript bundle, it will ultimately provide a better API experience than UTC-coercion because your dates will no longer be "faked" in UTC.

When using a third-party time zone implementation, You won't be able to use the local accessors like `getMonth()`, nor the UTC accessors like `getUTCMonth()`. You'll need to leverage the plugin to interpret the Date object.

There are two available plugins:

- [moment-timezone plugin](moment-plugins) (for the [Moment Timezone](https://momentjs.com/timezone/) library)
- [luxon plugin](luxon-plugin) (for the [Luxon](https://moment.github.io/luxon/) library)

The following example demonstrates the **moment-timezone plugin** with an [ES6 build system](initialize-es6):

```js
import { Calendar } from '@fullcalendar/core';
import { toMoment } from '@fullcalendar/moment'; // only for formatting
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

let calendar = new Calendar(calendarEl, {
  plugins: [ momentTimezonePlugin ],
  timeZone: 'America/New_York',
  events: [
    { start: '2018-09-01T12:30:00Z' }, // will be shifted to America/New_York
    { start: '2018-09-01T12:30:00+XX:XX' }, // will be shifted to America/New_York
    { start: '2018-09-01T12:30:00' } // will be parsed as America/New_York
  ],
  dateClick: function(arg) {
    // millisecond value is correctly in America/New_York
    console.log(arg.date.valueOf())

    // use the plugin for manipulation and formatting
    let m = toMoment(calendar, arg.date)
    console.log(m.format()) // something like '2018-09-01T12:30:00-05:00'
  }
});
```

You can do something similar with [script tags and browser globals](initialize-globals):

```html
<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/moment/main.js'></script>
<script src='fullcalendar/moment-timezone/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'momentTimezone' ],
  timeZone: 'America/New_York',
  events: [
    { start: '2018-09-01T12:30:00Z' }, // will be shifted to America/New_York
    { start: '2018-09-01T12:30:00+XX:XX' }, // will be shifted to America/New_York
    { start: '2018-09-01T12:30:00' } // will be parsed as America/New_York
  ],
  dateClick: function(arg) {
    // millisecond value is correctly in America/New_York
    console.log(arg.date.valueOf())

    // use the plugin for manipulation and formatting
    let m = FullCalendarMoment.toMoment(calendar, arg.date)
    console.log(m.format()) // something like '2018-09-01T12:30:00-05:00'
  }
});
...
</script>
```
