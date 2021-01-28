---
title: eventAllow
---

Exact programmatic control over where an event can be dropped.

<div class='spec' markdown='1'>
function(dropInfo, draggedEvent)
</div>

After it has been determined that the [eventOverlap](eventOverlap) and [eventConstraint](eventConstraint) settings will allow the user to drop an event at a given position on the calendar, the `eventAllow` callback will be called. It will be called for every new potential droppable position as the user is dragging.

If specified, it must return either `true` or `false` as to whether the calendar will allow the given event (`draggedEvent`) to be dropped at the given location (`dropInfo`).

```js
eventAllow: function(dropInfo, draggedEvent) {
  if (draggedEvent.id === '999') {
    return dropInfo.start < new Date(2016, 0, 1); // a boolean
  }
  else {
    return true;
  }
}
```

The `dropInfo` object has the following properties:

<table>

<tr>
<th>allDay</th>
<td markdown='1'>
`true` or `false` whether the event was dropped on one of the all-day cells.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
[Date](date-object). The end of where the draggable event was dropped.
</td>
</tr>

<tr>
<th>endStr</th>
<td markdown='1'>
The [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) representation of the end of where the draggable event was dropped.
</td>
</tr>

<tr>
<th>resource</th>
<td markdown='1'>
If the current view is a resource-view, the [Resource Object](resource-object) the element was dropped on. This requires one of the [resource plugins]({{ site.baseurl }}/pricing).
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
[Date](date-object). The beginning of where the draggable event was dropped.
</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
The [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) representation of the start of where the draggable event was dropped.
</td>
</tr>

</table>

In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date property is **exclusive**.


## Resources

In addition to receiving information about which date the user is attempting to drop the event upon, it will also receive information about the *resource*:

```js
eventAllow: function(dropInfo, draggedEvent) {
  return /^a/.test(dropInfo.resource.id); // starts with 'a' ?
}
```

Only available with the [Scheduler plugin]({{ site.baseurl }}/pricing).
