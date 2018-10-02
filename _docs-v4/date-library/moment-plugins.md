---
title: Moment Plugins
---

[Moment JS](https://momentjs.com/) is a popular library for parsing, formatting, and manipulating dates. There is also a separate but related project called [Moment Timezone](https://momentjs.com/timezone/) which adds time zone functionality to all moment objects. FullCalendar has a connector for each of these libraries.


## fullcalendar-moment

The fullcalendar-moment plugin provides the following functionality:

- Lets you use moment formatting strings for all [date-formatting](date-formatting) settings
- Lets you convert native [Date objects](date-object) emitted from the API into moment objects that match the calendar's time zone and locale
- Lets you convert [Duration](duration-object) objects emitted from the API into moment durations objects

Example using formatting strings:

```js
import { Calendar } from 'fullcalendar';
import 'fullcalendar/plugins/moment'; // need this! or include <script> tag instead

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    titleFormat: 'MMMM D, YYYY' // you can now use format strings
  });

  calendar.render();
});
```

If you are using `<script>` tags and browser globals, you must ensure the original non-plugin `moment.js` dist file [from the Moment site](https://momentjs.com/) is included on your page first.

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
...
var calendar = new Calendar(calendarEl, {
  titleFormat: '{MMMM {D}}, YYYY'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
});
```

Example using date/duration conversion:

```js
import { Calendar } from 'fullcalendar';
import { toMoment, toDuration } from 'fullcalendar/plugins/moment';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {

    dateClick: function(arg) {
      var m = toMoment(arg.date, calendar); // calendar is required
      console.log('clicked on ' + m.format());
    },

    eventDrop: function(arg) {
      var d = toDuration(arg.delta);
      console.log('event moved ' + d.humanize());
    }
  });

  calendar.render();
});
```

If you are using `<script>` tags and browser globals, you can access `FullCalendar.Moment.toMoment` and `FullCalendar.Moment.toDuration`.


<h2 id='fullcalendar-moment-timezone'>fullcalendar-moment-timezone</h2>

The fullcalendar-moment-timezone plugin, which is separate from the basic fullcalendar-moment plugin, gives your calendar support for arbitrary named time zones. It provides a "time zone implementation" for the [timeZoneImpl](timeZoneImpl) setting. For more information, see [named time zone section in the timeZone article](timeZone#named-time-zones).

In addition to loading the plugin, you must also load moment-timezone's timezone data. You should consult the [moment-timezone docs on this matter](https://momentjs.com/timezone/docs/#/use-it/), but long story short, if you are using Node/Webpack, all time zone data will be automatically loaded, but if you are using script tags and browser globals, you must load a separate file.

Example using Node/Webpack:

```js
import { Calendar } from 'fullcalendar';
import 'fullcalendar/plugins/moment-timezone'; // need this! or include <script> tag instead

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    timeZone: 'Europe/Moscow',
    timeZoneImpl: 'moment-timezone'
  });

  calendar.render();
});
```

If you are using `<script>` tags and browser globals, you must ensure the original non-plugin `moment.js` and `moment-timezone.js` dist files [from the Moment site](https://momentjs.com/) is included on your page first.
