---
title: Date Objects
excerpt_separator: <!--more-->
---

FullCalendar's API exposes Date objects in many places such as [dateClick](dateClick) or a [View object's](view-object) `activeStart`/`activeEnd`.<!--more--> These Date objects are simply **native JavaScript Date objects!** Nothing fancy. For a comprehensive rundown of how to work with a Date object, [see MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

It's important to always remember that a Date object is merely a wrapper around a millisecond time since the Unix Epoch (Jan 1, 1970 UTC). The accessor methods on the Date object *interpret* this millisecond time differently for different time zones, but the underlying millisecond time will remain the same.

When your calendar's [timeZone](timeZone) is set to `'local'`, the local-flavored methods will be useful to you:

- `.getFullYear()`
- `.getMonth()`
- `.getDate()`
- `.getHours()`
- `.getMinutes()`
- `.getSeconds()`
- `.getMilliseconds()`
- `.toString()`

When your calendar's [timeZone](timeZone) is set to `'UTC'`, the UTC-flavored methods will be useful to you:

- `.getUTCFullYear()`
- `.getUTCMonth()`
- `.getUTCDate()`
- `.getUTCHours()`
- `.getUTCMinutes()`
- `.getUTCSeconds()`
- `.getUTCMilliseconds()`
- `.toUTCString()`

Also, when your calendar is set to a named time zone and there is no time-zone plugin present (aka "UTC-coercion"), all Dates throughout the API will be in UTC and thus the above UTC-flavored methods will be useful as well.


## Date Formatting

FullCalendar offers utilities to help you format these Date objects into strings:

- [formatDate](formatDate)
- [formatRange](formatRange)
- [Calendar::formatDate](Calendar-formatDate) (aware of current calendar's time zone)
- [Calendar::formatIso](Calendar-formatIso) (aware of current calendar's time zone)
- [Calendar::formatRange](Calendar-formatRange) (aware of current calendar's time zone)


## Date Manipulation

Operations such as computing how many days are between two dates, advancing a date 2 years into the future, and finding the first day of the week are all examples of date "manipulation" or date math. FullCalendar does not expose any date manipulation utilities to you. The only utilities you have available by default are the native Date object's methods, which are limited.

However, you can use a third party library to do manipulation. FullCalendar offset connector plugins for these:

- [Moment Plugin](moment-plugin) (for the [Moment](https://momentjs.com/) library)
- [Luxon 2 & 3 Plugin](luxon) (for the [Luxon](https://moment.github.io/luxon/) library)
- [Luxon 1 Plugin](luxon1)

What about [date-fns](https://date-fns.org/), another popular date-manipulation library? In its current state (version 1.x at the time of writing), it only operates on a date's *local* values, not its UTC values or values interpreted by other time zones. Thus, it will only work propertly if your timeZone is set to `'local'`, but for anything else, it will choke. See [this ticket in date-fns's issue tracker](https://github.com/date-fns/date-fns/issues/376) for more info.
