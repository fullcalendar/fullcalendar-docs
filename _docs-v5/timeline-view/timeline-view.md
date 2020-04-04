---
title: Timeline View
is_premium: true
children:
  - title: Timeline-specific Options
    children:
      - resourceGroupField
      - resourceAreaWidth
      - resourceAreaColumns
      - resourcesInitiallyExpanded
      - slotMinWidth
      - resource-render-hooks
      - resource-group-render-hooks
      - resource-area-header-render-hooks
      - timeline-view-no-resources
related:
  - dateClick
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - slotMinTime
  - slotMaxTime
  - nowIndicator
  - scrollTime
  - eventDrop
  - eventReceive
demos:
  - timeline-standard-view-demo
  - timeline-custom-view-demo
  - timeline-resourceGroupField-demo
  - resourceAreaColumns-demo
  - resourceAreaColumns-grouping-demo
  - timeline-resourceRender-demo
---

The [Scheduler add-on]({{ site.baseurl }}/purchase) provides a new view called "timeline view" with a customizable horizontal time-axis and resources as rows.

The following pre-configured timeline views are available: **timelineDay**, **timelineWeek**, **timelineMonth**, and **timelineYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save @fullcalendar/core @fullcalendar/resource-timeline
```

```js
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceTimelinePlugin ],
  defaultView: 'resourceTimeline',
  resources: [
    // your resource list
  ]
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/timeline/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/resource-timeline/main.css' rel='stylesheet' />
```

Or you can choose to initialized the Timeline views [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/timeline/main.css' rel='stylesheet' />
<link href='fullcalendar/resource-timeline/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/timeline/main.js'></script>
<script src='fullcalendar/resource-common/main.js'></script>
<script src='fullcalendar/resource-timeline/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'resourceTimeline' ],
  defaultView: 'resourceTimelineWeek',
  resources: [
    // your resource list
  ]
});
...
</script>
```

If you need a different duration, make a [custom view](custom-view-with-settings) with type `'resourceTimeline'`:

```js
var calendar = new Calendar(calendarEl, {
  defaultView: 'resourceTimelineFourDays',
  views: {
    resourceTimelineFourDays: {
      type: 'resourceTimeline',
      duration: { days: 4 }
    }
  }
});
```

When creating a custom-duration view, reasonable defaults for the slot-related settings will automatically be chosen.

The following options are specific to Timeline view. However, there are numerous other options throughout the docs that affect the display of Timeline view, such as the [locale-related options](localization), [date/time display options](date-display), and [resource display options](resource-display).
