---
title: Event Object
type: guide
excerpt_separator: <!--more-->
---

A standard JavaScript object that FullCalendar uses to store information about a calendar event.<!--more--> Here are its properties:


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

<strong>Don't include quotes</strong> around your <code>true</code>/<code>false</code>. This value is not a string!

When specifying Event Objects for <code>events</code> or <code>eventSources</code>,
omitting this property will make it inherit from
<a href='allDayDefault'>allDayDefault</a>, which is normally <code>true</code>.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
start
</th>
<td>
Date. <em>Required</em>.

The date/time an event begins.

When specifying Event Objects for <code>events</code> or <code>eventSources</code>,
you may specify a string in IETF format (ex: "Wed, 18 Oct 2009 13:00:00 EST"),
a string in ISO8601 format (ex: "2009-11-05T13:15:30Z") or a UNIX timestamp.
</td>
</tr>
<!-- ------------------- -->
<tr>
<th>
end
</th>
<td>
Date. Optional.

The date/time an event ends.

As with <code>start</code>, you may specify it in IETF, ISO8601, or UNIX timestamp format.

<strong>If an event is all-day</strong>...

the end date is inclusive. This means an event with <code>start</code> Nov 10 and
<code>end</code> Nov 12 will span 3 days on the calendar.

<strong>If an event is NOT all-day</strong>...

the end date is exclusive. This is only a gotcha when your <code>end</code> has time 00:00.
It means your event ends on midnight, and it will not span through the next day.
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
</table>


## Non-standard Fields

In addition to the fields above, you may also include your own non-standard fields in each Event Object. FullCalendar will not modify or delete these fields. For example, developers often include a `description` field for use in callbacks such as [eventRender](eventRender).

<div class='version-info' markdown='1'>
Prior to version 1.3, the *end* date was always exclusive, even when *allDay* was set to *true*.

Prior to version 1.3, the *allDay* property did not exist. *showTime* was used instead.
It was set to *true* to show times and *false* to hide them.

The *className* and *source* properties did not exist prior to version 1.2.
</div>
