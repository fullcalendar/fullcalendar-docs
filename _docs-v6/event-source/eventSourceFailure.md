---
title: eventSourceFailure
---

Called when any of the event sources fails. Probably because [an AJAX request](events-json-feed) failed.

<div class='spec' markdown='1'>
function( *errorObj* )
</div>

Receives one argument, an error object, which is guaranteed to have at least a `message` property (a string).

If the event source was a JSON feed, the error will have a `response` property, the [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) returned from the underlying request:

```js
import { JsonRequestError } from '@fullcalendar/core'

const calendar = new Calendar(el, {
  // ...
  eventSourceFailure(error) {
    if (error instanceof JsonRequestError) {
      console.log(`Request to ${error.response.url} failed`)
    }
  }
  // ...
})
```
