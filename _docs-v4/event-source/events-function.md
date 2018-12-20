---
title: events (as a function)
---

A custom function for programmatically generating [Events](event-parsing).

<div class='spec' markdown='1'>
function( *fetchInfo*, *successCallback*, *failureCallback* ) { }
</div>

FullCalendar will call this function whenever it needs new event data. This is triggered when the user clicks prev/next or switches views.

the `fetchInfo` argument is a plain object with the following properties:

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

**It is an exclusive value.**
</td>
</tr>

<tr>
<th>startStr</th>
<td markdown='1'>
An ISO8601 string representation of the start date. Will have a time zone offset according to the calendar's [timeZone](timeZone) like `2018-09-01T12:30:00-05:00`.
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

The `successCallback` function must be called when the custom event function has generated its events. It is the event function's responsibility to make sure `successCallback` is being called with an array of [parsable Event Objects](event-parsing).

If there is some sort of failure, for example, if an AJAX request should fail, then call the `failureCallback` instead. It accepts an argument with information about the failure.

Instead of calling `successCallback` and `failureCallback`, you may return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-like object instead.

Here is an example showing how to use an event function to fetch events from a hypothetical XML feed:

```js
import { req } from 'superagent'; // ajax library

var calendar = new Calendar(calendarEl, {

  events: function(info, successCallback, failureCallback) {
    req.get('myxmlfeed.php')
      .type('xml')
      .query({
        start: info.start.valueOf(),
        end: info.end.valueOf()
      })
      .end(function(err, res) {

        if (err) {
          failureCallback(err);
        } else {

          successCallback(
            Array.prototype.slice.call( // convert to array
              res.getElementsByTagName('event')
            ).map(function(eventEl) {
              return {
                title: eventEl.getAttribute('title'),
                start: eventEl.getAttribute('start')
              }
            })
          )
        }
      })
  }

});
```

However, if you have the choice, JSON is a better idea because you can just specify a [feed URL](events-json-feed).

## Extended Form

You can specify [Event Source options](event-source-object#options). This often comes in handy when you are using the [eventSources](eventSources) option to specify multiple event sources and you want certain options to only apply to certain sources. However, to do this, you must write things a little differently:

```js
var calendar = new Calendar(calendarEl, {

  eventSources: [

    // your event source
    {
      events: function(fetchInfo, successCallback, failureCallback) {
        // ...
      },
      color: 'yellow',   // an option!
      textColor: 'black' // an option!
    }

    // any other sources...

  ]

});
```
