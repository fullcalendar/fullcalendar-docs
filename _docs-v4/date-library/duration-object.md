---
title: Duration Object
---

A duration is a way to express an amount of time that has passed. It can also be used to express a time-of-day, in other words, the amount of time that has passed since the start of the day.

FullCalendar's API accepts durations at various points, such as [slotDuration](slotDuration). It can be specified in one of three ways:

- **an object** with any of the following keys: `year`, `years`, `month`, `months`, `day`, `days`, `minute`, `minutes`, `second`, `seconds`, `millisecond`, `milliseconds`, `ms`.
- **a string** in the format `hh:mm:ss.sss`, `hh:mm:sss` or `hh:mm`. For example, `'05:00'` signifies 5 hours.
- a total number of milliseconds

The way in which FullCalendar accepts durations is rather flexible. It can be in a number of different formats with a number of different object-keys. However, when the API *emits* a Duration object, it is always a plain JavaScript object with just a few keys:

- `years` (integer)
- `months` (integer)
- `days` (integer)
- `milliseconds` (integer)

It's important to note that each of these values does not *include* the units of the other properties. If the duration is 6 months, the year value will be `0`, not `0.5`. And vice-versa, if the duration is 1 years, the month value will be `0`, not `12`.

Also, if you want to want to get the hour/minute/second values of the duration, you must do division on the `millisecond` property.

An example that shows both Duration parsing and outputting:

```js
var calendar = new Calendar(calendarEl, {
  slotDuration: '02:00' // 2 hours
})

var slotDuration = calendar.getOption('slotDuration')
console.log(slotDuration)

// will output...
// {
//   years: 0,
//   months: 0,
//   days: 0,
//   milliseconds: 7200000
// }
```


## Durations with Plugins

The Duration objects that FullCalendar emits are very simple objects that don't offer a lot of utilities to work with. If you need more power, feed one of these duration objects into a third-party library. There are already connectors written for other libs:

- [Moment Plugin](moment-plugins) (for the [Moment](https://momentjs.com/) library)
- [Luxon Plugin](luxon-plugin) (for the [Luxon](https://moment.github.io/luxon/) library)

An example with the Moment plugin:

```js
import { toDuration } from '@fullcalendar/moment'

var calendar = new Calendar(calendarEl, {
  slotDuration: '02:00' // 2 hours
})

var slotDuration = calendar.getOption('slotDuration')
var dur = toDuration(slotDuration) // convert to moment's type of duration

console.log(dur.humanize())
// will output "2 hours"
```
