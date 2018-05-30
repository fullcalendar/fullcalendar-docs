---
title: render
type: method
---

Immediately forces the calendar to render and/or readjusts its size.

<div class='spec' markdown='1'>
.render()
</div>

This method is useful in the scenario where a tab setup might hide/show a calendar. Call this method whenever the tabs are shown. Here is an example with the [jQuery UI tab plugin](http://jqueryui.com/demos/tabs/):

```js
$('#my-tabs').tabs({
  activate: function(event, ui) {
    calendar.render();
  }
});
```

Notice that this example calls `render` whenever *any* tab is shown, not just the tab that the calendar is within. This is okay, because FullCalendar is smart enough to only render calendars that are visible to the user.
