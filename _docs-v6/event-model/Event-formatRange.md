---
title: Event::formatRange
---

Formats an event's dates into a string.

<div class='spec' markdown='1'>
event.formatRange( *formatConfig* )
</div>

Accepts a [date formatter](date-formatting).

If the event doesn't have an `end`, then the `start` will be formatted alone.
