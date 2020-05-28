---
title: windowResize
type: callback
---

Triggered after the calendar's dimensions have been changed due to the browser window being resized.

<div class='spec' markdown='1'>
function( arg: { view } )
</div>

The calendar has automatically adapted to the new size when windowResize is triggered.

A single object argument is given. It contains a property called `view` that holds the current [View Object](view-object).

Within the callback function, `this` will be set to the calendar's main element.

Example usage of windowResize:

```js
var calendar = new Calendar(calendarEl, {
  windowResize: function(arg) {
    alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
  }
});
```
