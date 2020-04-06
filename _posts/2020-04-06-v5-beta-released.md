---
title: V5 Beta Released
date: 2020-04-06T08:15:24+00:00
advanced_sidebar: true
---

The v5 beta has been released! It contains all the high-level changes mentioned in the [previous blog post]({% post_url 2020-02-05-changes-in-the-upcoming-v5 %}), with one exception. It mentioned a "few" settings names would be changed. In fact, about 3 dozen were changed. Why?

Using a virtual DOM internally necessitated changing the API for how custom content is injected, for example, DOM manipulation done in `eventRender`, one of the most popular options in FullCalendar's API. It has been replaced by [Event Render Hooks]({{ site.baseurl }}/docs/v5/event-render-hooks). They offer everything `eventRender` offered, but with a cleaner API that's more compatible with FullCalendar's internals.

While implementing these render hooks for events, I figured, why not implement them for many other parts of the UI? It resulted in many additional hooks: [Day-Header]({{ site.baseurl }}/docs/v5/day-header-render-hooks), [Day-Cell]({{ site.baseurl }}/docs/v5/day-cell-render-hooks), [Slot]({{ site.baseurl }}/docs/v5/slot-render-hooks), [All-Day]({{ site.baseurl }}/docs/v5/all-day-render-hooks), [Week-Number]({{ site.baseurl }}/docs/v5/week-number-render-hooks), [Now-Indicator]({{ site.baseurl }}/docs/v5/now-indicator-render-hooks), [More-Link]({{ site.baseurl }}/docs/v5/more-link-render-hooks), [No-Events]({{ site.baseurl }}/docs/v5/no-events-render-hooks), [View]({{ site.baseurl }}/docs/v5/view-render-hooks), [Resource]({{ site.baseurl }}/docs/v5/resource-render-hooks), [Resource Group]({{ site.baseurl }}/docs/v5/resource-group-render-hooks), [Resource-Area Header]({{ site.baseurl }}/docs/v5/resource-area-header-render-hooks), and hooks withing [resourceAreaColumns]({{ site.baseurl }}/docs/v5/resourceAreaColumns). FullCalendar is now more customizable than ever!

**Please try out the new beta:**

- [View the Changelog and Upgrade Guide]({{ site.baseurl }}/docs/v5/upgrading-from-v4)
- [View the Docs]({{ site.baseurl }}/docs/v5) (they are a work-in-progress)
- [Get the Code]({{ site.baseurl }}/docs/v5/getting-started)

The plan is to make the official release in 4-6 weeks, so early to mid May. Until then I will be collecting bug reports, cleaning up and optimizing the code, and going through the "not yet implemented" items listed in the changelog.
