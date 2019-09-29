---
title: Recurring Events
---

A recurring event is an event that happens more than once, on a repeating schedule. When a repeating event is turned into individual event instances with individual dates, it is called "expanding" the event.

In the most low-tech case, you can expand your recurring events on your server side before sending them down to a [json feed event source](events-json-feed). However, if you'd like to expand your recurring events on the client-side, there are two different techniques you can use.


## Simple Recurrence

FullCalendar offers recurring event functionality out-of-the-box, but with a limited featureset. It allows for the following types of recurrence:

- **every day**, within an optional date range
- **weekly**, within an optional date range

To define recurrence, you specify additional properties when you [define your events object](event-parsing):

<table>

<tr>
<th>daysOfWeek</th>
<td markdown='1'>
The days of the week this event repeats. An array of integers. Each integer represents a day-of-week, with `0` signifying Sunday, `1` signifying Monday, etc. For example, `[ 2, 4 ]` means an event repeats every Tuesday and Thursday. If omitted, the event is assumed to repeat **every day**.
</td>
</tr>

<tr>
<th>startTime</th>
<td markdown='1'>
The time of day this event starts. Something that will [parse into a Duration](duration-object). If defined, `allDay:false` will be assumed. Otherwise, `allDay:true` is assumed.
</td>
</tr>

<tr>
<th>endTime</th>
<td markdown='1'>
The time of day this event ends. Something that will [parse into a Duration](duration-object). If omitted, your events will appear to have the default duration. See [defaultAllDayEventDuration](defaultAllDayEventDuration), [defaultTimedEventDuration](defaultTimedEventDuration), and [forceEventDuration](forceEventDuration) for more info.
</td>
</tr>

<tr>
<th>startRecur</th>
<td markdown='1'>
When recurrences of this event start. Something that will [parse into a Date](date-parsing). If not specified, recurrences will extend infinitely into the past.
</td>
</tr>

<tr>
<th>endRecur</th>
<td markdown='1'>
When recurrences of this event end. Something that will [parse into a Date](date-parsing). If not specified, recurrences will extend infinitely into the future.

**Note: This value is exclusive.** Just like every other end-date in the API. For all-day recurring events, make the `endRecur` the day **after** you want your last recurrence.
</td>
</tr>

<tr>
<th>groupId</th>
<td markdown='1'>
String. An identifier for events to be handled together as a group for certain actions e.g. when dragging or resizing events with the `interaction` plugin.
</td>
</tr>

</table>

If any of these properties are specified, the event is assumed to be recurring and there is no need to specify the normal `start` and `end` properties.

For a multi-day all-day event, specify the `duration` property (a [duration input](duration-object)).


## Recurrence with the RRule Plugin

If the built-in recurrence functionality is too limited for you, you can leverage the [rrule library](https://github.com/jakubroztocil/rrule). FullCalendar has a connector plugin to make it easy to work with.

[Read about the RRule plugin &raquo;](rrule-plugin)
