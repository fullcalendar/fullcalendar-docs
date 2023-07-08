---
title: Event Object
type: guide
excerpt_separator: <!--more-->
---

A plain JavaScript object that FullCalendar uses to store information about a calendar event.<!--more--> Here are its properties:


<!-- TODO: get this out of a table! -->

<table>
<!-- ------------------- -->
<tr>
<th>
id
</th>
<td>
String/Integer. Optional

Uniquely identifies the given event. Different instances of repeating events should all have the same <code>id</code>.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
title
</th>
<td>
String. <em>Required</em>.

The text on an event's element
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
allDay
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Whether an event occurs at a specific time-of-day. This property affects whether an event's time is shown. Also, in the agenda views, determines if it is displayed in the "all-day" section.

If this value is not explicitly specified, <a href='allDayDefault'>allDayDefault</a> will be used if it is defined.

If all else fails, FullCalendar will try to guess.
If either the <code>start</code> or <code>end</code> value has a <code>"T"</code> as part of the ISO8601
date string, <code>allDay</code> will become <code>false</code>. Otherwise, it will be <code>true</code>.

<strong>Don't include quotes</strong> around your <code>true</code>/<code>false</code>. This value is a boolean, not a string!
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
start
</th>
<td>
The date/time an event begins. <em>Required</em>.

A <a href='moment'>Moment</a>-ish input, like an <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601 string</a>.
Throughout the API this will become a real Moment object.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
end
</th>
<td>
The <strong>exclusive</strong> date/time an event ends. Optional.

A <a href='moment'>Moment</a>-ish input, like an <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601 string</a>.
Throughout the API this will become a real Moment object.

It is the moment immediately <em>after</em> the event has ended.
For example, if the last full day of an event is <strong>Thursday</strong>, the exclusive
end of the event will be 00:00:00 on <strong>Friday</strong>!
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
url
</th>
<td>
String. Optional.

A URL that will be visited when this event is clicked by the user.
For more information on controlling this behavior, see the <a href='eventClick'>eventClick</a> callback.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
className
</th>
<td>
String/Array. Optional.

A CSS class (or array of classes) that will be attached to this event's element.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
editable
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Overrides the master <a href='editable'>editable</a> option for this single event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
startEditable
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Overrides the master <a href='eventStartEditable'>eventStartEditable</a> option for this single event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
durationEditable
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Overrides the master <a href='eventDurationEditable'>eventDurationEditable</a> option for this single event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
resourceEditable
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Overrides the master <a href='eventResourceEditable'>eventResourceEditable</a> option for this single event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
rendering
</th>
<td>
Allows alternate rendering of the event, like <a href='background-events'>background events</a>.

Can be empty, <code>"background"</code>, or <code>"inverse-background"</code>
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
overlap
</th>
<td>
<code>true</code> or <code>false</code>. Optional.

Overrides the master <a href='eventOverlap'>eventOverlap</a> option for this single event.

If <code>false</code>, prevents this event from being dragged/resized over other events. Also prevents other events from
being dragged/resized over this event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
constraint
</th>
<td>
an event ID, <code>"businessHours"</code>, object. Optional.

Overrides the master <a href='eventConstraint'>eventConstraint</a> option for this single event.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
source
</th>
<td>
<a href='event-source-object'>Event Source Object</a>. Automatically populated.

A reference to the event source that this event came from.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
color
</th>
<td>
Sets an event's background <em>and</em> border color just like
the calendar-wide <a href='eventColor'>eventColor</a> option.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
backgroundColor
</th>
<td>
Sets an event's background color just like
the calendar-wide <a href='eventBackgroundColor'>eventBackgroundColor</a> option.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
borderColor
</th>
<td>
Sets an event's border color just like the
the calendar-wide <a href='eventBorderColor'>eventBorderColor</a> option.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
textColor
</th>
<td>
Sets an event's text color just like
the calendar-wide <a href='eventTextColor'>eventTextColor</a> option.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
resourceId
</th>
<td>
String. The <code>id</code> of a <a href='resource-object'>Resource</a> that this event is associated with. (<strong><a href='/pricing'>requires premium</a></strong>)
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
resourceIds
</th>
<td>
Array of strings. When an event is associated with multiple resources, each element of this array is the <code>id</code> of a <a href='resource-object'>Resource</a>. (<strong><a href='/pricing'>requires premium</a></strong>)
</td>
</tr>
</table>


## Non-standard Fields

In addition to the fields above, you may also include your own non-standard fields in each Event Object. FullCalendar will not modify or delete these fields. For example, developers often include a `description` field for use in callbacks such as [eventRender](eventRender).

## Events and Dates

To summarise, the value of `start` is the **inclusive** start date of the event. The event continues up to the specified `end` date. This value is **exclusive** because it is the cut-off point of the event. FullCalendar handles these dates in the same way as discussed in the [iCalendar Specifications (RFC 5545)](https://icalendar.org/iCalendar-RFC-5545/3-6-1-event-component.html) and [Google Calendar API](https://developers.google.com/calendar/v3/reference/events/list) documentation.

Furthermore, there is a [`nextDayThreshold`](nextDayThreshold) option which can be set on the calendar itself. It is ignored when `allDay` is `true`. However, when `allDay` is `false`, the `nextDayThreshold` property allows an override of the default behaviour of exclusive end dates by setting the cut-off point for the event to be rendered on that date. The default is 09:00:00.
