---
title: Moment Plugins
---

[Moment JS](https://momentjs.com/) is a popular library for parsing, formatting, and manipulating dates. There is also a separate but related project called [Moment Timezone](https://momentjs.com/timezone/) which adds time zone functionality to all moment objects. FullCalendar has a connector for each of these libraries.


## Moment Plugin

The fullcalendar-moment plugin provides the following functionality:

- Lets you use moment formatting strings for all [date-formatting](date-formatting) settings
- Lets you convert native [Date objects](date-object) emitted from the API into moment objects that match the calendar's time zone and locale
- Lets you convert [Duration](duration-object) objects emitted from the API into moment durations objects

Example using formatting strings:

```js
import { Calendar } from '@fullcalendar/core';
import momentPlugin from '@fullcalendar/moment';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ momentPlugin ],
  titleFormat: 'MMMM D, YYYY' // you can now use format strings
});
...
```

If you are using `<script>` tags and browser globals, you must ensure the original non-plugin `moment.js` dist file [from the Moment site](https://momentjs.com/) is included on your page first.

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
let calendar = new Calendar(calendarEl, {
  plugins: [ momentPlugin ],
  titleFormat: '{MMMM {D}}, YYYY'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
});
```

Example using date/duration conversion:

```js
import { Calendar } from '@fullcalendar/core';
import { toMoment, toDuration } from '@fullcalendar/moment';
...
let calendar = new Calendar(calendarEl, {

  dateClick: function(arg) {
    let m = toMoment(arg.date, calendar); // calendar is required
    console.log('clicked on ' + m.format());
  },

  eventDrop: function(arg) {
    let d = toDuration(arg.delta);
    console.log('event moved ' + d.humanize());
  }
});
...
```

If you are using `<script>` tags and browser globals, you can access `FullCalendarMoment.toMoment` and `FullCalendarMoment.toDuration`.


<h2 id='moment-timezone'>Moment Timezone Plugin</h2>

The Moment Timezone Plugin plugin, which is separate from the basic Moment plugin, gives your calendar support for arbitrary named time zones. It provides a "named timezone implementation" for the [timeZone](timeZone#named-time-zones) setting.

In addition to loading the plugin, you must also load moment-timezone's timezone data. You should consult the [moment-timezone docs on this matter](https://momentjs.com/timezone/docs/#/use-it/), but long story short, if you are using Node/Webpack, all time zone data will be automatically loaded, but if you are using script tags and browser globals, you must load a separate file.

Example using Node/Webpack:

```js
import { Calendar } from '@fullcalendar/core';
import momentTimezonePlugin from '@fullcalendar/moment-timezone';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ momentTimezonePlugin ],
  timeZone: 'Europe/Moscow'
});
...
```

If you are using `<script>` tags and browser globals, you must ensure the original non-plugin `moment.js` and `moment-timezone.js` dist files [from the Moment site](https://momentjs.com/) is included on your page first.
