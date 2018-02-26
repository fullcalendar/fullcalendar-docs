---
title: eventResourceField
---

Normally [Event Objects](event-object) are linked to resources via the event's `resourceId` field. However, if you wish to use another field name, you may specify it with `eventResourceField`.

<div class='removed-notice'>
This setting has been deprecated. Use <a href='eventDataTransform'>eventDataTransform</a> instead.
</div>

```js
$('#calendar').fullCalendar({
  resources: [
    {
      id: 'a',
      title: 'Room A'
    }
  ]
  eventResourceField: 'roomId',
  events: [
    {
      id: '1',
      roomId: 'a',
      title: 'Meeting',
      start: '2015-02-14'
    }
  ]
});
```
