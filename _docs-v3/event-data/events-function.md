---
title: events (as a function)
---

A custom function for programmatically generating [Event Objects](event-object).

<div class='spec' markdown='1'>
function( *start*, *end*, *timezone*, *callback* ) { }
</div>

FullCalendar will call this function whenever it needs new event data. This is triggered when the user clicks prev/next or switches views.

This function will be given `start` and `end` parameters, which are [Moments](moment) denoting the range the calendar needs events for.

`timezone` is a string/boolean describing the calendar's current timezone. It is the exact value of the [timezone](timezone) option.

It will also be given `callback`, a function that must be called when the custom event function has generated its events. It is the event function's responsibility to make sure `callback` is being called with an array of [Event Objects](event-object).

Here is an example showing how to use an event function to fetch events from a hypothetical XML feed:

```js
new Calendar({
  events: function(start, end, timezone, callback) {
    $.ajax({
      url: 'myxmlfeed.php',
      dataType: 'xml',
      data: {
        // our hypothetical feed requires UNIX timestamps
        start: start.unix(),
        end: end.unix()
      },
      success: function(doc) {
        var events = [];
        $(doc).find('event').each(function() {
          events.push({
            title: $(this).attr('title'),
            start: $(this).attr('start') // will be parsed
          });
        });
        callback(events);
      }
    });
  }
});
```

However, if you have the choice, JSON is a better idea because you can just specify a [feed URL](events-json-feed).

## Extended Form

You can specify [Event Source options](event-source-object#options). This often comes in handy when you are using the [eventSources](eventSources) option to specify multiple event sources and you want certain options to only apply to certain sources. However, to do this, you must write things a little differently:

```js
new Calendar({

  eventSources: [

    // your event source
    {
      events: function(start, end, timezone, callback) {
        // ...
      },
      color: 'yellow',   // an option!
      textColor: 'black' // an option!
    }

    // any other sources...

  ]

});
```
