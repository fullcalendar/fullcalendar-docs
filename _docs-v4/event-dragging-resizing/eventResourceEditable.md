---
title: eventResourceEditable
---

Determines whether the user can drag events between resources.

<div class='spec' markdown='1'>
Boolean
</div>

The default value is inherited from the master [editable](editable) flag, which is `false` by default.

You must enable the `interaction` plugin before using this setting. [See code samples on the `editable` article &raquo;](editable)

A variation of this property called `resourceEditable` can be set on an [Event Object](event-object) for more granular control:

```js
var calendar = new Calendar(calendarEl, {
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
var calendar = new Calendar(calendarEl, {
  defaultView: 'timeline',
  editable: false, // don't allow event dragging
  eventResourceEditable: true // except for between resources

  // resource and event data...
});
```
