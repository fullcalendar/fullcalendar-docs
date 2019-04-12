---
id: 75
title: FullCalendar 2.1.0 Beta
date: 2014-07-23T16:36:41+00:00
author: arshaw
layout: post
excerpt_separator: <!--more-->
guid: http://blog.arshaw.com/?p=75
permalink: blog/:year/:month/:title/
dsq_thread_id:
  - "2868228638"
categories:
  - Uncategorized
---
**Version 2.1.0 (now in beta) contains a large internal refactor** of the view rendering code. This refactor allowed for a whopping [30 issues](https://code.google.com/p/fullcalendar/issues/list?can=2&q=milestone=skeleton) to be addressed, most importantly [problems with printing](https://code.google.com/p/fullcalendar/issues/detail?id=35) and scrolling-related issues for [Month](https://code.google.com/p/fullcalendar/issues/detail?id=728) and [Agenda](https://code.google.com/p/fullcalendar/issues/detail?id=521) views. FullCalendar&#8217;s HTML/CSS skeleton has changed a lot, but API compatibility with previous version has been maintained.<!--more-->

**UPDATE (Aug 19):** beta3 has been released which addresses a number of smaller issues. [See the changelog](https://github.com/arshaw/fullcalendar/releases/tag/v2.1.0-beta3).

**UPDATE (Aug 4): [The maximum number of events feature](https://code.google.com/p/fullcalendar/issues/detail?id=304)** has been implemented in v2.1.0-beta2. For a breakdown of the new options, follow the links in the [beta2 changelog.](https://github.com/arshaw/fullcalendar/releases/tag/v2.1.0-beta2) For a demo, [go here](http://arshaw.com/js/fullcalendar-2.1.0-beta2/demos/agenda-views.html).

**Dependence upon jQuery UI has been removed**. You need longer need it for event dragging, resizing, or anything else. Hacking the library to achieve some of FullCalendar&#8217;s complex dragging and dropping behavior became unsustainable, so this functionality is now built-in. Ironically, because of smart code reuse with the refactor, the gzipped FullCalendar JS file size actually went _down_.

**[See the changelog](https://github.com/arshaw/fullcalendar/releases)** for more information, as well as notes about minor backwards-incompatibilities.

**[Download the release as a ZIP](https://github.com/arshaw/fullcalendar/releases/download/v2.1.0-beta1/fullcalendar-2.1.0-beta1.zip)** or use Bower to install it via  
\`_bower install fullcalendar#2.1.0-beta1_\`.

**Bug reports and feedback are greatly appreciated**. When reporting a bug, please follow the [bug report instructions](http://arshaw.com/fullcalendar/wiki/Reporting-Bugs/) and when entering it on the [issue tracker](https://code.google.com/p/fullcalendar/issues/list), please prefix the title with the text _[skeleton]_.

**I want to achieve full automated test coverage** before officially releasing v2.1.0. If you would like to help speed this process along, which would be awesome, please see the [Automated Test Readme](https://github.com/arshaw/fullcalendar/wiki/Automated-Tests).

&nbsp;