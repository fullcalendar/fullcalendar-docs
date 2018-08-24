---
title: select
type: callback
excerpt_separator: <!--more-->
---

Triggered when a date/time selection is made.<!--more--> [See a demo](date-clicking-selecting-demo).

<div class='spec' markdown='1'>
function( *start*, *end*, *jsEvent*, *view*, [ *resource* ] )
</div>

`start` is a [Moment](moment) indicating the beginning of the selection.

`end` is a [Moment](moment) indicating the end of the selection. It is an exclusive value, so if the selection is all-day, and the last day is a Thursday, `end` will be Friday.

You can test if the `start`/`end` is timed or all-day by calling `hasTime` ([more info](moment#ambiguously-timed)).

`jsEvent` holds the jQuery event with information such as mouse coordinates. If `select` has been triggered via the [select method](select-method), `jsEvent` will be `undefined`.

If the [Scheduler plugin](scheduler) is installed, the final `resource` argument is the [Resource Object](resource-object) the user selected. [See a demo of the select callback with resources](date-clicking-selecting-resource-demo).
