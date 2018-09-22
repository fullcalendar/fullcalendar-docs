---
title: columnHeaderFormat
since_version: 3.8.0
---

Determines the text that will be displayed on the calendar's column headings.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*:

```js
'ddd'     // like 'Mon', for month view
'ddd M/D' // like 'Mon 9/7', for week views
'dddd'    // like 'Monday', for day views
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single string alone will set the value for all views.

The default values will change based on the current [locale](locale).

If you need programmatic control, use [columnHeaderText](columnHeaderText) or [columnHeaderHtml](columnHeaderHtml) instead.
