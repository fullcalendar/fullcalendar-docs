---
title: Event::setResources
type: method
---

Sets the [Resources](resource-object) associated with the given event.

<div class='spec' markdown='1'>
event.setResource([ resource0, resource1... ])
</div>

Can accept an array of resource IDs:

```js
var event = calendar.getEventById('1');
event.setResources([ 'a' ]); // set a single resource
event.setResources([ 'a', 'b' ]); // set multiple
```

Can also accept an array of [Resource Objects](resource-object):

```js
var resourceA = calendar.getResourceById('a');
var resourceB = calendar.getResourceById('b');

var event = calendar.getEventById('1');
event.setResources([ resourceA, resourceB ]);
```
