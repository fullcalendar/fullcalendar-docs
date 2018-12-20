---
title: Event Parsing
---

When you give your calendar event data, whether it's through [an array](events-array), [a json feed](events-json-feed), or the [addEvent method](Calendar-addEvent), you specify the event as a plan JavaScript object with properties. This object then gets "parsed" into a proper [Event Object](event-object) that is then exposed in other parts of the API, like the [eventRender](eventRender) method.

This article describes all the properties you may supply in your plain, pre-parsed object. To demonstrate the simplest case:

```js
var calendar = new Calendar(calendarEl, {
  events: [
    { // this object will be "parsed" into an Event Object
      title: 'The Title', // a property!
      start: '2018-09-01', // a property!
      end: '2018-09-02' // a property! ** see important note below about 'end' **
    }
  ]
})
```

Here are all the available properties, **all of which are optional**:

<table>

<tr>
<th>id</th>
<td markdown='1'>
String or Integer. Will uniquely identify your event. Useful for [getEventById](Calendar-getEventById).
</td>
</tr>

<tr>
<th>groupId</th>
<td markdown='1'>
String or Integer. Events that share a `groupId` will be dragged and resized together automatically.
</td>
</tr>

<tr>
<th>allDay</th>
<td markdown='1'>
Boolean (`true` or `false`). Determines if the event is shown in the "all-day" section of the view, if applicable. Determines if time text is displayed in the event. If this value is not specified, it will be inferred by the `start`/`end`. See notes below.

**Do not put quotes around this value**. That would make it a string, not a boolean.
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
Something [date-parseable](date-parsing). When your event begins. If your event is explicitly `allDay`, hour/minutes/seconds/ms will be ignored.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
Something [date-parseable](date-parsing). When your event ends. If your event is explicitly `allDay`, hour/minutes/seconds/ms will be ignored. If omitted, your events will appear to have the default duration. See [defaultAllDayEventDuration](defaultAllDayEventDuration), [defaultTimedEventDuration](defaultTimedEventDuration), and [forceEventDuration](forceEventDuration) for more info.

**This value is exclusive! I repeat, this value is exclusive!!!**
If you have an all-day event that has an `end` of `2018-09-03`, then it will appear to span through the 2nd of the month, but will end before the start of the 3rd of the month.
</td>
</tr>

<tr>
<th>daysOfWeek</th>
<td markdown='1'>
For defining a [simple recurring event](recurring-events).
</td>
</tr>

<tr>
<th>startTime</th>
<td markdown='1'>
For defining a [simple recurring event](recurring-events).
</td>
</tr>

<tr>
<th>endTime</th>
<td markdown='1'>
For defining a [simple recurring event](recurring-events).
</td>
</tr>

<tr>
<th>startRecur</th>
<td markdown='1'>
For defining a [simple recurring event](recurring-events).
</td>
</tr>

<tr>
<th>endRecur</th>
<td markdown='1'>
For defining a [simple recurring event](recurring-events).
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
<th><div style='white-space:nowrap'>className or</div> classNames</th>
<td markdown='1'>
A single string like `'myclass'`, a space-separated string like `'myclass1 myclass2'`, or an array of strings like `[ 'myclass1', myclass2' ]`. Determines which HTML classNames will be attached to the rendered event.
</td>
</tr>

<tr>
<th>editable</th>
<td markdown='1'>
`true` or `false`. Overrides the master [editable](editable) option for this single event.
</td>
</tr>

<tr>
<th>startEditable</th>
<td markdown='1'>
`true` or `false`. Overrides the master [eventStartEditable](eventStartEditable) option for this single event.
</td>
</tr>

<tr>
<th>durationEditable</th>
<td markdown='1'>
`true` or `false`. Overrides the master [eventDurationEditable](eventDurationEditable) option for this single event.
</td>
</tr>

<tr>
<th>resourceEditable</th>
<td markdown='1'>
`true` or `false`. Overrides the master [eventResourceEditable](eventResourceEditable) option for this single event.
Requires the [Scheduler Plugin](scheduler).
</td>
</tr>

<tr>
<th>resourceId</th>
<td markdown='1'>
A string ID of a [Resource](resource-object).
See [Associating Events with Resources](resources-and-events).
Requires the [Scheduler Plugin](scheduler).
</td>
</tr>

<tr>
<th>resourceIds</th>
<td markdown='1'>
An array of string IDs of [Resources](resource-object).
See [Associating Events with Resources](resources-and-events).
Requires the [Scheduler Plugin](scheduler).
</td>
</tr>

<tr>
<th>rendering</th>
<td markdown='1'>
Allows alternate rendering of the event, like background events. Can be empty, `"background"`, or `"inverse-background"`
</td>
</tr>

<tr>
<th>overlap</th>
<td markdown='1'>
`true` or `false`. Overrides the master [eventOverlap](eventOverlap) option for this single event. If `false`, prevents this event from being dragged/resized over other events. Also prevents other events from being dragged/resized over this event.
</td>
</tr>

<tr>
<th>constraint</th>
<td markdown='1'>
a **groupId** belonging to other events, `"businessHours"`, or an object. Overrides the master [eventConstraint](eventConstraint) option for this single event.
</td>
</tr>

<tr>
<th>color</th>
<td markdown='1'>
String. An alias for specifying the **backgroundColor** and **borderColor** at the same time.
</td>
</tr>

<tr>
<th>backgroundColor</th>
<td markdown='1'>
Sets an event's background color just like the calendar-wide [eventBackgroundColor](eventBackgroundColor) option.
</td>
</tr>

<tr>
<th>borderColor</th>
<td markdown='1'>
Sets an event's border color just like the calendar-wide [eventBorderColor](eventBorderColor) option.
</td>
</tr>

<tr>
<th>textColor</th>
<td markdown='1'>
Sets an event's text color just like the calendar-wide [eventTextColor](eventTextColor) option.
</td>
</tr>

<tr>
<th>extendedProps</th>
<td markdown='1'>
A plain object of miscellaneous other properties you want to store. Will be directly transferred to the `extendedProps` hash in each [Event Object](event-object). It is often useful to use these props in a custom [eventRender callback](eventRender).
</td>
</tr>

<tr>
<th><em>any other prop!</em></th>
<td markdown='1'>
Every other non-standard prop will be transferred over to the `extendedProps` hash in the [Event Object](event-object). However, it is recommended to explicitly define these in the `extendedProps` hash.
</td>
</tr>

</table>


## Inferring `allDay`

If your event object does not explicitly define an `allDay` value, FullCalendar will do its best to guess. It will look at the `start` and `end` values of your supplied event, and if both are ISO8601 strings in the format `2018-09-01` without time parts, it will infer `allDay` as `true`.
