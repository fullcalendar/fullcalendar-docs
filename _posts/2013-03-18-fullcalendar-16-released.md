---
id: 10
title: FullCalendar 1.6 Released
date: 2013-03-18T02:29:07+00:00
author: arshaw
layout: post
excerpt_separator: <!--more-->
guid: http://8
dsq_thread_id:
  - "1735759363"
---
<div style="margin: 1em 0; text-align: left;">
  Version 1.6 is the most feature-packed release in a while. The feature list was mainly driven by pull requests I received through Github. I want to make FullCalendar a more community-based project, so this is a good place to start. Thank you to all the contributors!<!--more-->
</div>

<div>
  <!--BLOG_SUMMARY_END-->
</div>

<h2 style="text-align: left;">
  New Look
</h2>

<img class="size-full wp-image-22 alignright" alt="6972035_orig" src="/assets/images/blog/2013/03/6972035_orig.png" width="297" height="176" /> First off, FullCalendar got a facelift. The default look now sports Bootstrap-inspired buttons and colors for a much more updated look. It utilizes CSS3, but degrades nicely on older browsers.

On a related note, the HTML markup that comprises buttons and events has been simplified. It will hopefully easier to style. If you are upgrading to this version and have custom CSS that depends on the old HTML skeletons for buttons or events, you might need to rework your CSS a bit.

<hr style="clear: both; visibility: hidden; width: 100%;" />

<h2 style="text-align: left;">
  New Features
</h2>

<div style="margin: 1em 0; text-align: left;">
  <ul>
    <li>
      hook for modify a day&#8217;s cell (<a title="" href="http://arshaw.com/fullcalendar/docs/display/dayRender/">dayRender</a>)
    </li>
    <li>
      week numbers on side of calendar (<a title="" href="http://arshaw.com/fullcalendar/docs/display/weekNumbers/">weekNumbers</a>, <a href="http://arshaw.com/fullcalendar/docs/text/weekNumberTitle/">weekNumberTitle</a>)
    </li>
    <li>
      finer granularity for event dragging (<a title="" href="http://arshaw.com/fullcalendar/docs/agenda/snapMinutes/">snapMinutes</a>)
    </li>
    <li>
      hook for knowing when all events have rendered (<a title="" href="http://arshaw.com/fullcalendar/docs/event_rendering/eventAfterAllRender/">eventAfterAllRender</a>)
    </li>
    <li>
      hook for more convenient event data receiving (<a title="" href="http://arshaw.com/fullcalendar/docs/event_data/eventDataTransform/">eventDataTransform</a>)
    </li>
  </ul>
  
  <p>
    <a title="" href="http://arshaw.com/js/fullcalendar-1.6.0/changelog.txt">View the full changelog</a>
  </p>
</div>

<h2 style="text-align: left;">
  jQuery and jQuery UI Support
</h2>

<div style="margin: 1em 0; text-align: left;">
  FullCalendar has been tested and bundled with the latest jQuery (1.9.1) and jQuery UI (1.10.2).
</div>

In the past, FullCalendar has always supported 2 versions of each library: one new version, and one &#8220;legacy&#8221; version. Starting with this release, FullCalendar will only support the newest minor version of each library. So, for this release, jQuery 1.9.x and jQuery UI 1.10.x are supported. Although older versions may work fine.

<h2 style="text-align: left;">
  IE6 Support
</h2>

<div style="margin: 1em 0; text-align: left;">
  To ease development, and because barely anyone uses this horrid browser anymore, support for IE6 has been officially dropped. There is still support for IE7 and above however.
</div>

<h2 style="text-align: left;">
  License
</h2>

<div style="margin: 1em 0; text-align: left;">
  FullCalendar has been dual-licensed under an open source MIT and GPL license (you could pick which one you wanted). Now, FullCalendar is <em>only</em> licensed under the MIT license. You can always relicense it under GPL if you need to. This is the exact direction the <a title="" href="http://blog.jquery.com/2012/09/10/jquery-licensing-changes/">jQuery project took</a>, because it simplifies things. Don&#8217;t worry, FullCalendar is still free and open source!
</div>

<h2 style="text-align: left;">
  Internal Build System
</h2>

<div style="margin: 1em 0; text-align: left;">
  For internal development, FullCalendar now harnesses the <a href="http://gruntjs.com/">Grunt</a> and <a href="http://walmartlabs.github.com/lumbar/">Lumbar</a> build systems. These systems improve development workflow and help organize a growing codebase.
</div>

<h2 style="text-align: left;">
  Bower Component
</h2>

<div style="margin: 1em 0; text-align: left;">
  <a href="http://twitter.github.com/bower/">Bower</a> is a package manger for managing web-based dependencies. FullCalendar now has an entry in the Bower <a href="http://sindresorhus.com/bower-components/">component registry</a>, so installing FullCalendar could be as easy as typing &#8220;bower install fullcalendar&#8221;.
</div>