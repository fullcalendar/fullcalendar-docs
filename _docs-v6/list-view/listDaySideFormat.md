---
title: listDaySideFormat
---

A [Date Formatter](date-formatting) that affects the text on the right side of the day headings in list view.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), `false`, *defaults*:

```js
// no text, for 'list' view
false

// no text, for 'listDay' view
false

// like 'January 1, 2016', for 'listWeek' view
{ month: 'long', day: 'numeric', year: 'numeric' }

// like 'Monday', for 'listMonth' view
{ weekday: 'long' }

// like 'Monday', for 'listYear' view
{ weekday: 'long' }
```
</div>

<img src='listDaySideFormat.png' width='468' height='259' style='box-shadow: 0 1px 4px rgba(0,0,0,.3)' alt='displaying alt date strings' />

If `false` is specified, no text is displayed.
