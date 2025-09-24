---
title: listDayFormat
---

A [Date Formatter](date-formatting) that affects the text on the left side of the day headings in list view.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), `false`, *defaults*:

```js
// like 'January 1, 2016', for 'list' view
{ month: 'long', day: 'numeric', year: 'numeric' }

// like 'Monday', for 'listDay' view
{ weekday: 'long' }

// like 'Monday', for 'listWeek' view
{ weekday: 'long' }

// no text, for 'listMonth' view
false

// no text, for 'listYear' view
false
```
</div>

<img src='listDayFormat.png' width='468' height='259' style='box-shadow: 0 1px 4px rgba(0,0,0,.3)' alt='customized list-view date strings' />

If `false` is specified, no text is displayed.
