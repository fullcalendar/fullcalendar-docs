---
title: columnHeaderHtml
since_version: 3.8.0
---

Programmatically generates HTML that will be injected on the calendar's column headings.

<div class='spec' markdown='1'>
function( *date* ) -> *string*
</div>

This function will will receive a [date](date-object) object that represents a single column's date and must return an HTML string to be injected.

Example:

```js
var calendar = new Calendar(calendarEl, {
  columnHeaderHtml: function(mom) {
    if (mom.weekday() === 5) {
      return '<b>Friday!</b>';
    } else {
      return '<i>' + mom.format('LLL') + '</i>';
    }
  }
});
```
