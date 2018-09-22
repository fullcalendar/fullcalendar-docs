---
title: Calendar::getDate
type: method
---

Returns a [Date](date-object) for the current date of the calendar.

<div class='spec' markdown='1'>
calendar.getDate() -> Date
</div>

For month view, it will always be sometime between the first and last day of the month. For week views, it will always be sometime between the first and last day of the week.

Example of displaying a calendar's current date when a button is clicked:

```js
$('#my-button').click(function() {
  var date = calendar.getDate();
  alert("The current date of the calendar is " + date.toISOString());
});
```
