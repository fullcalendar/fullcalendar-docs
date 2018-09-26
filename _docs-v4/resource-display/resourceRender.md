---
title: resourceRender
type: callback
---

A hook for manipulating a resource's DOM.

The first argument is the [Resource Object](resource-object).

The second argument is the `<td>` or `<th>` that holds the name of the resource (HTML element).
The exact DOM node depends on the type of the current view.

The third argument holds an array of HTML elements that visually contain the resource's events. The exact DOM node depends on the type of the current view. Certain views might not support this argument, and will provide an empty array (TODO).

Example:

```js
resourceRender: function(resourceObj, labelTds, bodyTds) {
  labelTds.style.backgroundColor = 'blue';
}
```

See an example of resourceRender [with timeline view](timeline-resourceRender-demo) and [with vertical resource view](vertical-resource-resourceRender-demo).

This callback will not allow manipulating of *event* elements, as they will not yet have been drawn at the time of invocation. Use [eventRender](eventRender) for that.
