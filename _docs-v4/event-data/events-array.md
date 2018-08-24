---
title: events (as an array)
---

An array of [Event Objects](event-object) that will be displayed on the calendar.

Here is an example of how to specify an array of events:

```js
$('#calendar').fullCalendar({
  events: [
    {
      title  : 'event1',
      start  : '2010-01-01'
    },
    {
      title  : 'event2',
      start  : '2010-01-05',
      end    : '2010-01-07'
    },
    {
      title  : 'event3',
      start  : '2010-01-09T12:30:00',
      allDay : false // will make the time show
    }
  ]
});
```

Make sure you do not have a comma after the last event in your array! It will make Internet Explorer choke.

## Extended Form

You can specify [Event Source options](event-source-object#options). This often comes in handy when you are using the [eventSources](eventSources) option to specify multiple event sources and you want certain options to only apply to certain sources. However, to do this, you must write things a little differently:

```js
$('#calendar').fullCalendar({

  eventSources: [

    // your event source
    {
      events: [ // put the array in the `events` property
        {
          title  : 'event1',
          start  : '2010-01-01'
        },
        {
          title  : 'event2',
          start  : '2010-01-05',
          end    : '2010-01-07'
        },
        {
          title  : 'event3',
          start  : '2010-01-09T12:30:00',
        }
      ],
      color: 'black',     // an option!
      textColor: 'yellow' // an option!
    }

    // any other event sources...

  ]

});
```

A list of available Event Source options can be found [here](event-source-object#options).
