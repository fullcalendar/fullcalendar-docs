---
title: eventDataTransform
type: callback
---

A hook for transforming custom data into a standard [Event object](event-parsing).

<div class='spec' markdown='1'>
function( *eventData* ) {}
</div>

This hook allows you to receive arbitrary event data from a JSON feed or any other [Event Source](event-source-object) and transform it into the type of data FullCalendar accepts. This let's you easily accept alternative data formats without having to write a completely custom [events function](events-function).

This function is called once per received event. `eventData` is the event data that has been receieved. The function must return a [parsable Event object](event-parsing) or `false`, which will discard the event.

This function is **not** called for the [addEvent](Calendar-addEvent) method.

If you want to receive a non-standard root object from your event sources that is *not* an array, return a value from your [eventSourceSuccess](eventSourceSuccess) callback.

In case you're using a [ES6 build](initialize-es6) it's advisable to cast the event input to [`any` basic type](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) before it's passed to FullCalendar object for parsing otherwise if you're using arbitrary types you risk to have type mismatched warnings during compilation:

```js
...
let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
  events: any[]
});
...
```
