---
title: resources (as a function)
excerpt_separator: <!--more-->
---

Tells the calendar to fetch the resources list by executing a function.<!--more--> The function is given a `callback` argument that should be called with an array of [Resource Object](resource-object)s:

```js
resources: function(callback) {

  somethingAsynchonous(function(resourceObjects) {
    callback(resourceObjects);
  });
}
```

This allows for any sort of asynchronous means of obtaining the resource list.

If [refetchResourcesOnNavigate](refetchResourcesOnNavigate) is set to `true`, the resources function will receive additional arguments. It will receive the start and end moments for the newly visible window of time as well as the calendar's timezone:

```js
refetchResourcesOnNavigate: true,
resources: function(callback, start, end, timezone) {

  somethingAsynchonous(start, end, timezone, function(resourceObjects) {
    callback(resourceObjects);
  });
}
```

These arguments are similar to what the [events function](events-function) receives, though in a different order.

This `refetchResourcesOnNavigate` behavior is present in v1.5.1 and later.
