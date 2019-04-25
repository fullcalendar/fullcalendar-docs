---
title: FullCalendar 2.0.1 Released
date: 2014-06-15T16:40:56+00:00
excerpt_separator: <!--more-->
---

As a followup to releasing [FullCalendar v2](http://blog.arshaw.com/1/post/2014/06/fullcalendar-2-released.html) two weeks ago, today I have released version 2.0.1, mainly a bugfix release. <!--more-->The only backwards incompatibility with v2 is the newly introduced 

_delta_ argument in the [eventDrop](http://arshaw.com/fullcalendar/docs/event_ui/eventDrop/) and [eventResize](http://arshaw.com/fullcalendar/docs/event_ui/eventResize/) handlers. **This affects the argument order**, so if you use **revertFunc**, please be aware.

[View the Changelog](https://github.com/arshaw/fullcalendar/blob/v2.0.1/changelog.md)

On an unrelated note, **I&#8217;m trying to assemble a list of companies that use FullCalendar**. If your company uses FullCalendar and you feel good about this info eventually appearing on the FullCalendar website, [please fill out this form](http://blog.arshaw.com/1/post/2014/06/company-uses-fullcalendar.html).
