---
title: Event::getResources
type: method
---

Gets the [Resources](resource-object) associated with the given event.

<div class='spec' markdown='1'>
event.getResources()
</div>

Example:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    { id: 'a', title: 'Resource A' },
    { id: 'b', title: 'Resource B' }
  ],
  events: [
    { id: '1', title: 'Event 1', start: '2020-06-01', resourceId: 'a' }
  ]
});

var event = calendar.getEventById('1');
var resources = event.getResources();
var resourceIds = resources.map(function(resource) { return resource.id });

console.log(resourceIds); // [ 'a' ]
```

If the `resourceIds` property was used when specifying the event, `getResources` would return multiple resources.
