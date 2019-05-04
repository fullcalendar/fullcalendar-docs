---
title: 'Alpha Release: Scheduler Support for v4'
date: 2018-12-22T02:50:56+00:00
---

Version 4.0.0-alpha.3 of both FullCalendar Core and Scheduler has been released. This release finally catches up Scheduler with the [large API refactor]({{ site.baseurl }}/blog/2018/10/release-v4-alpha2) of the previous alpha release.

**Update (Jan 11, 2019)** &#8211; Another alpha has been released. [FullCalendar v4.0.0-alpha.4](https://github.com/fullcalendar/fullcalendar/releases/tag/v4.0.0-alpha.4) and [Scheduler v4.0.0-alpha.4](https://github.com/fullcalendar/fullcalendar-scheduler/releases/tag/v4.0.0-alpha.4)

The [Upgrade Guide]({{ site.baseurl }}/docs/upgrading-from-v3) has been updated to mention Scheduler. See the [Timeline View]({{ site.baseurl }}/docs/upgrading-from-v3#timeline-view), [Resource Fetching]({{ site.baseurl }}/docs/upgrading-from-v3#resource-fetching), [Resource Model]({{ site.baseurl }}/docs/upgrading-from-v3#resource-model), and [Resource Rendering]({{ site.baseurl }}/docs/upgrading-from-v3#resource-rendering) sections. Also, please note the minor core behavior changes in the [core changelog](https://github.com/fullcalendar/fullcalendar/blob/v4.0.0-alpha.3/CHANGELOG.md).

In order to get this release into peoples&#8217; hands as fast as possible, some minor Scheduler-related regressions needed to be introduced. See [#479](https://github.com/fullcalendar/fullcalendar-scheduler/issues/479), [#480](https://github.com/fullcalendar/fullcalendar-scheduler/issues/480), [#481](https://github.com/fullcalendar/fullcalendar-scheduler/issues/481), [#482](https://github.com/fullcalendar/fullcalendar-scheduler/issues/482). These will be fixed before the official release.

In terms of the overall v4 release, the hard part is over! All the major refactoring is complete. All that&#8217;s left to do is to modularize the distributable JS files. This should be relatively easy given that an internal plugin system is already being used.

Please start using FullCalendar/Scheduler 4.0.0-alpha.3 and [report bugs you find]({{ site.baseurl }}/reporting-bugs)! Please mention &#8220;v4&#8221; in the title of your issue. For those of you who have already submitted bug reports, thank you. We are working through them.

[Read the full Upgrade Guide »]({{ site.baseurl }}/docs/upgrading-from-v3)

Get 4.0.0-alpha.4 via NPM:

<pre>
npm install fullcalendar@alpha
npm install fullcalendar-scheduler@alpha
</pre>

Or download directly:

* [fullcalendar-4.0.0-alpha.4.zip](https://github.com/fullcalendar/fullcalendar/releases/download/v4.0.0-alpha.3/fullcalendar-4.0.0-alpha.4.zip)
* [fullcalendar-scheduler-4.0.0-alpha.4.zip](https://github.com/fullcalendar/fullcalendar-scheduler/releases/download/v4.0.0-alpha.3/fullcalendar-scheduler-4.0.0-alpha.4.zip)
