---
title: endParam
---

A parameter of this name will be sent to each JSON event feed. It describes the exclusive end of the interval being fetched.

<div class='spec' markdown='1'>
String, *default*: `'end'`
</div>

The actual value of this parameter will be an [ISO8601 date](https://en.wikipedia.org/wiki/ISO_8601) string.

In line with the discussion about the [Event object](event-parsing), it is important to stress that the value of this `endParam` date is **exclusive** just like elsewhere in the FullCalendar API.
