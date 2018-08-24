---
title: dayRender
type: callback
---

A hook for modifying a day cell's DOM.

<div class='spec' markdown='1'>
function( date, cell ) { }
</div>

This callback lets you modify the day cells elements that are part of each calendar view.

`date` is the [Moment](moment) for the given day.

You cannot return a new element. You must only modify the `cell` (a `<td>` element) that is provided.

This callback is called each time a cell needs to be freshly rendered.
