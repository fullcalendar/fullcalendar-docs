---
title: Event Popover
children:
  - dayMaxEventRows
  - dayMaxEvents
  - moreLinkClick
  - dayPopoverFormat
  - article: more-link-render-hooks
    points:
      - moreLinkClassNames
      - moreLinkContent
      - moreLinkDidMount
      - moreLinkWillUnmount
demos:
  - event-popover-demo
---

When not all events will fit in a given day, you can display the excess events in a small window that will show up when the user clicks a "more" link.

This UI component only applies to [Month view](month-view), [DayGrid view](daygrid-view), and the "all-day" slot of [TimeGrid view](timegrid-view).
