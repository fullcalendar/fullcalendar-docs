---
title: Event Parsing
---

When you give your calendar event data, whether it's through [an array](events-array), [a json feed](events-json-feed), or the [addEvent method](Calendar-addEvent), you specify the event as a plain JavaScript object with properties. This object then gets "parsed" into a proper [Event Object](event-object) that is then exposed in other parts of the API, like the [event render hooks](event-render-hooks) method.

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
  Boolean (`true` or `false`). Determines if the event is shown in the "all-day" section of the view, if applicable. Determines if time text is displayed in the event. If this value is not specified, it will be inferred by the `start` and `end` properties. See notes below.

  **Do not put quotes around this value**. That would make it a string, not a boolean.
  </td>
  </tr>

  <tr>
  <th>start</th>
  <td markdown='1'>
  Something [date-parseable](date-parsing). When your event begins. If your event is explicitly `allDay`, hour, minutes, seconds and milliseconds will be ignored.
  </td>
  </tr>

  <tr>
  <th>end</th>
  <td markdown='1'>
  Something [date-parseable](date-parsing). When your event ends. If your event is explicitly `allDay`, hour, minutes, seconds and milliseconds will be ignored. If omitted, your events will appear to have the default duration. See [defaultAllDayEventDuration](defaultAllDayEventDuration), [defaultTimedEventDuration](defaultTimedEventDuration), and [forceEventDuration](forceEventDuration) for more info.

  **Note: This value is exclusive.** For example, if you have an all-day event that has an `end` of `2018-09-03`, then it will span through `2018-09-02` and end before the start of `2018-09-03`.
  </td>
  </tr>

  <tr>
  <th>daysOfWeek</th>
  <td markdown='1'>
  Array. (For defining a [simple recurring event](recurring-events)). The days of the week this event repeats. An array of integers representing days e.g. `[0, 1]` for an event that repeats on Sundays and Mondays.
  </td>
  </tr>

  <tr>
  <th>startTime</th>
  <td markdown='1'>
  Something [duration-parseable](duration-object). (For defining a [simple recurring event](recurring-events)). The time of day the event starts.
  </td>
  </tr>

  <tr>
  <th>endTime</th>
  <td markdown='1'>
  Something [duration-parseable](duration-object). (For defining a [simple recurring event](recurring-events)). The time of day the event ends.
  </td>
  </tr>

  <tr>
  <th>startRecur</th>
  <td markdown='1'>
  Something [date-parseable](date-parsing). (For defining a [simple recurring event](recurring-events)). When recurrences of the event start.
  </td>
  </tr>

  <tr>
  <th>endRecur</th>
  <td markdown='1'>
  Something [date-parseable](date-parsing). (For defining a [simple recurring event](recurring-events)). When recurrences of the event end.
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
  String or Array. A single string like `'myclass'`, a space-separated string like `'myclass1 myclass2'`, or an array of strings like `[ 'myclass1', myclass2' ]`. Determines which HTML classNames will be attached to the rendered event.
  </td>
  </tr>

  <tr>
  <th>editable</th>
  <td markdown='1'>
  Boolean (`true` or `false`). Overrides the master [editable](editable) option for this single event.
  </td>
  </tr>

  <tr>
  <th>startEditable</th>
  <td markdown='1'>
  Boolean (`true` or `false`). Overrides the master [eventStartEditable](eventStartEditable) option for this single event.
  </td>
  </tr>

  <tr>
  <th>durationEditable</th>
  <td markdown='1'>
  Boolean (`true` or `false`). Overrides the master [eventDurationEditable](eventDurationEditable) option for this single event.
  </td>
  </tr>

  <tr>
  <th>resourceEditable</th>
  <td markdown='1'>
  Boolean (`true` or `false`). Overrides the master [eventResourceEditable](eventResourceEditable) option for this single event.
  Requires one of the [resource plugins](premium).
  </td>
  </tr>

  <tr>
  <th>resourceId</th>
  <td markdown='1'>
  String. The string ID of a [Resource](resource-object).
  See [Associating Events with Resources](resources-and-events).
  Requires one of the [resource plugins](premium).
  </td>
  </tr>

  <tr>
  <th>resourceIds</th>
  <td markdown='1'>
  Array. An array of string IDs of [Resources](resource-object).
  See [Associating Events with Resources](resources-and-events).
  Requires one of the [resource plugins](premium).
  </td>
  </tr>

  <tr>
  <th>display</th>
  <td markdown='1'>
  Allows alternate rendering of the event, like background events. Can be `'auto'` (the default), `'block'`, `'list-item'`, `'background'`, `'inverse-background'`, or `'none'`. See [eventDisplay](eventDisplay).
  </td>
  </tr>

  <tr>
  <th>overlap</th>
  <td markdown='1'>
  Boolean (`true` or `false`). Overrides the master [eventOverlap](eventOverlap) option for this single event. If `false`, prevents this event from being dragged/resized over other events. Also prevents other events from being dragged/resized over this event.
  </td>
  </tr>

  <tr>
  <th>constraint</th>
  <td markdown='1'>
  A **groupId** belonging to other events, `"businessHours"`, or an object. Overrides the master [eventConstraint](eventConstraint) option for this single event.
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
  <th>
  <div style='white-space:nowrap'>rrule</div> duration </th>
  <td markdown='1'>
  these are [RRule recurring](rrule-plugin) event properties
  </td>
  </tr>

  <tr>
  <th>
    <div style='white-space:nowrap'>daysOfWeek</div>
    <div style='white-space:nowrap'>startTime</div>
    <div style='white-space:nowrap'>endTime</div>
    <div style='white-space:nowrap'>startRecur</div>
    <div style='white-space:nowrap'>endRecur</div>
    <div style='white-space:nowrap'>groupId</div>    
  </th>
  <td markdown='1'>
  these are [Recurring](recurring-events) event properties
  </td>
  </tr>

  <tr>
  <th>extendedProps</th>
  <td markdown='1'>
  Object. A plain object with any miscellaneous properties. It will be directly transferred to the `extendedProps` hash in each [Event Object](event-object). Often, these props are useful in [event render hooks](event-render-hooks).
  </td>
  </tr>

  <tr>
  <th><em>any other property!</em></th>
  <td markdown='1'>
  Every other non-standard property will be transferred over to the `extendedProps` hash in the [Event Object](event-object). However, it is recommended to explicitly define these in the `extendedProps` hash.
  </td>
  </tr>

