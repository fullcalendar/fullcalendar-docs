---
title: eventRenderWait
since_version: 3.1
---

The amount of milliseconds to wait after an operation, before rendering events.

<div class='spec' markdown='1'>
Integer / `null` (turned off, the default)
</div>

When this value is specified as a millisecond number value, the calendar will begin to wait after any operation that might result in an event rerendering, such as [addEvent](Calendar-addEvent). After this time has passed, the calendar will render all events together. This reduces the number of rerenders, for performance reasons.

This setting is experimental. It is turned off by default.
