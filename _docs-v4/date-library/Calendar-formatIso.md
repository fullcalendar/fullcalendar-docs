---
title: Calendar::formatIso
---

Formats a date into an [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601). Outputs a UTC offset appropriate to the calendar it's called on.

<div class='spec' markdown='1'>
calendar.formatIso( *date*, [ *omitTime* = false ] )
</div>

`date` can be a [Date Object](date-object) or something that will [parse into a Date Object](date-parsing).

If `omitTime` is set to `true`, a string like `2019-09-01` will be produced. Otherwise, the time part will be included.

Example:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ],
    timeZone: 'local',
    locale: 'es'
  });

  var str = calendar.formatIso('2018-09-01');

  console.log(str); // "2018-09-01T00:00:00-05:00" when in America/New_York
});
```

If you simply need to output an ISO8601 string that is normalized to a `00:00` UTC offset, it is more efficient to use the native Date's [toISOString method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
