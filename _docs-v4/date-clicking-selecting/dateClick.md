---
title: dateClick
type: callback
---

Triggered when the user clicks on a date or a time.

<div class='spec' markdown='1'>
function( dateClickInfo ) { }
</div>

In order for this callback to fire, you must load the `interaction` plugin. If you are using [an ES6 build system](initialize-es6):

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin ],
  ...
  dateClick: function(info) {
    alert('Clicked on: ' + info.dateStr);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('Current view: ' + info.view.type);
    // change the day's background color just for fun
    info.dayEl.style.backgroundColor = 'red';
  }
});
...
```

Alternatively, you can use [script tags and browser globals](initialize-globals):

```html
<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/interaction/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'interaction' ],
  ...
});
...
</script>
```

`dateClickInfo` is a plain object with the following properties:

<table>

<tr>
<th>date</th>
<td markdown='1'>
a [Date](date-object) for the clicked day/time.
</td>
</tr>

<tr>
<th>dateStr</th>
<td markdown='1'>
An ISO8601 string representation of the date. Will have a time zone offset according to the calendar's [timeZone](timeZone) like `2018-09-01T12:30:00-05:00`. If clicked on an all-day cell, won't have a time part nor a time zone part, like `2018-09-01`.
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
`true` or `false` whether the click happened on an all-day cell.
</td>
</tr>

<tr>
<th>dayEl</th>
<td markdown='1'>
An HTML element that represents the whole-day that was clicked on.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

<tr>
<th>resource</th>
<td markdown='1'>
If the current view is a resource-view, the [Resource Object](resource-object) that owns this date. Must be using the [Scheduler plugin](scheduler).
</td>
</tr>

</table>


## List View

The dateClick trigger is **not** fired when the user clicks a day heading in list view.


## Resource Views

For resource views, this callback will receive an additional [Resource Object](resource-object) parameter. Example:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {

  dateClick: function(info) {
    alert('Date: ' + info.dateStr);
    alert('Resource ID: ' + info.resource.id);
  }

});
```

This is only available with the [Scheduler plugin]({{ site.baseurl }}/purchase).

[See a demo of dateClick with resources](date-clicking-selecting-resource-demo).
