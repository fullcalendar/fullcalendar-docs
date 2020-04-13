---
title: businessHours-per-resource
is_premium: true
excerpt_separator: <!--more-->
---

The main [`businessHours`](businessHours) settings can be applied more granularly to individual resources via the `businessHours` property on the [Resource input](resource-parsing)<!--more--> like so:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timelineWeek',
  resources: [
    {
      id: 'a',
      title: 'Resource A',
      businessHours: {
        startTime: '10:00',
        endTime: '18:00'
      }
    },
    {
      id: 'b',
      title: 'Resource B',
      businessHours: {
        startTime: '11:00',
        endTime: '17:00',
        daysOfWeek: [ 1, 3, 5 ] // Mon,Wed,Fri
      }
    }
  ]
});
```
