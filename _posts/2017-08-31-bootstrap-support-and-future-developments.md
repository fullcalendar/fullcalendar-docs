---
title: Bootstrap Support and Future Developments
date: 2017-08-31T17:07:14+00:00
---

FullCalendar 3.5.0 and [Scheduler]({{ site.baseurl }}/scheduler/) 1.7.0 offers built-in <a href="https://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap 3</a> theme support. Include a Bootstrap theme&#8217;s stylesheet on your page, set the [`themeSystem`]({{ site.baseurl }}/docs/display/themeSystem/) options to `'bootstrap3'` and you&#8217;re off to the races. Big thanks to <a href="https://github.com/joankaradimov" target="_blank">@joankaradimov</a> for the bulk of the implementation.

Try out different themes with the <a href="https://fullcalendar.io/js/fullcalendar-3.5.0/demos/themes.html" target="_blank">new theme browser »</a>

<a href="https://fullcalendar.io/js/fullcalendar-3.5.0/demos/themes.html" target="_blank"><img style="margin-left: 10px;" src="{{ site.baseurl }}/assets/images/blog/theme-chooser.png" alt="" width="358" height="289" alt="theme chooser" /></a>

The [`theme`]({{ site.baseurl }}/docs/display/theme/) option is now deprecated, but will continue to function. Use [`themeSystem`]({{ site.baseurl }}/docs/display/themeSystem/) instead.

We are aware that <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a> is in beta. Once a stable version is released, it shouldn&#8217;t be hard to make an adapter for FullCalendar.

## Performance and other things

Version 3.5.0 provides a 25% performance improvement for event rendering. This is because less internal Moment objects are used while rendering. Rendering performance will continue to improve in future versions.

There are also a number of bugfixes in 3.5.0. <a href="https://github.com/fullcalendar/fullcalendar/releases/tag/v3.5.0" target="_blank">See the full changelog »</a>

## What the future brings

Some of you may have noticed that in the past few months, there has been a lot of <a href="https://github.com/fullcalendar/fullcalendar/commits/master" target="_blank">activity on Github</a>, but sadly, features are not being rapidly pumped out. This is because FullCalendar (and [Scheduler]({{ site.baseurl }}/scheduler/)) are undergoing some long-overdue refactoring. The technical debt accumulated over the course of the project&#8217;s 8 year lifespan has slowed the development of new features. This next round of changes will be released as a backwards-compatible 3.6.0 and will provide a solid base for future features.

Examples of features that will be much easier to implement:

* new views, like <a href="https://github.com/fullcalendar/fullcalendar/issues/1140" target="_blank">year view</a> and <a href="https://github.com/fullcalendar/fullcalendar/issues/470" target="_blank">multi-month</a> view
* better <a href="https://github.com/fullcalendar/fullcalendar/issues?q=is%3Aopen%20is%3Aissue%20label%3AResponsive" target="_blank">responsive rendering</a> and more sane HTML markup
* <a href="https://github.com/fullcalendar/fullcalendar-scheduler/issues/110" target="_blank">horizontal scrolling in agenda views</a>
* <a href="https://github.com/fullcalendar/fullcalendar/issues/387" target="_blank">recurring events</a>

After 3.6.0 is released, many of the above features will be tackled. Then, we will start gearing up for 4.0.0, which will be a backwards-incompatible release that will include:

* removal of jQuery as a dependency
* better <a href="https://github.com/fullcalendar/fullcalendar/issues?q=is%3Aopen+is%3Aissue+label%3ATimezone" target="_blank">timezone handling</a>
* selective feature loading via ES6 modules
* reworked settings, callback signatures, and exposed models

Please comment if you have feedback!
