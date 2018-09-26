---
title: windowResize
type: callback
---

Triggered after the calendar's dimensions have been changed due to the browser window being resized.

<div class='spec' markdown='1'>
function( *view* ) { }
</div>

The calendar has automatically adapted to the new size when windowResize is triggered.

`view` is the current [View Object](view-object).

Within the callback function, `this` will be set to the calendar's main element.

Example usage of windowResize:

```js
var calendar = new Calendar(calendarEl, {
  windowResize: function(view) {
    alert('The calendar has adjusted to a window resize');
  }
});
```
