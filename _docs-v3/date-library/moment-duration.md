---
title: Duration Object
description: A Duration object represents a length of time.
type: guide
---

Durations objects are used to represent:

- lengths of time (ex: [defaultTimedEventDuration](defaultTimedEventDuration))
- differences between two dates (ex: [eventDrop](eventDrop))
- times that are not bound to a particular day (ex: [scrollTime](scrollTime))


This functionality is provided by [MomentJS](https://momentjs.com/), a third-party open-source library.

[**See the MomentJS Duration docs &raquo;**](https://momentjs.com/docs/#/durations/)

In FullCalendar's API, most options that accept Durations also conveniently accept anything that the `moment.duration` constructor accepts, including the following:

```js
"23:59"       // hours/minutes
"23:59:59"    // hours/minutes/seconds
"1.23:59:59"  // days/hours/minutes/seconds
{ days:1, hours:23, minutes:59 } // an object
```
