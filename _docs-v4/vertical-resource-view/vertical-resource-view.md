---
title: Vertical Resource View
since_scheduler_version: 1.1
is_premium: true
children:
  - groupByResource
  - groupByDateAndResource
demos:
  - vertical-resource-standard-demo
  - vertical-resource-custom-demo
  - groupByDateAndResource-demo
  - vertical-resource-resourceRender-demo
---

The [Scheduler add-on]({{ site.baseurl }}/scheduler) provides [agenda view](agenda-view) and [basic view](basic-view) with the ability to display **resources as columns**.

To activate this functionality in a single-day view, simply use `agendaDay` or `basicDay` view and specify the `resources` setting:

```js
var calendar = new Calendar(calendarEl, {
  defaultView: 'agendaDay',
  events: [
    // events go here
  ],
  resources: [
    { id: 'a', title: 'Room A' },
    { id: 'b', title: 'Room B' },
    { id: 'c', title: 'Room C' },
    { id: 'd', title: 'Room D' }
  ]
});
```

If you would like resource column functionality in a **multi-day view** like `agendaWeek`, which is turned **off** by default, you'll need to activate either the [groupByResource](groupByResource) or [groupByDateAndResource](groupByDateAndResource) flags.

The following options are specific to Vertical Resource view. However, there are numerious other options throughout the docs that affect the display of Vertical Resource view, such as the [locale-related options](localization), [date/time display options](date-display), and [resource display options](resource-display).
