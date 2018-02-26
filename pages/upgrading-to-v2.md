---
title: Upgrading to v2
layout: text
is_docs: true
permalink: /docs/upgrading-to-v2
---

FullCalendar version 2.0 ([full documentation]({{ site.baseurl }}/docs))
offers huge improvements in regards to timezones, internationalization,
and date manipulation. Much of this is due to intergration with [MomentJS](http://momentjs.com),
which is now a dependency.
Because the changes are so dramatic, compatibility with the 1.x versions has been broken.
This guide explains the differences between versions.

## Options that now use Moments

Instead of native Date objects, Moment objects are now used throughout the API.

In addition, **all end dates are now exclusive**. For example, if an all-day event ends on a Thursday, the `end` date will be 00:00:00 **on Friday**.
The 1.x versions had some strange rules in regards to this. Things should be much simpler
now that exclusive end dates are used consistently throughout the API.
In addition, this behavior is more consistent with other API's and formats,
such as [iCalendar](http://en.wikipedia.org/wiki/ICalendar).

Affected options:

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><del><code>year</code></del></td><td rowspan='3'>use <a href='{{ site.baseurl}}/docs/defaultDate'><code>defaultDate</code></a> instead, which is Moment-like and determines year, month, and date</td></tr>
<tr><td><del><code>month</code></del></td></tr>
<tr><td><del><code>date</code></del></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/gotoDate'><code>gotoDate</code> method</a></td><td rowspan='4'>Uses Moments</td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/getDate'><code>getDate</code> method</a></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/events-function'><code>events</code> as a function</a></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/dayRender'><code>dayRender</code> callback</a></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/dayClick'><code>dayClick</code> callback</a></td><td rowspan='2'>Uses Moments, which may be <a href='{{ site.baseurl}}/docs/Moment#ambiguously-timed'>ambiguously-timed</a>.<br /><code>allDay</code> removed, <code>delta</code> added</td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/drop'><code>drop</code> callback</a></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/eventDrop'><code>eventDrop</code> callback</a></td><td rowspan='2'>Uses Moments, which may be <a href='{{ site.baseurl}}/docs/Moment#ambiguously-timed'>ambiguously-timed</a>.<br /><code>allDay</code> removed, <code>delta</code> added</td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/eventResize'><code>eventResize</code> callback</a></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/select-callback'><code>select</code> callback</a></td><td rowspan='2'>Uses Moments, which may be <a href='{{ site.baseurl}}/docs/Moment#ambiguously-timed'>ambiguously-timed</a>.<br /><code>allDay</code> parameter removed. <code>end</code> is now <b>exclusive!</b></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/select-method'><code>select</code> method</a></td></tr>
</table>

[Event Object]({{ site.baseurl }}/docs/event-object) modifications:

<table>
<tr><th>Property</th><th>Upgrade Notes</th></tr>
<tr><td><code>.start</code></td><td>is now a Moment</td></tr>
<tr><td><code>.end</code></td><td>is now a Moment, and is always <b>exclusive!</b></td></tr>
</table>

[View Objects]({{ site.baseurl }}/docs/view-object) modifications:

<table>
<tr><th>Property</th><th>Upgrade Notes</th></tr>
<tr><td><del><code>.visStart</code></del></td><td>has become <code>.start</code> (a Moment)</td></tr>
<tr><td><code>.start</code> <b>repurposed!</b></td><td>has become <code>.intervalStart</code> (a Moment)</td></tr>
<tr><td><del><code>.visEnd</code></del></td><td>has become <code>.end</code> (an exclusive Moment)</td></tr>
<tr><td><code>.end</code> <b>repurposed!</b></td><td>has become <code>.intervalEnd</code> (an exclusive Moment)</td></tr>
</table>

*Note*: anywhere in the API that accepts a Moment parameter, a "Moment-like" parameter (anything
the [Moment constructor](http://momentjs.com/docs/#/parsing/) accepts) can also be given.
This includes raw ISO8601 strings like `"2013-12-25"`.

## Options that now use Durations

The MomentJS library provides a [Duration](http://momentjs.com/docs/#/durations/) object, which is
also used throughout the API. It is used to specify intervals of time and anonymous times.
The following options have been affected:

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><a href='{{ site.baseurl}}/docs/incrementDate'><code>incrementDate</code> method</a></td><td>accepts a Duration</td></tr>
<tr><td><del><code>slotMinutes</code></del></td><td>superseded by <a href='{{ site.baseurl}}/docs/slotDuration'><code>slotDuration</code></a></td></tr>
<tr><td><del><code>snapMinutes</code></del></td><td>superseded by <a href='{{ site.baseurl}}/docs/snapDuration'><code>snapDuration</code></a></td></tr>
<tr><td><del><code>firstHour</code></del></td><td>superseded by <a href='{{ site.baseurl}}/docs/scrollTime'><code>scrollTime</code></a></td></tr>
<tr><td rowspan='2'><del><code>defaultEventMinutes</code></del></td><td>superseded by <a href='{{ site.baseurl}}/docs/defaultTimedEventDuration'><code>defaultTimedEventDuration</code></a></td></tr>
<tr><td>superseded by <a href='{{ site.baseurl}}/docs/defaultAllDayEventDuration'><code>defaultAllDayEventDuration</code></a></td></tr>
</table>

*Note*: Anywhere the API accepts a Duration, a "Duration-like" parameter can be given (anything the
[Duration constructor](http://momentjs.com/docs/#/durations/creating/) accepts).
This includes raw strings like `"02:00"` (two hours).

## Date Formatting and Parsing

FullCalendar now leverges MomentJS for formatting dates into strings. Many of the formatting
characters are the same, **but some have changed!**

<table>
<tr><th>Old Characters</th><th>New Characters</th></tr>
<tr><td><code>yyyy</code> (4 digit year)</td><td><code>YYYY</code></td></tr>
<tr><td><code>yy</code> (2 digit year)</td><td><code>YY</code></td></tr>
<tr><td><code>dd</code> (2 digit date of month)</td><td><code>DD</code></td></tr>
<tr><td><code>d</code> (1 digit date of month)</td><td><code>D</code></td></tr>
<tr><td><code>tt</code> (am or pm)</td><td><code>a</code></td></tr>
<tr><td><code>TT</code> (AM or PM)</td><td><code>A</code></td></tr>
<tr><td><code>S</code> (st, nd, rd, th)</td><td><code>o</code></td></tr>
<tr><td><code>''</code> (escape characters)</td><td><code>[]</code></td></tr>
<tr><td><code>[]</code> and <code>{}</code> for range formatting</td><td>no replacement. <a href='{{ site.baseurl}}/docs/formatRange'><code>formatRange</code></a> works differently</td></tr>
<tr><td><code>u</code> (outputs IS08601)</td><td>use moment's <a href='http://momentjs.com/docs/#/displaying/as-iso-string/'><code>toISOString</code></a> instead</td></tr>
</table>

See the [MomentJS formatting characters](http://momentjs.com/docs/#/displaying/format/)
for the full list of available characters.

Additionally, there are some [FullCalendar-specific formatting characters]({{ site.baseurl }}/docs/date-formatting-string),
such as `t`, `T`, and `(` `)`.

The following date utility methods have also been affected:

<table>
<tr><th>Method</th><th>Upgrade Notes</th></tr>
<tr><td><del><code>$.fullCalendar.parseDate</code></del></td><td rowspan='2'>use a <a href='{{ site.baseurl}}/docs/Moment#creating'>moment constructor</a></td></tr>
<tr><td><del><code>$.fullCalendar.parseISO8601</code></del></td></tr>
<tr><td><del><code>$.fullCalendar.formatDate</code></del></td><td>use a moment's <a href='http://momentjs.com/docs/#/displaying/format/'><code>.format()</code></a> method instead</td></tr>
<tr><td><del><code>$.fullCalendar.formatDates</code></del></td><td>use <a href='{{ site.baseurl}}/docs/formatRange'><code>$.fullCalendar.formatRange</code></a> instead</td></tr>
</table>

## Internationalization

The new [`lang`]({{ site.baseurl }}/docs/lang) option provides built-in support for over **40 locales**!

Changing the locale affects the default values of many options
(such as [`isRTL`]({{ site.baseurl }}/docs/isRTL) and [`dayNames`]({{ site.baseurl }}/docs/dayNames)).
However, these options can still be individually overridden if need be.

Other affected locale-related options:

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><a href='{{ site.baseurl }}/docs/weekNumberCalculation'><code>weekNumberCalculation</code></a></td><td>new <code>"local"</code> option, which is now the default</td></tr>
</table>

**[View a live demo!]({{ site.baseurl }}/releases/fullcalendar/2-latest/demos/languages.html)**

## Timezones

The new [`timezone`]({{ site.baseurl }}/docs/timezone) option provides flexible support for arbitrary
timezones! The potential values are:

- `false` - no timezone (default)
- `"local"` - the timezone of the browser
- `"UTC"`
- a specific timezone string like `"America/Chicago"`

Certain existing options were modified for timezone support:

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><a href='{{ site.baseurl}}/docs/events-function'><code>events</code> as a function</a></td><td>Receives a <code>timezone</code> parameter.<br /><b>Changes the argument order for <code>callback</code>!</b></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/events-json-feed'><code>events</code> as a JSON feed</a></td><td>Might send a <code>timezone</code> parameter in the request</td></tr>
<tr><td><del><code>ignoreTimezone</code></del></td><td>Was a bad idea in the first place</td></tr>
<tr><td><del><code>currentTimezone</code></del><br />(Google Calendar plugin option)</td><td>Uses the calendar's <code>timezone</code> option instead</td></tr>
</table>

The
<a href='{{ site.baseurl}}/docs/timezoneParam'><code>timezoneParam</code></a> and
<a href='{{ site.baseurl}}/docs/now'><code>now</code></a>
options have been added as well.

**[View a live demo!]({{ site.baseurl }}/releases/fullcalendar/2-latest/demos/timezones.html)**

## Requesting and Receiving Events

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><a href='{{ site.baseurl}}/docs/events-function'><code>events</code> as a function</a></td><td>Receives a <code>timezone</code> parameter.<br /><b>Changes the argument order for <code>callback</code>!</b></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/events-json-feed'><code>events</code> as a JSON feed</a></td><td>Sends ISO8601 dates for <code>start</code> and <code>end</code></td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/allDayDefault'><code>allDayDefault</code></a></td><td>Defaults to <code>undefined</code> instead of <code>true</code> to allow for the smart <code>allDay</code> guessing behavior...</td></tr>
</table>

When an [Event Object's]({{ site.baseurl }}/docs/event-object) `allDay` property is not specified,
FullCalendar is now smarter about guessing it.
If either the `start` or `end` value has a "T" as part of the ISO8601 date string,
`allDay` will become `false`. Otherwise, it will be `true`.

[`forceEventDuration`]({{ site.baseurl }}/docs/forceEventDuration) has been added.
When `true`, it will ensure that any event inputted with an empty `end` date will have that
date computed via defaults instead of allowing it to remain `null`.

## Other API Changes

<table>
<tr><th>Option</th><th>Upgrade Notes</th></tr>
<tr><td><a href='{{ site.baseurl}}/docs/buttonIcons'><code>buttonIcons</code></a> <b>repurposed!</b></td><td>Repurposed to affect button icons when themeing is <em>off</em>.<br/>Use <a href='{{ site.baseurl}}/docs/themeButtonIcons'><code>themeButtonIcons</code></a> for when themeing is <em>on</em>.</td></tr>
<tr><td><a href='{{ site.baseurl}}/docs/buttonText'><code>buttonText</code></a></td><td>Text is now escaped. HTML injection won't work.</td></tr>
<tr><td><del><code>viewDisplay</code> callback</del></td><td rowspan='3'>Previously deprecated and now removed</td></tr>
<tr><td><del><code>disableDragging</code></del></td></tr>
<tr><td><del><code>disableResizing</code></del></td></tr>
</table>

[`nextDayThreshold`]({{ site.baseurl }}/docs/nextDayThreshold) as been added to
prevent events which span past midnight from appearing as if they are multi-day.

The HTML markup for buttons in the [header]({{ site.baseurl }}/docs/header) has changed slightly,
as well as the CSS method used to inject icon characters into those buttons.

Timed events (events that are not all-day) can no longer be resized via the mouse in month
and the basic views.

## AMD Module

FullCalendar now registers itself as an **AMD module** for use with loaders like [RequireJS](http://requirejs.org/).
When loaded in this manner, it attaches itself to the `jquery` the AMD system provides.

## No More IE7 Support

Official support for IE7 has been dropped but support for IE8 and above remains.
