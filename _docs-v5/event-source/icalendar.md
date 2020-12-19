---
title: events from an iCalendar feed
excerpt_separator: <!--more-->
---

FullCalendar can display events from a public [iCalendar](https://en.wikipedia.org/wiki/ICalendar) feed.<!--more--> This functionality is available as of `v5.5.0`.

First, install the `@fullcalendar/icalendar` package:

```
npm install --save @fullcalendar/icalendar
```

Then, initialize your calendar with the plugin. Use the `events` option to provide an [event source](event-source-object) that contains a `url` property and a `format:'ics'` property:

```js
import dayGridPlugin from '@fullcalendar/daygrid'
import iCalendarPlugin from '@fullcalendar/icalendar'

var calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, iCalendarPlugin],
  events: {
    url: 'https://mywebsite/icalendar-feed.ics',
    format: 'ics'
  }
})

calendar.render()
```

Your iCalendar feed will be queried upon calendar load and will not be queried after. Unlike a [json feed](events-json-feed), the URL will not be queried when the user navigates forward or backward in time.

The URL will be requeried when the [refetchEvents](Calendar-refetchEvents) or [EventSource::refetch](EventSource-refetch) methods are called.
