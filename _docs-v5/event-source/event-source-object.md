---
title: Event Source Object
type: guide
excerpt_separator: <!--more-->
---

An "event source" is anything that provides FullCalendar with data about events.<!--more--> It can be a [simple array](events-array), an [event-generating function](events-function) that you define, a [URL to a json feed](events-json-feed), or a [Google Calendar feed](google-calendar).

Event Objects can have "options" associated with them. However, before you can start specifying options, you must write an Event Object in its *extended form*. It must be a traditional JavaScript object with properties. Here are the extended forms for each type of Event Source:

Array of events:

```js
{
  events: [
    {
      title: 'Event1',
      start: '2011-04-04'
    },
    {
      title: 'Event2',
      start: '2011-05-05'
    }
    // etc...
  ],
  color: 'yellow',   // an option!
  textColor: 'black' // an option!
}
```

Event-generating function:

```js
{
  events: function(info, successCallback, failureCallback) {
    // ...
  },
  color: 'yellow',   // an option!
  textColor: 'black' // an option!
}
```

JSON feed:

```js
{
  url: '/myfeed.php',
  color: 'yellow',   // an option!
  textColor: 'black' // an option!
}
```

Google Calendar feed:

```js
{
  googleCalendarId: 'abcd1234@group.calendar.google.com',
  color: 'yellow',   // an option!
  textColor: 'black' // an option!
}
```

## Event Source Options

<table id='options'>
<tr>
<th>
id
</th>
<td>
Optional. Useful for <a href='Calendar-getEventSourceById'>getEventSourceById</a>.
</td>
</tr>
<tr>
<th>url</th>
<td markdown='1'>
If a [JSON feed](events-json-feed) or [iCalendar feed](icalendar), the specified URL
</td>
</tr>
<tr>
<th>format</th>
<td markdown='1'>
Specify `'json'` for a [JSON feed](events-json-feed) (the default) or `'icalendar'` for an [iCalendar feed](icalendar)
</td>
</tr>
<tr>
<th>
color
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>color</code> for this source.
</td>
</tr>
<tr>
<th>
backgroundColor
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>backgroundColor</code> for this source.
</td>
</tr>
<tr>
<th>
borderColor
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>borderColor</code> for this source.
</td>
</tr>
<tr>
<th>
textColor
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>textColor</code> for this source.
</td>
</tr>
<tr>
<th>
className
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>className</code> for this source.
</td>
</tr>
<tr>
<th>
editable
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>editable</code> for this source.
</td>
</tr>
<tr>
<th>
startEditable
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>startEditable</code> for this source.
</td>
</tr>
<tr>
<th>
durationEditable
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>durationEditable</code> for this source.
</td>
</tr>
<tr>
<th>
resourceEditable
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>resourceEditable</code> for this source.
</td>
</tr>
<tr>
<th>
display
</th>
<td>
Sets the <a href='eventDisplay'>eventDisplay</a> setting for every event in this source.
</td>
</tr>
<tr>
<th>
overlap
</th>
<td>
Sets the <a href='eventOverlap'>eventOverlap</a> setting for every event in this source. Does not accept a function.
</td>
</tr>
<tr>
<th>
constraint
</th>
<td>
Sets the <a href='eventConstraint'>eventConstraint</a> setting for every event in this source.
</td>
</tr>
<tr>
<th>
allow
</th>
<td>
Sets the <a href='eventAllow'>eventAllow</a> setting for every event in this source.
</td>
</tr>
<tr>
<th>
defaultAllDay
</th>
<td>
Sets the <a href='defaultAllDay'>defaultAllDay</a> option, but only for this source.
</td>
</tr>
<tr>
<th>
success
</th>
<td markdown='1'>
Sets the <a href='eventSourceSuccess'>eventSourceSuccess</a> callback, but only for this source.
</td>
</tr>
<tr>
<th>
failure
</th>
<td markdown='1'>
Sets the <a href='eventSourceFailure'>eventSourceFailure</a> callback, but only for this source.
</td>
</tr>
<tr>
<th>
eventDataTransform
</th>
<td>
Sets the <a href='eventDataTransform'>eventDataTransform</a> callback, but only for this source.
</td>
</tr>
</table>

**For JSON feeds**, [there are additional options you can set](events-json-feed#options).


## After Parsing

The above object is what you specify to initially define an event source, but if you want to access it and manipulate it dynamically afterwards, you'll be dealing with a different type of object. This type of object is emitted from methods like [getEventSources](Calendar-getEventSources) and [getEventSourceById](Calendar-getEventSourceById). It has the following properties and methods:

<table>

<tr>
<th>id</th>
<td markdown='1'>
The specified ID
</td>
</tr>

<tr>
<th>url</th>
<td markdown='1'>
If a [JSON feed](events-json-feed) or [iCalendar feed](icalendar), the specified URL
</td>
</tr>

<tr>
<th>format</th>
<td markdown='1'>
`'json'` for a [JSON feed](events-json-feed), `'icalendar'` for an [iCalendar feed](icalendar), or `null` for anything else.
</td>
</tr>

<tr>
<th>refetch()</th>
<td markdown='1'>
Refetches event data for this event source. [More information](EventSource-refetch).
</td>
</tr>

<tr>
<th>remove()</th>
<td markdown='1'>
Removes this source from the calendar [More information](EventSource-remove).
</td>
</tr>

</table>
