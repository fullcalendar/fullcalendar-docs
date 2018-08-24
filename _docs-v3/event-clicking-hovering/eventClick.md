---
title: eventClick
type: callback
---

Triggered when the user clicks an event.

<div class='spec' markdown='1'>
function( *event*, *jsEvent*, *view* ) { }
</div>

`event` is an [Event Object](event-object) that holds the event's information (date, title, etc).

`jsEvent` holds the jQuery event with low-level information such as click coordinates.

`view` holds the current [View Object](view-object).

Within the callback function, `this` is set to the event's `<div>` element.

Here is an example demonstrating all these variables:

```js
new Calendar({
  eventClick: function(calEvent, jsEvent, view) {

    alert('Event: ' + calEvent.title);
    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    alert('View: ' + view.name);

    // change the border color just for fun
    $(this).css('border-color', 'red');

  }
});
```

eventClick will *not* be triggered for [background events](background-events).

[View a simple demo](eventClick-demo) of eventClick.


## Return Value

Normally, if the [Event Object](event-object) has its `url` property set, a click on the event will cause the browser to visit the event's url (in the same window/tab). Returning `false` from within your function will prevent this from happening.

Often, developers want an event's `url` to open in a different tab or a popup window. The following example shows how to do this:

```js
new Calendar({
  events: [
    {
      title: 'My Event',
      start: '2010-01-01',
      url: 'http://google.com/'
    }
    // other events here
  ],
  eventClick: function(event) {
    if (event.url) {
      window.open(event.url);
      return false;
    }
  }
});
```

The `window.open` function can take [many other options](http://www.w3schools.com/jsref/met_win_open.asp).
