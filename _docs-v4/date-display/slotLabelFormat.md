---
title: slotLabelFormat
---

Determines the text that will be displayed within a time slot.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*:

```js
{
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
}
```
</div>

The default English value will produce times that look like `5pm` and `5:30pm`.


## Timeline View

For [Timeline view](timeline-view), one string can be given for creating a single header row, or an array of strings can be given to create multiple tiers of header rows.

```js
slotLabelFormat: [
  { month: 'long', year: 'numeric' }, // top level of text
  { weekday: 'short' } // lower level of text
]
```

Only available with the [Scheduler plugin]({{ site.baseurl }}/premium).
