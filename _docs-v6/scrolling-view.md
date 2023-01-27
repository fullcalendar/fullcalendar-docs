---
title: Scrolling View
demos:
  - multimonth-view-stack-demo
  - daygridyear-view-demo
---

To a display an entire year (or other large interval) as a scrollable grid of days, use one of the following techniques:


<h2 id='multimonth'>A) With month breaks</h2>

Use a [multimonth view in vertical-stack mode](multimonth-view#vertical-stack) to achieve this. Each month has a header that visually separates it from other months. Each month's header will stick to the top of the scroll container. Screenshot:

Screenshot here.


<h2 id='daygrid'>B) Without month breaks</h2>

Use [daygrid view with a large duration](daygrid-view#large-duration) to achieve this. There will be a continuous grid of days without month breaks. The first day cell of any new month will have a bold title. Screenshot:

Screenshot here.


<h2>Future developments</h2>

Using either technique, views will have a specific duration. They are not endlessly-scrollable. When the user reaches the end of the view, they will be forced to press the "next" button to proceed. Please [vote for this ticket](https://github.com/fullcalendar/fullcalendar/issues/2276) if you'd like endless-scrolling implemented.
