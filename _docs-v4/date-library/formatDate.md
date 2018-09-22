---
title: formatDate
---

A utility function that formats a date into a string.

<div class='spec' markdown='1'>
FullCalendar.formatDate( *date*, *settings* )
</div>

`date` can be a [Date Object](date-object) or something that will [parse into a Date Object](date-parsing).

`settings` is an object that holds any of the [date format config](date-formatting) options. It also accepts the following additional properties:

- `locale` &mdash; the name of a [locale](locale) like `'es'`
- `timeZone` &mdash; the name of a [time zone](timeZone). Either `'local'`, `'UTC'`, or a named time zone
- `timeZoneImpl` &mdash; for named time zones. See the main [timeZoneImpl](timeZoneImpl) setting for more info.

Example:

```js
import { formatDate } from 'fullcalendar'

let str = formatDate('2018-09-01', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  timeZoneName: 'short',
  timeZone: 'UTC',
  locale: 'es'
})

console.log(str) // "1 de septiembre de 2018 0:00 UTC"
```
