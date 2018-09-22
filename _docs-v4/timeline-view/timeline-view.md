---
title: Timeline View
is_premium: true
children:
  - title: Timeline-specific Options
    children:
      - resourceGroupField
      - resourceGroupText
      - resourceAreaWidth
      - resourceLabelText
      - resourceColumns
      - resourcesInitiallyExpanded
      - slotWidth
related:
  - dateClick
  - slotDuration
  - slotLabelFormat
  - slotLabelInterval
  - minTime
  - maxTime
  - nowIndicator
  - scrollTime
  - eventDrop
  - eventReceive
demos:
  - timeline-standard-view-demo
  - timeline-custom-view-demo
  - timeline-resourceGroupField-demo
  - resourceColumns-demo
  - resourceColumns-grouping-demo
  - timeline-resourceRender-demo
---

The [Scheduler add-on]({{ site.baseurl }}/scheduler) provides a new view called "timeline view" with a customizable horizontal time-axis and resources as rows.

The following pre-configured timeline views are available: **timelineDay**, **timelineWeek**, **timelineMonth**, and **timelineYear**. They can be initialied like so:

```js
$('#calendar').fullCalendar({
  defaultView: 'timelineDay'
});
```

If you need a different duration, make a [custom view](custom-view-with-settings) with type `'timeline'`:

```js
$('#calendar').fullCalendar({
  header: [
    center: 'month,timelineFourDays'
  ],
  views: {
    timelineFourDays: {
      type: 'timeline',
      duration: { days: 4 }
    }
  }
});
```

When creating a custom-duration view, reasonable defaults for the slot-related settings will automatically be chosen.

The following options are specific to Timeline view. However, there are numerious other options throughout the docs that affect the display of Timeline view, such as the [locale-related options](localization), [date/time display options](date-display), and [resource display options](resource-display).
