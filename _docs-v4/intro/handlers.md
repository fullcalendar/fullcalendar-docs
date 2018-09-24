---
title: Handlers
description: How to attach handlers to your calendar, which execute when other things happen.
---

Handlers (sometimes called "callbacks") are sort of like options, but they are *functions* that get *called* whenever something special happens. In the following example, an alert box will appear whenever the user clicks on a day:

```js
var calendar = new Calendar(calendarEl, {
  dateClick: function() {
    alert('a day has been clicked!');
  }
});
```

## Dynamically adding Handlers

You can attach handlers after the calendar initializes using the `on` and `off` [methods](methods).

The below example dynamically binds a [dateClick](dateClick) handler.

```js
calendar.on('dateClick', function(info) {
  console.log('clicked on ' + info.dateStr);
});
```

The API for on / off are very similar to [Backbone's on / off](http://backbonejs.org/#Events).
