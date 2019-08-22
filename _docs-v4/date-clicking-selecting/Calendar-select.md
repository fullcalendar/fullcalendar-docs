---
title: Calendar::select
type: method
---

A method for programmatically selecting a period of time. It accepts two different signatures:

```js
calendar.select( *start*, [ *end* ] )
```

The first method accepts individual `start` and `end` parameters, with the `end` being optional.


```js
calendar.select( { *start*, *end* , *allDay* , *resourceId* } )
```

The second method accepts an object with `start`, `end`, `allDay` and `resourceId` keys. Only the `start` key is required.

The values of `start` and `end` are [parsable dates](date-parsing). In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date parameter (or key) is **exclusive**. In practice, this might mean that if you want to your last full-day selection to be Thursday, then specify Friday.

If a [resource plugin](premium) is installed, the `resourceId` key can be the ID of the [Resource object](resource-object) you would like to select. If the current view supports resources but this value is not specified, the given range is selected across all resources.

