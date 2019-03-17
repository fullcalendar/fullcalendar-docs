---
title: Vertical Resource View
is_premium: true
children:
  - datesAboveResources
  - resource-daygrid-view
demos:
  - vertical-resource-standard-demo
  - vertical-resource-custom-demo
  - datesAboveResources-demo
  - vertical-resource-resourceRender-demo
---

The [Scheduler add-on]({{ site.baseurl }}/scheduler) provides [TimeGrid view](timegrid-view) and [DayGrid view](daygrid-view) with the ability to display **resources as columns**. For example, a TimeGrid `day` resource view can be initialized in an [ES6 setup](initialize-es6) like so:

```
npm install --save @fullcalendar/core @fullcalendar/resource-timegrid
```

```js
import { Calendar } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ resourceTimeGridPlugin ],
  defaultView: 'resourceTimeGridDay',
  resources: [
    // your list of resources
  ]
});
...
```

Then you'll need to ensure the correct stylesheets are loaded:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/timegrid/main.css' rel='stylesheet' />
```

Or you can choose to initialized it [entirely with script tags](initialize-globals):

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/timegrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/timegrid/main.js'></script>
<script src='fullcalendar/resource-common/main.js'></script>
<script src='fullcalendar/resource-timegrid/main.js'></script>
<script>
...
let calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'resourceTimeGrid' ],
  defaultView: 'resourceTimeGridDay',
  resources: [
    // your list of resources
  ]
});
...
</script>
```

[DayGrid requires a similar setup &raquo;](resource-daygrid-view)

The following options are specific to Vertical Resource view. However, there are numerous other options throughout the docs that affect the display of Vertical Resource view, such as the [locale-related options](localization), [date/time display options](date-display), and [resource display options](resource-display).
