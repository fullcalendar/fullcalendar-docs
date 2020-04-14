---
title: New UI Features in Second Beta Release
date: 2020-04-14T03:00:00+00:00
advanced_sidebar: true
---

We've just released a second beta! This piggybacks off the [first beta release]({{ site.baseurl }}{% post_url 2020-04-06-v5-beta-released %}) and adds some new features:


### List-item Event Display

<img src='{{ site.baseurl }}/docs/v5/event-list-item.png' alt='list-item event-display example' width='170' height='146' style='float:right;margin:-2em 2em 1em 2em' />

In daygrid view, when an event has a time, it is displayed differently. See the screenshot. It has a little colored dot that is controlled by its background/border color. This new display setting is very configurable. See [eventDisplay]({{ site.baseurl }}/docs/v5/eventDisplay).

**Demo:** [month view]({{ site.baseurl }}/docs/v5/month-view-demo)


### Sticky Headers

You can fix the date-headers to the top of the screen as the user scrolls. You can also fix the bottom scrollbar that shows up in timeline or vertical resource view. The new settings are called [stickyHeaderDates]({{ site.baseurl }}/docs/v5/stickyHeaderDates) and [stickyFooterScrollbar]({{ site.baseurl }}/docs/v5/stickyFooterScrollbar) but they are activated by default if you've set your calendar's height to `'auto'`.

**Demos:**
[timegrid]({{ site.baseurl }}/docs/v5/sticky-timegrid-demo) |
[timeline]({{ site.baseurl }}/docs/v5/sticky-timeline-demo) |
[vertical-resource]({{ site.baseurl }}/docs/v5/sticky-resource-timegrid-demo) |
[list view]({{ site.baseurl }}/docs/v5/sticky-list-demo)


### More Breaking Changes

I know it's not cool to release breaking changes in an "API-stable" beta, but we felt it was necessary. Trust us, we've renamed these settings for a reason:

- `defaultView` to `initialView`
- `defaultDate` to `initialDate`
- `header` to `headerToolbar`
- `footer` to `footerToolbar`
- `allDayDefault` to `defaultAllDay`
- `eventRendering` to `eventDisplay` (and `display` in event objects)
- `dir` to `direction`


### Bugs and Other Small Things

We've also released a number of bugfixes based on your feedback. In addition, we've released the [datesDidUpdate]({{ site.baseurl }}/docs/v5/datesDidUpdate) callback.

Please keep the feedback coming!

- [View the Changelog and Upgrade Guide]({{ site.baseurl }}/docs/v5/upgrading-from-v4)
- [View the Docs]({{ site.baseurl }}/docs/v5)
- [Get the Code]({{ site.baseurl }}/docs/v5/getting-started)
