---
id: 88
title: FullCalendar 2.1.0 Released
date: 2014-08-26T00:35:11+00:00
author: arshaw
layout: post
guid: http://blog.arshaw.com/?p=88
excerpt_separator: <!--more-->
dsq_thread_id:
  - "2959841210"
---
**Version 2.1.0 has been officially release today**, after being [in beta](http://blog.arshaw.com/1/post/2014/07/fullcalendar-210-beta.html) for a month. It is jam-packed with features and bugfixes. [32 issues](https://code.google.com/p/fullcalendar/issues/list?can=1&q=milestone%3Dskeleton) have been closed, many of which are major and required a significant code refactor.<!--more-->

**Many of the calendar&#8217;s CSS class-names have changed**, which is a backwards-compatibility concern. And the base CSS has been almost completely rewritten. So if you have custom CSS styling an old version of FullCalendar, it probably won&#8217;t work on the newest version. JavaScript API compatibility has been maintained however.

**The [too many events issue](https://code.google.com/p/fullcalendar/issues/detail?id=304) has been implemented**, the most demanded feature. When [eventLimit](http://arshaw.com/fullcalendar/docs/display/eventLimit/) is enabled, a link will appear on days that have lots of events, with the option to see more. When enabled, the default behavior is to display a popover panel with all the events. This behavior can be fine-tuned with [eventLimitClick](http://arshaw.com/fullcalendar/docs/display/eventLimitClick/).

<img class="alignnone wp-image-91 size-full" style="vertical-align: top;" src="/assets/images/blog/2014/08/more_before_open.gif" alt="more_before_open" width="191" height="163" />                 <img class="alignnone wp-image-92 size-full"  src="/assets/images/blog/2014/08/more_after_open.gif" alt="more_after_open" width="260" height="190" />

**[Rendering for printers](https://code.google.com/p/fullcalendar/issues/detail?id=35) has been greatly improved.** In the past, this behavior was rather glitchy, especially cross-browser, but it has been fixed with robust tailored CSS for each view.

[<img class="alignnone size-full wp-image-97" src="/assets/images/blog/2014/08/printing_example.gif" alt="printing_example" width="481" height="238" />](/assets/images/blog/2014/08/printing_example.gif)

**jQuery UI has been dropped as a dependency** due to this version&#8217;s alternate techniques to event drag-n-drop and resizing. You no longer need to include any jQuery UI scripts on your page for anything FullCalendar-related.

[<img class="alignnone size-full wp-image-101" src="/assets/images/blog/2014/08/no_jqui.gif" alt="no_jqui" width="310" height="140" />](/assets/images/blog/2014/08/no_jqui.gif)

Ironically, with addition of many new features and the removal of a dependency, because of smart code reuse, the file size of the minified JS stayed roughly the same.

**For a full list of changes, in addition to some minor backwards-incompatibility notes, please see the [full changelog](https://github.com/arshaw/fullcalendar/releases/tag/v2.1.0).**

Thank you to everyone who helped out with reporting issues during the beta period! Going forward, if you experience any issues, whether related to the new features or not, please follow the [Bug Report Instructions](http://arshaw.com/fullcalendar/wiki/Reporting-Bugs/).