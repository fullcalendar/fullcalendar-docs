---
title: addResource
type: method
---

Allows programmatic rendering of a new resource on the calendar after the initial set of resources has already been displayed.

<div class='spec' markdown='1'>
.addResource( resource, scroll )
</div>

The `resource` argument should be an object with raw [Resource](resource-object) properties. Example:

```js
var calendar = new Calendar(calendarEl, {
  // options
});

calendar.addResource({
  id: 'e',
  title: 'Room E'
});
```

If you would like the new resource to be a child of an existing resource, make sure to set its `parentId`. This method will return the parsed [Resource](resource-object) with methods such as [getEvents](Resource-getEvents).

You may also specify an existing parsed Resource if it has previouisly been removed.

The `scroll` argument will scrol the current view to the newly added resource. It is `true` by default. To disable this behavior, specify `false`.


[View a demo](addResource-demo) that utilizes addResource.
