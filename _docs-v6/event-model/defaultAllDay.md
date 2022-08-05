---
title: defaultAllDay
---

Determines the default value for each [Event Object](event-object)'s `allDay` property when it is unspecified.

<div class='spec' markdown='1'>
Boolean, *default*: `undefined`
</div>

By default, `defaultAllDay` is not set. As a result, any Event Objects that do not specify an `allDay` property will be subject the guessing behavior mentioned in the [Event Object](event-object) article.

Set this option to `true` or `false` to make it affect Event Objects without an `allDay` property.
