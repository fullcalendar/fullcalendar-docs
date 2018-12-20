---
title: Resource::getChildren
type: method
---

Returns a list of a resource's child resources.

<div class='spec' markdown='1'>
resource.getChildren()
</div>

Example:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    { id: 'a', title: 'Resource A', children: [
      { id: 'a1', title: 'Resource A1' },
      { id: 'a2': title: 'Resource A2' }
    ] }
  ]
});

var parentResource = calendar.getResourceById('a');
var children = parentResource.getChildren();
var childIds = children.map(function(child) { return child.id });

console.log(childIds); // [ 'a1', 'a2' ]
```
