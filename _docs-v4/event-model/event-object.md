---
title: Event Object
type: guide
---

A standard JavaScript object that FullCalendar uses to store information about a calendar event. It is exposed in various places of the API such as [getEventById](Calendar-getEventById) and provides methods for dynamic manipulation. It was originally [parsed from a plain object](event-parsing).

```js
var calendar = new Calendar(calendarEl, {
  timeZone: 'UTC',
  events: [
    {
      id: 'a',
      title: 'my event',
      start: '2018-09-01'
    }
  ]
})

var event = calendar.getEventById('a') // an event object!
var start = event.start // a property (a Date object)
console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"
```

An event object has a number of properties and methods. **All properties are read-only** and you must use the methods to modify the properties. Here is a list of all properties that exist on an event object:

<table>

<tr>
<th>id</th>
<td markdown='1'>
String. Will uniquely identify your event. Leveraged by [getEventById](Calendar-getEventById).
</td>
</tr>

<tr>
<th>groupId</th>
<td markdown='1'>
String. Events that share a `groupId` will be dragged and resized together automatically.
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
`true` or `false`. If the event is shown in the "all-day" section of the view if applicable. If the time text is displayed in the event.
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
[Date object](date-object) that obeys the current [timeZone](timeZone). When your event begins.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
[Date object](date-object) that obeys the current [timeZone](timeZone). When your event ends. Could be `null` if you never specified an end.

**This value is exclusive! I repeat, this value is exclusive!!!**
An event with the `end` of `2018-09-03` will appear to span through the 2nd of the month, but will end before the start of the 3rd of the month.
</td>
</tr>

<tr>
<th>title</th>
<td markdown='1'>
String. The text that will appear on an event.
</td>
</tr>

<tr>
<th>url</th>
<td markdown='1'>
String. A URL that will be visited when this event is clicked by the user. For more information on controlling this behavior, see the [eventClick](eventClick) callback.
</td>
</tr>

<tr>
<th>classNames</th>
<td markdown='1'>
Array of className strings like `[ 'myclass1', myclass2' ]`. Determines which HTML classNames will be attached to the rendered event.
</td>
</tr>

<tr>
<th>editable</th>
<td markdown='1'>
`true`, `false`, or `null`. The value overriding the [editable](editable) setting for this specific event.
</td>
</tr>

<tr>
<th>startEditable</th>
<td markdown='1'>
`true`, `false`, or `null`. The value overriding the [eventStartEditable](eventStartEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>durationEditable</th>
<td markdown='1'>
`true`, `false`, or `null`. The value overriding the [eventDurationEditable](eventDurationEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>resourceEditable</th>
<td markdown='1'>
`true`, `false`, or `null`. The value overriding the [eventResourceEditable](eventResourceEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>rendering</th>
<td markdown='1'>
The rendering type of this event. Can be empty (normal rendering), `"background"`, or `"inverse-background"`
</td>
</tr>

<tr>
<th>overlap</th>
<td markdown='1'>
The value overriding the [eventOverlap](eventOverlap) setting for this specific event. If `false`, prevents this event from being dragged/resized over other events. Also prevents other events from being dragged/resized over this event. Does not accept a function.
</td>
</tr>

<tr>
<th>constraint</th>
<td markdown='1'>
The [eventConstraint](eventConstraint) override for this specific event.
</td>
</tr>

<tr>
<th>backgroundColor</th>
<td markdown='1'>
The [eventBackgroundColor](eventBackgroundColor) override for this specific event.
</td>
</tr>

<tr>
<th>borderColor</th>
<td markdown='1'>
The [eventBorderColor](eventBorderColor) override for this specific event.
</td>
</tr>

<tr>
<th>textColor</th>
<td markdown='1'>
The [eventTextColor](eventTextColor) override for this specific event.
</td>
</tr>

<tr>
<th>extendedProps</th>
<td markdown='1'>
A plain object holding miscellaneous other properties specified during parsing. Receives properties in the explicitly given `extendedProps` hash as well as other non-standard properties.
</td>
</tr>

<tr>
<th>source</th>
<td markdown='1'>
A reference to the [Event Source](event-source-object) this event came from. If the event was added dynamically via [addEvent](Calendar-addEvent), and the `source` parameter was not specified, this value will be `null`.
</td>
</tr>

<tr>
<th>resourceId</th>
<td markdown='1'>
String. The `id` of a [Resource](resource-object) that this event is associated with. (**requires premium**)
</td>
</tr>

<tr>
<th>resourceIds</th>
<td markdown='1'>
Array of strings. When an event is associated with multiple resources, each element of this array is the `id` of a [Resource](resource-object). (**requires premium**)
</td>
</tr>

</table>

All properties are read-only. If you want to modify them, use the various methods of the Event object, such as [setProp](Event-setProp), [setExtendedProp](Event-setExtendedProp), [setDates](Event-setDates), etc.
