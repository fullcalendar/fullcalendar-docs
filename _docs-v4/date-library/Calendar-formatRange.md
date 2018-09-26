---
title: Calendar::formatRange
---

Formats two dates, a start and an end, into a string. A separator string, most likely a dash, will be intelligently inserted between the two dates. Inherits the time zone and locale settings of the calendar it's called on.

<div class='spec' markdown='1'>
calendar.formatDate( *start*, *end*, *settings* )
</div>

`start` and `end` can each be a [Date Object](date-object) or something that will [parse into a Date Object](date-parsing).

`settings` is an object that holds any of the [date format config](date-formatting) options. It also accepts the following additional properties:

- `separator` &mdash; what will be inserted between the two dates. a `' - '` by default
- `isExclusive` &mdash; if `true`, the given end date will be considered the *exclusive end* of the range, meaning date just before the `end` will be rendered instead. Useful if you need to format an exclusive-end whole-day range.

Example:

```js
import { formatDate } from 'fullcalendar'

let calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  locale: 'es'
})

let str = calendar.formatRange('2018-09-01', '2018-09-15', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  separator: ' to '
})

console.log(str) // "1 to 15 de septiembre de 2018"
```
