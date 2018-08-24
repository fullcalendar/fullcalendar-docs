---
title: columnHeaderHtml
since_version: 3.8.0
---

Programmatically generates HTML that will be injected on the calendar's column headings.

<div class='spec' markdown='1'>
function( *moment* ) -> *string*
</div>

This function will will receive a [moment](moment) object that represents a single column's date and must return an HTML string to be injected.

Example:

```js
$('#calendar').fullCalendar({
  columnHeaderHtml: function(mom) {
    if (mom.weekday() === 5) {
      return '<b>Friday!</b>';
    } else {
      return '<i>' + mom.format('LLL') + '</i>';
    }
  }
});
```
