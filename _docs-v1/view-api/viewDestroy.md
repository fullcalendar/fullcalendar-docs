---
title: viewDestroy
type: callback
since_version: 1.6.3
---

Triggered when a rendered date-range needs to be torn down.

<div class='spec' markdown='1'>
function( view, element )
</div>

`view` is the [View Object](view-object) for the view that is about to be destroyed.

`element` is a jQuery element for the container of the view.

This callback will be triggered immediately before the view is about to be removed from the DOM. This could happen because of a view type switch, a date range change, or a [destroy](destroy) method call.
