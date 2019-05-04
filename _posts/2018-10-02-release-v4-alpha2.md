---
title: 'Alpha Release: Big API Revamp'
date: 2018-10-02T05:50:06+00:00
---

Version 4.0.0-alpha.2 is now available. When the 4.0.0 is officially released, it will be the biggest FullCalendar release to date. It sheds a number of outdated dependencies and offers a more modern API. It is also the first time connector plugins to third-party libraries are offered.

[View release notes and upgrade guide »]({{ site.baseurl }}/docs/v4/release-notes)

**Major breaking changes:**

* Removal of jQuery as a dependency. Consequently:
    * Raw DOM nodes are used in place of jQuery objects
    * Calendar initialization no longer happens via a jQuery method.
* Removal of Moment JS as a dependency. Consequently:
    * Native Date objects are used in place of Moment objects.
    * Time zone support was reworked and is now more intuitive.
    * Date formatting is delegated to the native [DateTimeFormat API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat).
* A more object-oriented API. There are distinct <code class="highlighter-rouge">Calendar</code>, <code class="highlighter-rouge">EventSource</code>, and <code class="highlighter-rouge">Event</code> classes.
* Many settings and callbacks have been renamed, reworked, or their arguments have changed.
* IE 9 & 10 support has been dropped. Only IE11 and Edge are supported.

**Major new features:**

* Recurring events (a [“simple” implementation]({{ site.baseurl }}/docs/v4/recurring-events) and an [RRule plugin]({{ site.baseurl }}/docs/v4/rrule-plugin))
* Event drag & drop between two calendars. [Demo]({{ site.baseurl }}/docs/v4/other-calendar-dragging-demo)
* Built-in draggable API for external elements/events. Consequently, jQuery UI is no longer needed for this.
* Connector plugins for [Moment JS]({{ site.baseurl }}/docs/v4/moment-plugins), [Moment Timezone]({{ site.baseurl }}/docs/v4/moment-plugins#fullcalendar-moment-timezone), and [Luxon]({{ site.baseurl }}/docs/v4/luxon-plugin)
* Smoother auto-scrolling during dragging/resizing/selecting. Also, multiple containers can now be auto-scrolled. [Issue 2761](https://github.com/fullcalendar/fullcalendar/issues/2761)
* Touch scrolling works better with event and date unselecting. [Issue 3530](https://github.com/fullcalendar/fullcalendar/issues/3530)

[View release notes and upgrade guide »]({{ site.baseurl }}/docs/v4/release-notes)
