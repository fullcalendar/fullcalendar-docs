---
title: columnHeaderText
since_version: 3.8.0
---

Programmatically generates text that will be displayed on the calendar's column headings.

<div class='spec' markdown='1'>
function( *date* ) -> *string*
</div>

This function will will receive a [date](date-object) object that represents a single column's date and must return a string to be displayed. The text will be escaped before being inserted into the DOM. You do not need to worry about escaping HTML entities.

Example:

```js
var calendar = new Calendar(calendarEl, {
  columnHeaderText: function(date) {
    if (date.getDay() === 5) {
      return 'Friday!';
    } else {
      return mom.format('LLL');
    }
  }
});
```

If you are simply stringifying a date with a formatting string, using [columnHeaderFormat](columnHeaderFormat) is more elegant.

If you need to generate HTML, use [columnHeaderHtml](columnHeaderHtml) instead.
