---
title: rerenderDelay
---

The amount of milliseconds to wait before rerendering anything on a calendar.

<div class='spec' markdown='1'>
Integer / `null` (turned off, the default)
</div>

When this value is specified as a millisecond number value, the calendar will begin to wait after any operation that might result in rerendering. The rerendering could be a result of any action, such as a changing of the current view or an [addEvent](Calendar-addEvent) call. After this time has passed, the calendar will rerender what it needs to all-at-once. This can reduce the number of rerenders, for performance reasons.
