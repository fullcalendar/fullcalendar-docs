---
title: getView
type: method
since_version: 1.4.2
---

Returns the [View Object](view-object) for the current view.

<div class='spec' markdown='1'>
.fullCalendar( 'getView' ) -> [View Object](view-object)
</div>

This is useful if you want to get information about the calendar’s title or start/end dates.

Example Usage:

```js
var view = $('#calendar').fullCalendar('getView');
alert("The view's title is " + view.title);
```
