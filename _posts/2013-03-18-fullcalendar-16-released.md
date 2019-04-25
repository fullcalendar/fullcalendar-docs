---
title: FullCalendar 1.6 Released
date: 2013-03-18T02:29:07+00:00
---

Version 1.6 is the most feature-packed release in a while. The feature list was mainly driven by pull requests I received through Github. I want to make FullCalendar a more community-based project, so this is a good place to start. Thank you to all the contributors!


## New Look

<img class="size-full wp-image-22 alignright" alt="6972035_orig" src="{{ site.baseurl }}/assets/images/blog/2013/03/6972035_orig.png" width="297" height="176" /> First off, FullCalendar got a facelift. The default look now sports Bootstrap-inspired buttons and colors for a much more updated look. It utilizes CSS3, but degrades nicely on older browsers.

On a related note, the HTML markup that comprises buttons and events has been simplified. It will hopefully easier to style. If you are upgrading to this version and have custom CSS that depends on the old HTML skeletons for buttons or events, you might need to rework your CSS a bit.

<hr style="clear: both; visibility: hidden; width: 100%;" />


## New Features

- hook for modify a day's cell  ([dayRender](http://arshaw.com/fullcalendar/docs/display/dayRender/))
- week numbers on side of calendar ([weekNumbers](http://arshaw.com/fullcalendar/docs/display/weekNumbers/), [weekNumberTitle](http://arshaw.com/fullcalendar/docs/text/weekNumberTitle/))
- finer granularity for event dragging ([snapMinutes](http://arshaw.com/fullcalendar/docs/agenda/snapMinutes/))
- hook for knowing when all events have rendered ([eventAfterAllRender](http://arshaw.com/fullcalendar/docs/event_rendering/eventAfterAllRender/))
- hook for more convenient event data receiving ([eventDataTransform](http://arshaw.com/fullcalendar/docs/event_data/eventDataTransform/))

[View the full changelog](http://arshaw.com/js/fullcalendar-1.6.0/changelog.txt)


## jQuery and jQuery UI Support

FullCalendar has been tested and bundled with the latest jQuery (1.9.1) and jQuery UI (1.10.2).

In the past, FullCalendar has always supported 2 versions of each library: one new version, and one &#8220;legacy&#8221; version. Starting with this release, FullCalendar will only support the newest minor version of each library. So, for this release, jQuery 1.9.x and jQuery UI 1.10.x are supported. Although older versions may work fine.


## IE6 Support

To ease development, and because barely anyone uses this horrid browser anymore, support for IE6 has been officially dropped. There is still support for IE7 and above however.


## License

FullCalendar has been dual-licensed under an open source MIT and GPL license (you could pick which one you wanted). Now, FullCalendar is <em>only</em> licensed under the MIT license. You can always relicense it under GPL if you need to. This is the exact direction the <a title="" href="http://blog.jquery.com/2012/09/10/jquery-licensing-changes/">jQuery project took</a>, because it simplifies things. Don&#8217;t worry, FullCalendar is still free and open source!


## Internal Build System

For internal development, FullCalendar now harnesses the <a href="http://gruntjs.com/">Grunt</a> and <a href="http://walmartlabs.github.com/lumbar/">Lumbar</a> build systems. These systems improve development workflow and help organize a growing codebase.


## Bower Component

<a href="http://twitter.github.com/bower/">Bower</a> is a package manger for managing web-based dependencies. FullCalendar now has an entry in the Bower <a href="http://sindresorhus.com/bower-components/">component registry</a>, so installing FullCalendar could be as easy as typing &#8220;bower install fullcalendar&#8221;.
