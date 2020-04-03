---
title: eventClick
type: callback
---

Triggered when the user clicks an event.

<div class='spec' markdown='1'>
function( *eventClickInfo* ) { }
</div>

`eventClickInfo` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
The associated [Event Object](event-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for this event.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

Unlike some other event-related interactions, `eventClick` does not require the `interaction` plugin.

Here is an example demonstrating some of these properties:

```js
var calendar = new Calendar(calendarEl, {

  eventClick: function(info) {
    alert('Event: ' + info.event.title);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('View: ' + info.view.type);

    // change the border color just for fun
    info.el.style.borderColor = 'red';
  }

});
```

[View a simple demo](eventClick-demo) of eventClick.


## Cancelling Default Behavior

Normally, if the [Event Object](event-object) has its `url` property set, a click on the event will cause the browser to visit the event's url (in the same window/tab). You can prevent this by calling `.preventDefault()` on the given native JS event.

Often, developers want an event's `url` to open in a different tab or a popup window. The following example shows how to do this:

```js
var calendar = new Calendar(calendarEl, {
  events: [
    {
      title: 'My Event',
      start: '2010-01-01',
      url: 'http://google.com/'
    }
    // other events here
  ],
  eventClick: function(info) {
    info.jsEvent.preventDefault(); // don't let the browser navigate

    if (info.event.url) {
      window.open(info.event.url);
    }
  }
});
```

The `window.open` function can take [many other options](http://www.w3schools.com/jsref/met_win_open.asp).
