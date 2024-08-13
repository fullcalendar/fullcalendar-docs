---
title: eventResourceEditable
---

Determines whether the user can drag events between resources.

<div class='spec' markdown='1'>
Boolean
</div>

The default value is inherited from the master [editable](editable) flag, which is `false` by default.

A variation of this property called `resourceEditable` can be set on an [Event Object](event-object) for more granular control:

```js
$('#calendar').fullCalendar({
  defaultView: 'timelineWeek',
  resources: [
    // resource data...
  ],
  editable: true, // event resources editable by default
  events: [
    // event data...
    {
      title: 'my event',
      start: '2016-01-01',
      resourceEditable: false // resource not editable for this event
    }
  ]
});
```

A similar technique can be used on [Event Source Objects](event-source-object).


## Preventing date changes, but allowing resource changes

If you'd like to allow the user to drag-n-drop an event to a different resource, you can set the master `editable` flag to `false`, but override it specifically for event resources:

```js
$('#calendar').fullCalendar({
  defaultView: 'timeline',
  editable: false, // don't allow event dragging
  eventResourceEditable: true // except for between resources

  // resource and event data...
});
```
