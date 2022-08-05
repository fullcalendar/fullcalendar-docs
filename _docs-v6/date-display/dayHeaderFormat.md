---
title: dayHeaderFormat
---

Determines the text that will be displayed on the calendar's column headings.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*:

```js
// like 'Mon', for month view
{ weekday: 'short' }

// like 'Mon 9/7', for week views
{ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }

// like 'Monday', for day views
{ weekday: 'long' }
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single string alone will set the value for all views.

If you need programmatic control, use the [day-header render hooks](day-header-render-hooks) instead.
