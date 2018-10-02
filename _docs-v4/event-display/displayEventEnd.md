---
title: displayEventEnd
---

Whether or not to display an event's end time.

<div class='spec' markdown='1'>
Boolean, *default*:

```js
false // for month and basicWeek views
true  // for agendaWeek, agendaDay, and basicDay
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single boolean alone will set the value for all views.

If an event does not have an end date/time, or [displayEventTime](displayEventTime) is `false`, it won't be displayed anyway, regardless of this setting.
