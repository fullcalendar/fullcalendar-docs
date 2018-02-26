---
title: Handlers
description: How to attach handlers to your calendar, which execute when other things happen.
---

Handlers (sometimes called "callbacks") are sort of like options, but they are *functions* that get *called* whenever something special happens. In the following example, an alert box will appear whenever the user clicks on a day:

```js
$('#calendar').fullCalendar({
  dayClick: function() {
    alert('a day has been clicked!');
  }
});
```

## Dynamically adding Handlers

You can attach handlers after the calendar initializes using the `on` and `off` [methods](methods). This functionality has been available since version 2.4.0.

The below example dynamically binds a [dayClick](dayClick) handler.

```js
// a convenient utility for getting the calendar object.
// you can call methods on the calendar object directly.
var calendar = $('#calendar').fullCalendar('getCalendar');

calendar.on('dayClick', function(date, jsEvent, view) {
  console.log('clicked on ' + date.format());
});
```

The API for on / off are very similar to [Backbone's on / off](http://backbonejs.org/#Events).
