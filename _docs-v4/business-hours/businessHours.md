---
title: businessHours
---

Emphasizes certain time slots on the calendar. By default, Monday-Friday, 9am-5pm.

<div class='spec' markdown='1'>
boolean / object. *default*: `false`
</div>

If `true`, the default business hours will be emphasized ([view live demo](businessHours-demo)). If `false` (the default), there will be no emphasis.

An object may be given to render business hours with fine-grain control over the days/hours. The object may have any of the following properties:

```js
businessHours: {
  // days of week. an array of zero-based day of week integers (0=Sunday)
  daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday

  startTime: '10:00', // a start time (10am in this example)
  endTime: '18:00', // an end time (6pm in this example)
}
```

You may also break your business hour declaration into parts for additional control:

```js
businessHours: [ // specify an array instead
  {
    daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
    startTime: '08:00', // 8am
    endTime: '18:00' // 6pm
  },
  {
    daysOfWeek: [ 4, 5 ], // Thursday, Friday
    startTime: '10:00', // 10am
    endTime: '16:00' // 4pm
  }
]
```

If you are using one of the resource views from the [premium plugins](premium), you may specify business hours on a per-resource basis. See [Resource parsing](resource-parsing) docs for more information.

More information on specifying times can be found in the [Duration](duration-object) article.
