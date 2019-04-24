---
title: eventAllow
since_version: 3.0
---

Exact programmatic control over where an event can be dropped.

<div class='spec' markdown='1'>
function(dropInfo, draggedEvent)
</div>

After it has been determined that the [eventOverlap](eventOverlap) and [eventConstraint](eventConstraint) settings will allow the user to drop an event at a given position on the calendar, the `eventAllow` callback will be called. It will be called for every new potential droppable position as the user is dragging.

If specified, it must return either `true` or `false` as to whether the calendar will allow the given event (`draggedEvent`) to be dropped at the given location (`dropInfo`).

```js
eventAllow: function(dropLocation, draggedEvent) {
  if (draggedEvent.id === '999') {
    return dropLocation.start.isAfter('2016-01-01'); // a boolean
  }
  else {
    return true;
  }
}
```

The `dropLocation` object will have the following properties:

- `start` (a [Moment](moment))
- `end` exclusive end date/time (a [Moment](moment))
- `resourceId` if you are using a [Resource View](scheduler)


## Resources

In addition to receiving information about which date the user is attempting to drop the event upon, it will also receive information about the *resource*:

```js
eventAllow: function(dropLocation, draggedEvent) {
  if (draggedEvent.id === '999') {
    return String(dropLocation.resourceId).indexOf('a') >= 0; // boolean
  }
  else {
    return true;
  }
}
```

Only available with the [Scheduler plugin]({{ site.baseurl }}/purchase).
