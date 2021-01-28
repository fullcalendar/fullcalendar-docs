---
title: A Feature-Packed v3.0 and Scheduler v1.4
date: 2016-09-05T06:50:35+00:00
---

After being in beta for three weeks, FullCalendar v3 has been released. It implements two very long standing features, and introduces some noteworthy breaking changes. A new version of the [premium Scheduler plugin]({{ site.baseurl }}/pricing) has also been released.

### List View

Events can now be displayed in a flat list, grouped by day, with the new &#8220;list&#8221; views:

<img class="alignnone size-medium wp-image-215" style="box-shadow: 0 1px 5px rgba(0, 0, 0, .25);" src="{{ site.baseurl }}/assets/images/blog/listWeek.png" alt="listWeek" width="300" height="166"  sizes="(max-width: 300px) 100vw, 300px" />

<a href="{{ site.baseurl }}/js/fullcalendar-3.0.0/demos/list-views.html" target="_blank">Demo</a> | [Docs]({{ site.baseurl }}/docs/list-view) | <a href="https://github.com/fullcalendar/fullcalendar/issues/560" target="_blank">Ticket</a>

### Clickable Day/Week Numbers

Users can now navigate to other days and weeks by clicking links within the calendar:

<img class="alignnone size-medium wp-image-216" style="box-shadow: 0 1px 5px rgba(0, 0, 0, .25);" src="{{ site.baseurl }}/assets/images/blog/navLinks.png" alt="navLinks" width="300" height="169"  sizes="(max-width: 300px) 100vw, 300px" />

<a href="{{ site.baseurl }}/js/fullcalendar-3.0.0/demos/agenda-views.html" target="_blank">Demo</a> | [Docs]({{ site.baseurl }}/docs/navLinks) | <a href="https://github.com/fullcalendar/fullcalendar/issues/424" target="_blank">Ticket</a>

### Breaking Changes

Compared to the transition between FullCalendar v1 and v2, this transition to v3 should be very easy. There are a few noteworthy breaking changes however:

* IE8 no longer supported
* minimum <a href="http://jquery.com/" target="_blank">jQuery</a> version raised to 2.0.0
* minimum <a href="http://momentjs.com/" target="_blank">Moment</a> version raised to 2.9.0
* the `lang` option renamed to `locale`
* the `lang/*.js` files moved to `locale/*.js`

### Other Stuff

* More control over where a user can drop an event ([eventAllow]({{ site.baseurl }}/docs/eventAllow)) and select ([selectAllow]({{ site.baseurl }}/docs/selectAllow)).
* A new setting for rendering week numbers differently: [weekNumbersWithinDays]({{ site.baseurl }}/docs/v4/weekNumbersWithinDays) (<a href="http://jsbin.com/sekohivetu" target="_blank">view demo</a>). Thanks peternowee!
* The build system has been re-implemented with <a href="http://gulpjs.com/" target="_blank">Gulp</a>, making it much nicer and faster.

<a href="https://github.com/fullcalendar/fullcalendar/releases/tag/v3.0.0" target="_blank">See the full Changelog »</a>

## Scheduler 1.4.0

The core project&#8217;s v3 release is accompanied by a new release of the [premium Scheduler plugin]({{ site.baseurl }}/pricing). Here are the new features:

* mirrored support for [eventAllow]({{ site.baseurl }}/docs/eventAllow) and [selectAllow]({{ site.baseurl }}/docs/selectAllow)
* easily allow or prevent events from changing resources with [eventResourceEditable]({{ site.baseurl }}/docs/eventResourceEditable)
* [eventConstraint]({{ site.baseurl }}/docs/eventConstraint) now accepts resource IDs

<a href="https://github.com/fullcalendar/fullcalendar-scheduler/releases/tag/v1.4.0" target="_blank">See the full Changelog »</a>
