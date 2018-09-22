---
title: eventLimitClick
since_version: 2.1.0
---

Determines the action taken when the user clicks on a "more" link created by the [eventLimit](eventLimit) option.

<div class='spec' markdown='1'>
"popover", "week", "day", view name (string), function
</div>

`"popover"` (the default)
:   Displays a rectangular panel over the cell with a full list of events for that day.

`"week"`
:   Goes to a week view, as determined by the views in the [header](header).

`"day"`
:   Goes to a day view, as determined by the views in the [header](header).

*view name*
:   A literal string name of any of the available views.

*function*
:   A callback function, for executing arbitrary code.


## Callback Function

<div class='spec' markdown='1'>
function( cellInfo, jsEvent )
</div>

`cellInfo` is an object that holds named properties for information about the day cell:

- `date` - the [Date](date-object) date of the day
- `dayEl` - jQuery element for the day cell
- `moreEl` - jQuery element for the "more" link
- `segs` - array of all event "segment" objects for the given day
- `hiddenSegs` - array of only the segment objects that were not displayed prior

`jsEvent` holds the native JavaScript event for the click.

A callback function can return a string value, like `"day"`, that will be processed as the new value of the setting.


## Event Segment Object

- `event` - the [Event Object](event-object)
- `start` - the [Date](date-object) for when this stretch of the event begins
- `end` - the [Date](date-object) for when this stretch of the event ends (exclusive)
- `isStart` - boolean if this is chronologically the first segment for the event
- `isEnd` - boolean if this is chronologically the last segment for the event
