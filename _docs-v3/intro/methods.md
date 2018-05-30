---
title: Methods
excerpt_separator: <!--more-->
---

Methods provide ways to manipulate the calendar from JavaScript code.<!--more--> A method operates on the jQuery object of a calendar that has already been initialized, using the familiar `fullCalendar` command, but in a completely different way:

```js
calendar.next();
```

This will call the [next](next) method and will force to the calendar to move to the next month/week/day.

If you want to avoid using jQuery each time you call a method, you can do something like this:

```js
// a convenient utility for getting the calendar object.
// you can call methods on the calendar object directly.
calendar.getCalendar();

calendar.next();
```
