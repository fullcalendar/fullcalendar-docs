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
      - eventMinWidth
      - timeline-view-no-resources
      - article: resource-group-render-hooks
        points:
          - resourceGroupLabelClassNames
          - resourceGroupLabelContent
          - resourceGroupLabelDidMount
          - resourceGroupLabelWillUnmount
          - resourceGroupLaneClassNames
          - resourceGroupLaneContent
          - resourceGroupLaneDidMount
          - resourceGroupLaneWillUnmount
      - article: resource-area-header-render-hooks
        points:
          - resourceAreaHeaderClassNames
          - resourceAreaHeaderContent
          - resourceAreaHeaderDidMount
          - resourceAreaHeaderWillUnmount
related:
  - eventMaxStack
  - resource-render-hooks
  - dateClick
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - slotMinTime
  - slotMaxTime
  - expandRows
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
  - timeline-resource-render-hook-demo
---

[FullCalendar Premium](/pricing) provides a view called "timeline view" with a customizable horizontal time-axis and resources as rows.

The following pre-configured timeline views are available: **timelineDay**, **timelineWeek**, **timelineMonth**, and **timelineYear**. They can be initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save \
  @fullcalendar/core@beta \
  @fullcalendar/resource-timeline@beta
```

```js
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceTimelinePlugin ],
  initialView: 'resourceTimeline',
  resources: [
    // your resource list
  ]
});
...
```

Or, you can choose to initialize Timeline view with the `fullcalendar-scheduler` [global bundle](initialize-globals):

```html
<link href='fullcalendar-scheduler/main.css' rel='stylesheet' />
<script src='fullcalendar-scheduler/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'resourceTimelineWeek',
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
  initialView: 'resourceTimelineFourDays',
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
