---
title: businessHours-per-resource
is_premium: true
excerpt_separator: <!--more-->
---

The [main `businessHours` settings](businessHours) can be applied more granularly to individual resources via the `businessHours` property on the [Resource Object](resource-object)<!--more--> like so:

```js
$('#calendar').fullCalendar({
  defaultView: 'timelineWeek',
  resources: [
    {
      id: 'a',
      title: 'Resource A',
      businessHours: {
        start: '10:00',
        end: '18:00'
      }
    },
    {
      id: 'b',
      title: 'Resource B',
      businessHours: {
        start: '11:00',
        end: '17:00'
      }
    }
  ]
});
```
