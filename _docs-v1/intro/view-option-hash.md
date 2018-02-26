---
title: View Option Hash
type: guide
since_version: 1.4
---

A way to specify options on a per-view basis.

This is specified as an object with key/value pairings. The key tells FullCalendar that the specified option value should only be applied to certain views.

Currently, View Option Hashes only work for [dragOpacity](dragOpacity), [titleFormat](titleFormat), [columnFormat](columnFormat), and [timeFormat](timeFormat).

Here is how you target certain views:

```js
{
  month:      // month view
  week:       // basicWeek & agendaWeek views
  day:        // basicDay & agendaDay views

  agenda:     // agendaDay & agendaWeek views
  agendaDay:  // agendaDay view
  agendaWeek: // agendaWeek view

  basic:      // basicWeek & basicDay views
  basicWeek:  // basicWeek view
  basicDay:   // basicDay view

  '':         // (an empty string) when no other properties match
}
```

So for example, if you wanted to `dragOpacity` to be `.2` for month view, but `.5` for all other views, here is what your FullCalendar initialization code would look like:

```js
$('#calendar').fullCalendar({
  dragOpacity: {
    month: .2,
    ''   : .5
  }
});
```
