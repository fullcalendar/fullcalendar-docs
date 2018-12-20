---
title: resourceRender
type: callback
---

A hook for manipulating a resource's DOM.

<div class='spec' markdown='1'>
function( renderInfo )
</div>

The `renderInfo` argument is an object with the following properties:

<table>

<tr>
<th>resource</th>
<td markdown='1'>
The [Resource Object](resource-object) being rendered.
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The DOM element that represents this resource. Most likely a `<td>` that wraps the resource's title.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View](view-object).
</td>
</tr>

</table>

Example:

```js
var calendar = new Calendar(calendarEl, {

  resourceRender: function(renderInfo) {
    renderInfo.el.style.backgroundColor = 'blue';
  }

});
```

See an example of resourceRender [with timeline view](timeline-resourceRender-demo) and [with vertical resource view](vertical-resource-resourceRender-demo).

This callback will not allow manipulating of *event* elements, as they will not yet have been drawn at the time of invocation. Use [eventRender](eventRender) for that.
