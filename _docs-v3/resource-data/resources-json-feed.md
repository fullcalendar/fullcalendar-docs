---
title: resources (as a JSON feed)
excerpt_separator: <!--more-->
---

Tells the calendar to fetch the resource list from a remote script.<!--more--> The value can be a string url:

```js
$('#calendar').fullCalendar({
  resources: '/my-resource-script.php'
});
```

The value can also be an object with a `url` field and other options accepted by jQuery's [ajax method](http://api.jquery.com/jquery.ajax/):

```js
$('#calendar').fullCalendar({
  resources: {
    url: '/my-resource-script.php',
    type: 'POST'
  }
});
```

The remote script must return a JSON array of [Resource Object](resource-object)s.

If [refetchResourcesOnNavigate](refetchResourcesOnNavigate) is set to `true`, the network request will be made with additional parameters: the start/end date of the newly visible window of time, as well as the calendar's timezone:

```js
$('#calendar').fullCalendar({
  refetchResourcesOnNavigate: true,
  resources: '/my-resource-script.php'
  // example request: /my-resource-script.php?start=2017-12-01&end=2017-01-12&timezone=UTC
});
```

The parameters are similar to the [event JSON feed](events-function)'s parameters.

This `refetchResourcesOnNavigate` behavior is present in v1.5.1 and later.
