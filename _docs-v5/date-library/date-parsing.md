---
title: Date Parsing
excerpt_separator: <!--more-->
---

FullCalendar's API accepts date information in many places, such as when you set the [initialDate](initialDate) or define an [event's](event-parsing) `start`/`end`.<!--more--> FullCalendar accepts a number of formats for these dates:


## ISO8601 strings

[ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) are the most common way to express dates. They are compact, readable, and offer the ability to specify time zone information, known as the "UTC offset". Some examples of ISO8601 dates:

- `2018-06-01T12:30:00-05:00` &mdash; has a `-05:00` UTC offset
- `2018-06-01T12:30:00Z` &mdash; `Z` signifies `00:00` UTC offset
- `2018-06-01T12:30:00` &mdash; no UTC offset specified. parsing will depend on the [timeZone](timeZone)
- `2018-06-01` &mdash; no UTC offset specified. parsing will depend on the [timeZone](timeZone)

Example:

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'local',
  initialDate: '2018-06-01' // will be parsed as local
})
```


## Millisecond Time

You can supply a millisecond time since the Unix epoch (Jan 1, 1970 UTC). Please specify this in milliseconds, **NOT** seconds. Seconds are not supported.

```js
var calendar = new Calendar(calendarEl, {
  initialDate: 1537302134028 // Tue Sep 18 2018 16:22:14 GMT-0400
})
```


## Native JavaScript Dates

You can specify a native JavaScript Date object. The native Date constructor accepts local values, so it is best used with the local time zone:

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'local',
  initialDate: new Date(2018, 8, 1)
})
```

If you want to specify UTC values, use this technique:

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  initialDate: new Date(Date.UTC(2018, 8, 1))
})
```

Please note that it is **not** possible to serialize Date objects into **JSON**, thus it is not possible to use Date objects in a [JSON feed event source](events-json-feed).
