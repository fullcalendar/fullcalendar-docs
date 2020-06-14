---
title: datesSet
---

Called after the calendar's date range has been initially set or changed in some way and the DOM has been updated.

<div class='spec' markdown='1'>
function( dateInfo )
</div>

The calendar's dates can change any time the user does the following: click the prev/next buttons, change the view, click a navlink. The dates can also change when the current-date is manipulated via the API, such as when [gotoDate](Calendar-gotoDate) is called.

`datesSet` is called after the new date range has been rendered. However, you should avoid relying on this callback to manipulate rendered dates, because some dates might *still* be in view from the previous render, and you don't want to "double render" them. It's much better to rely on hooks that manipulate the rendering of *individual* dates when they change. See the [day header](day-header-render-hooks), [day cell](day-cell-render-hooks), or [slot](slot-render-hooks) render hooks.

Complete list of properties in `dateInfo`:

<table>

<tr>
<th>start</th>
<td markdown='1'>
A [Date](date-object) for the beginning of the range the calendar needs events for.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
A [Date](date-object) for the end of the range the calendar needs events for. **Note: This value is exclusive**.
</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
An [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) representation of the start date. Will have a time zone offset according to the calendar's [timeZone](timeZone) like `2018-09-01T12:30:00-05:00`.
</td>
</tr>

<tr>
<th>endStr</th>
<td markdown='1'>
Just like `startStr`, but for the `end` date.
</td>
</tr>

<tr>
<th>timeZone</th>
<td markdown='1'>
The exact value of the calendar's [timeZone](timeZone) setting.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>
