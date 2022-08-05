---
title: defaultTimedEventDuration
---

A fallback duration for timed [Event Objects](event-object) without a specified `end` value.

<div class='spec' markdown='1'>
[Duration](duration-object), *default*: `'01:00'` (1 hour)
</div>

If an event does not have an `end` specified, it will appear to be this duration when rendered.

The actual `end` of the event will remain unset unless [forceEventDuration](forceEventDuration) has been set to `true`.

This setting only affects events with `allDay` equal to `false`. For all-day events, use [defaultAllDayEventDuration](defaultAllDayEventDuration).
