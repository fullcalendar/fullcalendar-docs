---
title: eventSourceSuccess
---

A function that gets called when fetching succeeds. Gets called for any type of Event source.

<div class='spec' markdown='1'>
function( *rawEvents*, *xhr* )
</div>

Will receive two arguments, the raw event array and an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) if applicable. Cannot modify the response. Use [eventDataTransform](eventDataTransform) instead.
