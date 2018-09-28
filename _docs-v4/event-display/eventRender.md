---
title: eventRender
type: callback
---

Triggered while an event is being rendered. A hook for modifying its DOM.

<div class='spec' markdown='1'>
function( *info* ) { }
</div>

`info` is a plain object that contains the following properties:

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
The HTML element that is being rendered. It has already been populated with the correct time/title text.
</td>
</tr>

<tr>
<th>isMirror</th>
<td markdown='1'>
`true` if the element being rendered is a "mirror" from a user drag, resize, or selection (see [selectMirror](selectMirror)). `false` otherwise.
</td>
</tr>

<tr>
<th>isStart</th>
<td markdown='1'>
`true` if the element being rendered is the starting slice of the event's range. `false` otherwise.
</td>
</tr>

<tr>
<th>isEnd</th>
<td markdown='1'>
`true` if the element being rendered is the ending slice of the event's range. `false` otherwise.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

The `eventRender` callback function can modify `element`. For example, it can change its appearance via Element's [style object](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style).

The function can also return a brand new element that will be used for rendering instead. For all-day [background events](background-events), you must be sure to return a `<td>`.

The function can also return `false` to completely cancel the rendering of the event.

`eventRender` is a great way to attach effects to event elements, such as a [Tooltip.js](https://popper.js.org/tooltip-examples.html) tooltip effect:

```js
var calendar = new Calendar(calendarEl, {
  events: [
    {
      title: 'My Event',
      start: '2010-01-01',
      description: 'This is a cool event'
    }
    // more events here
  ],
  eventRender: function(info) {
    var tooltip = new Tooltip(info.el, {
      title: info.event.extendedProps.description,
      placement: 'top',
      trigger: 'hover',
      container: 'body'
    });
  }
});
```

Note that `description` is a non-standard [Event Object](event-object) field, which is allowed.

[See a live demo with Tooltip.js &raquo;](event-tooltip-demo)
