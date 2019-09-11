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

If displaying events from [Google Calendar](http://calendar.google.com/) `eventSourceSuccess` will give access to the result from Google as a JSON object:

```js
var calendar = new Calendar(calendarEl, {
  eventSources: [ 'en.usa#holiday@group.v.calendar.google.com' ],
  eventSourceSuccess: function(content, xhr) {
    console.log(content);

    // will output something like ...
    // [{
    //   description: undefined,
    //   end: "2019-09-03",
    //   id: "20190902_60o30dr5c4o30e1g60o30dr56c",
    //   location: undefined,
    //   start: "2019-09-02",
    //   title: "Labor Day",
    //   url: "https://www.google.com/calendar/event?eid=MjAxOTA5MDJfNjBvMzBkcjVjNG8zMGUxZzYwbzMwZHI1NmMgZW4udXNhI2hvbGlkYXlAdg"
    // }]
  }
});
```
