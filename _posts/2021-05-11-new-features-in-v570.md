---
title: New Features in v5.7.0
date: 2021-05-11T00:00:00+00:00
advanced_sidebar: true
---

Version 5.7.0 improves event positioning. See how events in timeGrid have more consistent widths [#5004](https://github.com/fullcalendar/fullcalendar/issues/5004):

--screenshot-before--

--screenshot-after--

Also, both timeGrid and timeline have been given the ability to hide events within a more-link via the [eventMaxStack]({{ site.baseurl }}/docs/eventMaxStack) option ([#4218](https://github.com/fullcalendar/fullcalendar/issues/4218), [#4827](https://github.com/fullcalendar/fullcalendar/issues/4827)):

--screenshot-timegrid--

--screenshot-timeline--

There are many more features/fixes:

- **feature:** [eventMinHeight]({{ site.baseurl }}/docs/eventMinHeight) for timeGrid ([#961](https://github.com/fullcalendar/fullcalendar/issues/961))
- **feature:** [eventMinWidth]({{ site.baseurl }}/docs/eventMinWidth) for timeline ([#4823](https://github.com/fullcalendar/fullcalendar/issues/4823))
- **feature:** [eventShortHeight]({{ site.baseurl }}/docs/eventShortHeight) for timeGrid
- **feature:** [eventOrderStrict]({{ site.baseurl }}/docs/eventOrderStrict) flag to ensure strict event ordering ([#5766](https://github.com/fullcalendar/fullcalendar/issues/5766), [#5767](https://github.com/fullcalendar/fullcalendar/issues/5767))
- **feature:** [scrollTimeReset]({{ site.baseurl }}/docs/scrollTimeReset) flag to not reset scroll state across dates ([#6178](https://github.com/fullcalendar/fullcalendar/issues/6178))
- **fix:** events can be completely hidden behind others with custom `eventOrder` ([#6019](https://github.com/fullcalendar/fullcalendar/issues/6019))
- **fix:** +more shows on days with less events than `dayMaxEvents` ([#6187](https://github.com/fullcalendar/fullcalendar/issues/6187))
- **fix:** +more popover can be scrolled down with page scroll ([#5532](https://github.com/fullcalendar/fullcalendar/issues/5532))
- **fix:** +more popover falls behind the sticky dates header ([#5782](https://github.com/fullcalendar/fullcalendar/issues/5782))
- **fix:** all-day events are displayed in front of the sticky header ([#5596](https://github.com/fullcalendar/fullcalendar/issues/5596))
- **fix:** respect duration in eventOrder as highest precedence ([#5481](https://github.com/fullcalendar/fullcalendar/issues/5481))
- **fix:** refetching events should keep event popover open ([#3958](https://github.com/fullcalendar/fullcalendar/issues/3958))
- **fix:** accidental +more popover close with shadow dom ([#6205](https://github.com/fullcalendar/fullcalendar/issues/6205))

For a full list of changes, <a href='' class='more-link'>read the changelog</a>

Cheers!
