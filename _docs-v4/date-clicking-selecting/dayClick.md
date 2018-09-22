---
title: dayClick
type: callback
---

Triggered when the user clicks on a date or a time.

<div class='spec' markdown='1'>
function( *date*, *jsEvent*, *view*, [ *resourceObj* ] ) { }
</div>

`date` holds a [Date](date-object) for the clicked day. If a slot in the agendaWeek or agendaDay views has been clicked, `date` will have the slot's time.

`jsEvent` holds the native JavaScript event with low-level information such as click coordinates.

`view` is set to the current [View Object](view-object).

Within the callback function, `this` is set to the `<td>` of the clicked day.

Here is an example that demonstrates all of these variables:

```js
var calendar = new Calendar(calendarEl, {
  dayClick: function(date, jsEvent, view) {

    alert('Clicked on: ' + date.format());

    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

    alert('Current view: ' + view.name);

    // change the day's background color just for fun
    $(this).css('background-color', 'red');

  }
});
```

## The `resourceObj` parameter

Since the introduction of the [Scheduler plugin](scheduler), this callback reports a [Resource Object](resource-object) parameter if the click happened on a resource. [More information](dayClick).


## List View

The dayClick trigger is **not** fired when the user clicks a day heading in list view.


## Resource Views

For resource views, this callback will receive an additional [Resource Object](resource-object) parameter. Example:

```js
var calendar = new Calendar(calendarEl, {
  dayClick: function(date, jsEvent, view, resourceObj) {

    alert('Date: ' + date.format());
    alert('Resource ID: ' + resourceObj.id);

  }
});
```

This is only available with the [Scheduler plugin]({{ site.baseurl }}/scheduler).

[See a demo of dayClick with resources](date-clicking-selecting-resource-demo).
