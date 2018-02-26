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
  events: function(start, end, timezone, callback) {
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
Optional. Useful for <a href='getEventSourceById'>getEventSourceById</a>.
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
rendering
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>rendering</code> for this source.
</td>
</tr>
<tr>
<th>
overlap
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>overlap</code> for this source.
</td>
</tr>
<tr>
<th>
constraint
</th>
<td>
Sets every <a href='event-object'>Event Object's</a> <code>constraint</code> for this source.
</td>
</tr>
<tr>
<th>
allDayDefault
</th>
<td>
Sets the <a href='allDayDefault'>allDayDefault</a> option, but only for this source.
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
