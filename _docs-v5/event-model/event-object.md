---
title: Event Object
type: guide
---

A JavaScript object that FullCalendar uses to store information about a calendar event. It is exposed in various places of the API such as [getEventById](Calendar-getEventById) and provides methods for dynamic manipulation. It was originally [parsed from a plain object](event-parsing).

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
String. A unique identifier of an event. Useful for [getEventById](Calendar-getEventById).
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
Boolean (`true` or `false`). Determines if the event is shown in the "all-day" section of relevant views. In addition, if `true` the time text is not displayed with the event.
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
[Date object](date-object) that obeys the current [timeZone](timeZone). When an event begins.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
[Date object](date-object) that obeys the current [timeZone](timeZone). When an event ends. It could be `null` if an end wasn't specified.

**Note: This value is exclusive**. For example, an event with the `end` of `2018-09-03` will appear to span through `2018-09-02` but end before the start of `2018-09-03`. See how events are [are parsed from a plain object](event-parsing) for further details.

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
An array of strings like `[ 'myclass1', myclass2' ]`. Determines which HTML classNames will be attached to the rendered event.
</td>
</tr>

<tr>
<th>editable</th>
<td markdown='1'>
Boolean (`true` or `false`) or `null`. The value overriding the [editable](editable) setting for this specific event.
</td>
</tr>

<tr>
<th>startEditable</th>
<td markdown='1'>
Boolean (`true` or `false`) or `null`. The value overriding the [eventStartEditable](eventStartEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>durationEditable</th>
<td markdown='1'>
Boolean (`true` or `false`) or `null`. The value overriding the [eventDurationEditable](eventDurationEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>resourceEditable</th>
<td markdown='1'>
Boolean (`true` or `false`) or `null`. The value overriding the [eventResourceEditable](eventResourceEditable) setting for this specific event.
</td>
</tr>

<tr>
<th>display</th>
<td markdown='1'>
The rendering type of this event. Can be `'auto'`, `'block'`, `'list-item'`, `'background'`, `'inverse-background'`, or `'none'`. See [eventDisplay](eventDisplay).
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

</table>

All properties are read-only. If you want to modify them, use the various methods of the Event object, such as [setProp](Event-setProp), [setExtendedProp](Event-setExtendedProp), [setDates](Event-setDates), etc.

The expected values for `allDay`, `start` and `end` have been discussed in detail on the subject of [parsing events](event-parsing). It is vital to understand how the `end` date is **exclusive** throughout the FullCalendar API.


## Non-standard Fields

In addition to the fields above, you may also include your own non-standard fields in each Event object. FullCalendar will not modify or delete these fields. For example, developers often include a `description` field for use in callbacks like [event render hooks](event-render-hooks). Any non-standard properites are moved into the `extendedProps` hash during [event parsing](event-parsing).

```js
var calendar = new Calendar(calendarEl, {
  events: [
    {
      title: 'BCH237',
      start: '2019-08-12T10:30:00',
      end: '2019-08-12T11:30:00',
      extendedProps: {
        department: 'BioChemistry'
      },
      description: 'Lecture'
    }
    // more events ...
  ],
  eventDidMount: function(info) {
    console.log(info.event.extendedProps);
    // {description: "Lecture", department: "BioChemistry"}
  }

});
```
