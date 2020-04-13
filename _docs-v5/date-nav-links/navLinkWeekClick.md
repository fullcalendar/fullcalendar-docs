---
title: navLinkWeekClick
type: callback
---

Determines what happens upon a [week-number](weekNumbers) nav-link click.

<div class='spec' markdown='1'>
view name (string), function
</div>

By default, the user is taken to the a the first week-view that appears in the [headerToolbar](headerToolbar).

A string argument can be provided that navigates the user to a specific view.

Also, a function argument can be provided that executes arbitrary code:

```js
var calendar = new Calendar(calendarEl, {
  navLinks: true,
  navLinkWeekClick: function(weekStart, jsEvent) {
    console.log('week start', weekStart.format()); // weekStart is a moment
    console.log('coords', jsEvent.pageX, jsEvent.pageY);
  }
});
```

When a custom function is specified, the user will not automatically navigate to any view.
