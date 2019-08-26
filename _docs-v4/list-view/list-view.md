---
title: List View
children:
  - title: List-View-specific Options
    children:
      - listDayFormat
      - listDayAltFormat
      - noEventsMessage
demos:
  - list-view-demo
---

A list view displays events in a simple vertical list for a specific interval of time. If there are no events during a specific interval of time, the [noEventsMessage](noEventsMessage) is displayed. There are 4 preset list views: **listDay**, **listWeek**, **listMonth**, and **listYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```js
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ listPlugin ],
  defaultView: 'listWeek'
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/list/main.css' rel='stylesheet' />
```

Or you can choose to initialized the List views [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/list/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/list/main.js'></script>
<script>
// ...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'list' ],
  defaultView: 'listWeek'
});
// ...
</script>
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'list'`.

The following settings are specific to list-view. However, many other settings throughout the API also affect list-view as well, such as [eventRender](eventRender) and [eventClick](eventClick).

## Appearance

FullCalendar options and Event properties control the appearance of events in list view. For example, the color of the event dot marker is the same as the event `backgroundColor`. However, a lot more can be achieved in the [`eventRender`](eventRender) callback, where the style object of the [Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) can be modified.

In the following example, we pass non-standard information about events through the `extendedProps` hash property. Then, we change the display of the event row and dot marker depending on a custom _status_ property:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'list' ],
  defaultView: 'listWeek',
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
  eventRender: function(info) {
    if (info.event.extendedProps.status === 'done') {
      // Get the event dot marker element.
      var elt = info.el.getElementsByClassName('fc-event-dot')[0];
      if (elt) {
        // Change color of dot marker.
        elt.setAttribute("style", "background-color:white;");
        // Change background color of row and text color.
        info.el.style.cssText = "background-color:red; color:white;";        
      }               
    }
  }

});
```
