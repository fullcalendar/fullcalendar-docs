---
title: selectOverlap
---

Determines whether the user is allowed to select periods of time that are occupied by events.

<div class='spec' markdown='1'>
boolean / function. *default*: `true`
</div>

When the [selectOverlap](selectOverlap) option is activated, and `false` is given, the user will not be allowed to select periods of time that intersect with events on the calendar. If `true` is given (the default), the user will be able to freely select any period of time.

If a function is given, the function will be called once for every time the user's selection intersects with an event. If the function returns `true`, the selection will be allowed. If `false`, the selection will not be allowed. Here is an example of allowing selections over [background events](background-events) but not allowing selections over any other types of events:

```js
var calendar = new Calendar(calendarEl, {
  events: [ /* event data here */ ]
  selectOverlap: function(event) {
    return event.rendering === 'background';
  }
});
```

The `selectOverlap` setting does not differentiate between [background events](background-events) or normal events. It treats both types of events the same unless you write custom logic in your callback function (like the code above).

If selecting time slots in one of the [TimeGrid views](timegrid-view), and there is an all-day event for that specific day, this will be considered an intersection, even though the events don't appear to visually overlap because the all-day slot is separate from the time slots.
