---
title: viewRender
type: callback
---

Triggered when a new date-range is rendered, or when the view type switches.

<div class='spec' markdown='1'>
function( view, element )
</div>

`view` is the [View Object](view-object) for the new view.

`element` is a jQuery element for the container of the new view.

This callback will get triggered when the user changes the view, or when any of the [date navigation](date-navigation) methods are called.

This callback will trigger after the view has been fully rendered, but before events have been rendered (see also: [eventAfterAllRender](eventAfterAllRender)).
