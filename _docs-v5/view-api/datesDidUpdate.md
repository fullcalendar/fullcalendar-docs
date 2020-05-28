---
title: datesDidUpdate
---

Called after the calendar's date range has been initially set or changed in some way and the DOM has been updated.

<div class='spec' markdown='1'>
function( arg: { view } )
</div>

The calendar's dates can change any time the user does the following: click the prev/next buttons, change the view, click a navlink. The dates can also change when the current-date is manipulated via the API, such as when [gotoDate](Calendar-gotoDate) is called.

`datesDidUpdate` is called after the new date range has been rendered. However, you should avoid relying on this callback to manipulate rendered dates, because some dates might *still* be in view from the previous render, and you don't want to "double render" them. It's much better to rely on hooks that manipulate the rendering of *individual* dates when they change. See the [day header](day-header-render-hooks), [day cell](day-cell-render-hooks), or [slot](slot-render-hooks) render hooks.

A single object argument is given. It contains a property called `view` that holds the current [View Object](view-object).
