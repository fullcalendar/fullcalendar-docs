---
title: eventDataTransform
type: callback
---

Transforms custom data into a standard [Event Object](event-object).

<div class='spec' markdown='1'>
function( *eventData* ) {}
</div>

This hook allows you to receive arbitrary event data from a JSON feed or any other [Event Source](event-source-object) and transform it into the type of data FullCalendar accepts. This let's you easily accept alternative data formats without having to write a completely custom [events function](events-function).

This function is called once per received event. `eventData` is the event data that has been receieved. The function must return a new object in the [Event Object](event-object) format.
