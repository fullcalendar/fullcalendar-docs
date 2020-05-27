---
title: Optimizing for Print
layout: docs-sublanding
is_premium: true
images:
  - filename: timeline-print.png
    caption: Print optimization in Timeline view
    url: timeline-standard-view-demo
  - filename: daygrid-print.png
    caption: Print optimization in DayGrid view
  - filename: timegrid-print.png
    caption: Print optimization in TimeGrid view
---

FullCalendar looks great on a computer screen, but by default it does not look very good for printing on a piece of paper. A web browser isn't able to convert certain things consistently, such as absolute positioning and scrollbars. Fortunately FullCalendar can render differently for print if you configure it to do so.

You will need to install `@fullcalendar/adaptive`, which is a [premium plugin](premium):

```
npm install --save @fullcalendar/adaptive@5.0.0-beta.4
```

And then add it to your calendar's plugin list:

```js
import adaptivePlugin from '@fullcalendar/adaptive'

let calendar = new Calendar({
  // ...other settings...
  plugins: [
    // ...other plugins...
    adaptivePlugin
  ]
})
```

**OR,** you can use the `fullcalendar-scheduler` [pre-built bundle](getting-started#pre-built-bundles), which automatically includes the adaptive plugin.

After installing the plugin, print optimization will work automatically!


### Why is it called "adaptive" ?

Why not just call it the "print" plugin? Because this plugin will eventually be able to conditionally render the calendar for scenarios other than print. It will handle tablet and smartphone-sized screens as well.
