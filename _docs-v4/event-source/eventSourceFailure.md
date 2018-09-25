---
title: eventSourceFailure
---

Called when any of the event sources fails. Probably because [an AJAX request](events-json-feed) failed.

<div class='spec' markdown='1'>
function( *errorObj* )
</div>

Receives one argument, an error object, which is guaranteed to have at least a `message` property (a string).
