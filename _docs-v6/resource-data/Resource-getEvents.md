---
title: Resource::getEvents
type: method
---

Retrieves a list of [Event Objects](event-object) that are associated with the given resource.

<div class='spec' markdown='1'>
resource.getEvents()
</div>

Example:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    { id: 'a', title: 'Resource A' },
    { id: 'b', title: 'Resource B' }
  ],
  events: [
    { title: 'Event 1', start: '2020-06-01', resourceId: 'a' },
    { title: 'Event 2', start: '2020-06-01', resourceId: 'a' },
    { title: 'Event 3', start: '2020-06-01', resourceId: 'b' }
  ]
});

var resourceA = calendar.getResourceById('a');
var events = resourceA.getEvents();
var eventTitles = events.map(function(event) { return event.title });

console.log(eventTitles); // [ 'Event 1', 'Event 2' ]
```
