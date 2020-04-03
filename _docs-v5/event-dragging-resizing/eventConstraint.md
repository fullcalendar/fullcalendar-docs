---
title: eventConstraint
---

Limits event dragging and resizing to certain windows of time.

<div class='spec' markdown='1'>
a groupId for [Events](event-object), `"businessHours"`, object
</div>

If a `groupId` is given, events that are being dragged or resized must be fully contained by at least one of the [events](event-object) linked to by the given `groupId`.

If `"businessHours"` is given, events being dragged or resized must be fully contained within the week's business hours (Monday-Friday 9am-5pm by default). A custom [businessHours](businessHours) value will be respected.

A custom time-window, an object identical to what [businessHours](businessHours) accepts, can also be given:

```js
{
  startTime: '10:00', // a start time (10am in this example)
  endTime: '18:00', // an end time (6pm in this example)

  daysOfWeek: [ 1, 2, 3, 4 ]
  // days of week. an array of zero-based day of week integers (0=Sunday)
  // (Monday-Thursday in this example)
}
```

A specific period of time with concrete start/end dates can also be given, similar to what an [Event Object](event-object) accepts:

```js
{
  startTime: '2014-12-01T10:00:00',
  endTime: '2014-12-05T22:00:00'
}
```

For more granular control over constraining event dates/times, use the `constraint` property on an [Event Source](event-source-object) or the `constraint` property on an [Event Object](event-object). [View a demo](event-constraint-demo) that does this.

If you are using a resource view and would like to constrain an event to cerain resources, [read this article](eventConstraint).


## Resources

The `resourceId` and `resourceIds` (an array) properties can be applied to force an event to stay within specific *resources*:

```js
var calendar = new Calendar(calendarEl, {
  defaultView: 'timelineWeek',
  resources: [
    // resource data...
  ]
  events: [
    {
      title: 'my event',
      startTime: '2016-01-01',
      resourceId: 'b' // start out in resource 'b'
      constraint: {
        resourceIds: [ 'a', 'b', 'c' ] // constrain dragging to these
      }
    }
  ]
});
```

Only available with the [Scheduler plugin]({{ site.baseurl }}/purchase).
