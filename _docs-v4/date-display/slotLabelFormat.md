---
title: slotLabelFormat
since_version: 2.4.0
---

Determines the text that will be displayed within a time slot.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*: `'h(:mm)a'`
</div>

The default value depends on the current [locale](locale).

The default English value will produce times that look like "5pm" and "5:30pm".


## Timeline View

For [Timeline view](timeline-view), one string can be given for creating a single header row, or an array of strings can be given to create multiple tiers of header rows.

```js
slotLabelFormat: [
  'MMMM YYYY', // top level of text
  'ddd'        // lower level of text
]
```

Only available with the [Scheduler plugin]({{ site.baseurl }}/scheduler).