</table>

## Events and Dates

There are 3 date-related properties of events to highlight:

### `allDay`

If an event object does not explicitly define an `allDay` value, FullCalendar will do its best to guess whether it is an all-day event or not. It will look at the `start` and `end` values of your supplied event, and if, for example, both are ISO8601 strings in the format `2018-09-01` without time parts, it will infer `allDay` as `true`. If the time parts of only `start` or `end` is provided, FullCalendar assumes that `allDay` is `false`.

### `start`

As defined above, this is the date when an event begins. In other words, the event starts from this given date value and continues onwards. This value specifies the **inclusive** start of the event. In effect, if `allDay` is not explicitly set to `true` and `start` is `2018-09-01`, internally, this is recognised as `2018-09-01T00:00:00`.

### `end`

As defined above, this is the date when an event finishes. In other words, the event continues up to this cut-off point in time. This value specifies the **exclusive** end of the event. Since the event is not expected to continue beyond the given `end` date it may also be described as non-inclusive.

Again, if `allDay` is not explicitly set to `true` and `end` is `2018-09-07`, internally this is recognised as `2018-09-07T00:00:00`. It is that point in time, at the final part of `2018-09-06` and beginning of `2018-09-07`. Also, this may be interpreted as `2018-09-06T23:59:59` or `2018-09-07T00:00:00`.

FullCalendar handles these dates in the same way as discussed in the [iCalendar Specifications (RFC 5545)](https://icalendar.org/iCalendar-RFC-5545/3-6-1-event-component.html) and [Google Calendar API](https://developers.google.com/calendar/v3/reference/events/list) documentation.

In summary, `start` date is **inclusive** while `end` date is **exclusive**. In order to avoid inconsistencies, applications should consider passing [ISO8601 strings](https://en.wikipedia.org/wiki/ISO_8601) with datetime values for `start` and `end` dates to FullCalendar, if `allDay` is `false`.
