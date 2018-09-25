---
title: Calendar::batchRendering
---

A way to group operations that cause rerenders.

<div class='spec' markdown='1'>
calendar.batchRendering( *func* )
</div>

Many methods throughout the API cause rerendering of some sort, such as [changeView](Calendar-changeView) and [addEvent](Calendar-addEvent). If these method calls happen in quick succession, the browser will do the work of multiple rerenders but the user will only experience the final render state, which is inefficient.

To delay rerender until the last operation, you can leverage the `batchRendering` method:

```js
var calendar = new Calendar(calendarEl, {
  defaultView: 'agendaWeek'
});

calendar.batchRendering(function() {
  calendar.changeView('month');
  calendar.addEvent({ title: 'new event', start: '2018-09-01' });
});
```

As you can see, you must pass in a function that encapsulates all of your operations.

An alternate, more implicit technique to achieve the same thing is to use [rerenderDelay](rerenderDelay).
