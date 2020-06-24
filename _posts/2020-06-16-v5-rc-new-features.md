---
title: V5 Release Candidate and New Features
date: 2020-06-16T05:05:45+00:00
advanced_sidebar: true
---

The FullCalendar v5 release candidate has been released. If no major bugs are found in the next few days, this will be the exact code that gets shipped for the official v5. Changes since the last pre-release:

- a system for [customizing CSS variables]({{ site.baseurl }}/docs/css-customization#css-variables)
- TypeScript definitions for the [Vue connector]({{ site.baseurl }}/docs/vue#typescript)
- many new settings/methods for managing [event state]({{ site.baseurl }}/docs/upgrading-from-v4#event-manipulation) and [resource state]({{ site.baseurl }}/docs/upgrading-from-v4#resource-manipulation)
- many bugfixes
- minor breaking changes (sorry):
  - renamed `datesDidUpdate` to [datesSet]({{ site.baseurl }}/docs/datesSet), and added more info
  - for the [eventResize]({{ site.baseurl }}/docs/eventResize) callback arg, renamed `prevEvent` to `oldEvent`
  - resources are ordered by ID by default. they no longer sort by natural order

[See the v5-rc changelog &raquo;](https://github.com/fullcalendar/fullcalendar/releases/tag/v5.0.0-rc)

[See the full v5 upgrade guide &raquo;]({{ site.baseurl }}/docs/upgrading-from-v4)

Additionally, these example projects have been updated to include best practices:

- [React example project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/react)
- [React+Redux example project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/react-redux)
- [Vue example project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/vue)
- [Vue+TypeScript example project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/vue-typescript)

Let's cross our fingers that the release candidate goes well! I envision an official release later this week.
