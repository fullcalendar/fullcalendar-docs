---
title: loading
type: callback
---

Triggered when event fetching and resource fetching starts/stops.

<div class='spec' markdown='1'>
function( *isLoading*, *view* )
</div>

Triggered with a `true` argument when the calendar begins fetching events via AJAX. Triggered with `false` when done.

`view` is the current [View Object](view-object).

This function is often used to show/hide a loading indicator.
