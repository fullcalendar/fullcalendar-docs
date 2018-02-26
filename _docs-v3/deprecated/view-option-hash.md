---
title: View Option Hash
type: guide
---

A way to specify options on a per-view basis.

<div class='removed-notice'>
View Option Hashes have been removed in v3.
Please use <a href='View-Specific-Options'>View-Specific Options</a> instead.
</div>

This is specified as an object with key/value pairings. The key tells FullCalendar that the specified option value should only be applied to certain views.

View Option Hashes work for options like [dragOpacity](dragOpacity), [titleFormat](titleFormat), [columnFormat](columnFormat), [timeFormat](timeFormat), and many more.

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

  'default':  // when no other properties match
}
```

So for example, if you wanted to `dragOpacity` to be `.2` for month view, but `.5` for all other views, here is what your FullCalendar initialization code would look like:

```js
$('#calendar').fullCalendar({
  dragOpacity: {
    month: .2,
    'default': .5
  }
});
```
