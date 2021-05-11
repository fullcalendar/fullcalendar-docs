---
title: eventMaxStack
since_version: 5.7.0
---

For **timeline** view, the maximum number of events that stack top-to-bottom. For **timeGrid** view, the maximum number of events that stack left-to-right.

<div class='spec' markdown='1'>
Number or `null`, *default*: `null`
</div>

For **dayGrid** view, see [dayMaxEventRows](dayMaxEventRows) and [dayMaxEvents](dayMaxEvents).

A value of `null` means there is no maximum and all events are displayed.

When the number of events exceeds `eventMaxStack`, a rectangle is drawn that represents the hidden events. It is rendered via the [more-link render hooks](more-link-render-hooks) and executes [moreLinkClick](moreLinkClick) when clicked. The default click action is to show a popover with the hidden events.

Example of a more-link in timeline view:

--screenshot--

Example of a more-link in timeGrid view:

--screenshot--
