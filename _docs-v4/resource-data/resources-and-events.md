---
title: Associating Events with Resources
description: How to specify which resources your events are assigned to.
---

An [Event Object](event-object) becomes associated with a resource when its `resourceId` property matches one of the [Resource Object](resource-object)'s `id` fields:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    {
      id: 'a',
      title: 'Room A'
    }
  ],
  events: [
    {
      id: '1',
      resourceId: 'a',
      title: 'Meeting',
      start: '2015-02-14'
    }
  ]
});
```

## Multiple Resources

It is also possible to associate an event with *multiple* resources using the `resourceIds` property, which is an array:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    {
      id: 'a',
      title: 'Room A'
    },
    {
      id: 'b',
      title: 'Room B'
    }
  ],
  events: [
    {
      id: '1',
      resourceIds: ['a', 'b'],
      title: 'Meeting',
      start: '2015-02-14'
    }
  ]
});
```
