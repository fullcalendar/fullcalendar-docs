---
title: select
type: callback
excerpt_separator: <!--more-->
---

Triggered when a date/time selection is made.<!--more--> [See a demo](date-clicking-selecting-demo).

<div class='spec' markdown='1'>
function( *start*, *end*, *jsEvent*, *view*, [ *resource* ] )
</div>

`start` is a [Date](date-object) indicating the beginning of the selection.

`end` is a [Date](date-object) indicating the end of the selection. It is an exclusive value, so if the selection is all-day, and the last day is a Thursday, `end` will be Friday.

`jsEvent` holds the primitive JavaScript event with information such as mouse coordinates. If `select` has been triggered via the [select method](select-method), `jsEvent` will be `undefined`.

If the [Scheduler plugin](scheduler) is installed, the final `resource` argument is the [Resource Object](resource-object) the user selected. [See a demo of the select callback with resources](date-clicking-selecting-resource-demo).
