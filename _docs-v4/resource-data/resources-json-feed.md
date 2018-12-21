---
title: resources (as a JSON feed)
excerpt_separator: <!--more-->
---

Tells the calendar to fetch the resource list from a remote script.<!--more--> The value can be a string url:

```js
var calendar = new Calendar(calendarEl, {
  resources: '/my-resource-script.php'
});
```

The value can also be an object with a `url` field and other options:

```js
var calendar = new Calendar(calendarEl, {
  resources: {
    url: '/my-resource-script.php',
    method: 'POST'
  }
});
```

In addition to `url`, here are other properties you can include:

<table>

<tr>
<th>method</th>
<td markdown='1'>
`'GET'` (the default), `'POST'`, or any other HTTP request type.
</td>
</tr>

<tr>
<th>extraParams</th>
<td markdown='1'>
An object with other GET/POST parameters that will be included in the request.
You can also provide a function that dynamically generates an object.
</td>
</tr>

</table>

The remote script must return a JSON array of [raw Resource objects](resource-parsing).


## Fetching based on current date

If [refetchResourcesOnNavigate](refetchResourcesOnNavigate) is set to `true`, the network request will be made with additional parameters: the start/end date of the newly visible window of time, as well as the calendar's timezone:

```js
var calendar = new Calendar(calendarEl, {
  refetchResourcesOnNavigate: true,
  resources: '/my-resource-script.php'
  // example request: /my-resource-script.php?start=2017-12-01&end=2017-01-12&timezone=UTC
});
```

The parameters are similar to the [event JSON feed](events-function)'s parameters.
