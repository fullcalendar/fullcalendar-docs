---
title: resources (as a function)
excerpt_separator: <!--more-->
---

A custom function for programmatically generating [raw Resources objects](resource-parsing).<!--more--> This allows for any sort of asynchronous means of obtaining the resource list.

<div class='spec' markdown='1'>
function( *fetchInfo*, *successCallback*, *failureCallback* ) { }
</div>

The function is given a `successCallback` argument that should be called with an array of [raw Resource objects](resource-parsing):

```js
var calendar = new Calendar(calendarEl, {

  resources: function(fetchInfo, successCallback, failureCallback) {
    somethingAsynchonous(function(resources) {
      successCallback(resources);
    });
  }

});
```

If there is some sort of failure, for example, if an AJAX request should fail, then call the `failureCallback` instead. It accepts an argument with information about the failure.

Instead of calling `successCallback` and `failureCallback`, you may return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-like object instead.


## Fetching based on current date

If [refetchResourcesOnNavigate](refetchResourcesOnNavigate) is set to `true`, the resources function's `fetchInfo` argument will be populated with some useful arguments. It will receive the start and end dates for the newly visible window of time as well as the calendar's timezone:

```js
var calendar = new Calendar(calendarEl, {

  refetchResourcesOnNavigate: true,

  resources: function(fetchInfo, successCallback, failureCallback) {
    somethingAsynchonous({
      start: fetchInfo.start,
      end: fetchInfo.end,
      timeZone: fetchInfo.timeZone
    }, function(resources) {
      successCallback(resources);
    });
  }

});
```

Complete list of properties in `fetchInfo`:

<table>

<tr>
<th>start</th>
<td markdown='1'>
A [Date](date-object) for the beginning of the range the calendar needs events for.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
A [Date](date-object) for the end of the range the calendar needs events for.

**Note: This value is exclusive**. For example, an event with the `end` of `2018-09-03` will appear to span through the 2nd of the month, but will end before the start of the 3rd of the month. See how events are [are parsed from a plain object](event-parsing) for further details.

</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
An [ISO8601 string](https://en.wikipedia.org/wiki/ISO_8601) representation of the start date. Will have a time zone offset according to the calendar's [timeZone](timeZone) like `2018-09-01T12:30:00-05:00`.
</td>
</tr>

<tr>
<th>endStr</th>
<td markdown='1'>
Just like `startStr`, but for the `end` date.
</td>
</tr>

<tr>
<th>timeZone</th>
<td markdown='1'>
The exact value of the calendar's [timeZone](timeZone) setting.
</td>
</tr>

</table>
