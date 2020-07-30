---
title: View Object
type: guide
---

A View object contains information about a calendar view, such as title and date range. This information about the current view is passed into nearly every [handler](handlers).


## Properties

`type`
:   Name of one of the available views (a string).

`title`
:   Title text that is displayed at the top of the headerToolbar (such as "September 2009" or "Sep 7 - 13 2009").

`activeStart`
:   A [Date](date-object) that is the first visible day.
    In month view, this value is often before the 1st day of the month, because most months do not begin on the first day-of-week.

`activeEnd`
:   A [Date](date-object) that is the last visible day. **Note: This value is exclusive**. See how events are [are parsed from a plain object](event-parsing) for further details.

`currentStart`
:   A [Date](date-object) that is the start of the interval the view is trying to represent.
    For example, in month view, this will be the first of the month. This value disregards hidden days.

`currentEnd`
:   A [Date](date-object) that is the end of the interval the view is trying to represent. **Note: This value is exclusive**. See how events are [are parsed from a plain object](event-parsing) for further details.
    For example, in month view, this will be the day after the last day of the month.
    This value disregards hidden days.

`calendar`
:   The master Calendar Object this view belongs to.

These properties of the View object can only be read. A [custom view with settings](custom-view-with-settings) is the way to set any of them.


## View Types

The available view types currently available are:
- `list`, which combined with these options `Day`, `Week`, `Month`, `Year` results in `listDay`, `listWeek`, `listMonth`, `listYear` option values.
- `timeGrid`, which combined with these options `Day`, `Week` results in `timeGridDay`. `timeGridWeek` option values.
- `dayGrid`, which combined with these options `Week`, `Month` results in `dayGridWeek`, `dayGridMonth` option values.
