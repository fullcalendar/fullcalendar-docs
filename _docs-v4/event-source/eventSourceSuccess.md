---
title: eventSourceSuccess
---

A function that gets called when fetching succeeds. It can transform the response. Gets called for any type of Event source.

<div class='spec' markdown='1'>
function( *rawEvents*, *xhr* )
</div>

Will receive two arguments, the raw response content and an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) if applicable. The function can return a new array of [parsable Event objects](event-parsing) that will be used instead of the received response. Example:

```js
eventSourceSuccess: function(content, xhr) {
  return content.eventArray;
}
```

This is useful if your server returns a wrapper object. If you are already receiving an array, and merely want to transform each individual item, use [eventDataTransform](eventDataTransform) instead.
