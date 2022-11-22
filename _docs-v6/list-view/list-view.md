---
title: List View
children:
  - title: List-View-specific Options
    children:
      - listDayFormat
      - listDaySideFormat
      - article: no-events-render-hooks
        points:
          - noEventsClassNames
          - noEventsContent
          - noEventsDidMount
          - noEventsWillUnmount
demos:
  - list-view-demo
---

A list view displays events in a simple vertical list for a specific interval of time. If there are no events during a specific interval of time, the "No events to display" screen is displayed, which can be customized via [render hooks](no-events-render-hooks). There are 4 preset list views: **listDay**, **listWeek**, **listMonth**, and **listYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ listPlugin ],
  initialView: 'listWeek'
});
...
```

Or you can choose to initialized the List views [as a global bundle](initialize-globals):

```html
<script src='fullcalendar/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'listWeek'
});
...
</script>
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'list'`.

The following settings are specific to list-view. However, many other settings throughout the API also affect list-view as well, such as  in the [event render hooks](event-render-hooks) and [eventClick](eventClick).

## Event Appearance

FullCalendar options and Event properties control the appearance of events in list view. For example, the color of the event dot marker is the same as the event `backgroundColor`. However, a lot more can be achieved in the [event render hooks](event-render-hooks), where the style object of the [Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) can be modified.

In the following example, we pass non-standard information about events through the `extendedProps` hash property. Then, we change the display of the event row and dot marker depending on a custom _status_ property:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'listWeek',
  events: [
    {
      title: 'Meeting',
      start: '2019-08-12T14:30:00',
      extendedProps: {
        status: 'done'
      }
    },
    {
      title: 'Birthday Party',
      start: '2019-08-13T07:00:00',
      backgroundColor: 'green',
      borderColor: 'green'
    }
  ],
  eventDidMount: function(info) {
    if (info.event.extendedProps.status === 'done') {

      // Change background color of row
      info.el.style.backgroundColor = 'red';

      // Change color of dot marker
      var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
      if (dotEl) {
        dotEl.style.backgroundColor = 'white';
      }
    }
  }

});
```
