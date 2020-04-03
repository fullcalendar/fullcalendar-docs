---
title: loading
type: callback
---

Triggered when event or resource fetching starts/stops.

<div class='spec' markdown='1'>
function( *isLoading* )
</div>

Triggered with a `true` argument when the calendar begins fetching events via AJAX. Triggered with `false` when done.

This function is often used to show/hide a loading indicator.

When one of the [resource plugins](premium) are loaded, this callback is also fired when resources are fetched.
