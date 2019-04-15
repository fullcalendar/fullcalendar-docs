---
id: 48
title: FullCalendar v2beta and how you can help
date: 2014-02-03T01:36:16+00:00
author: arshaw
layout: post
excerpt_separator: <!--more-->
guid: http://blog.arshaw.com/?p=48
dsq_thread_id:
  - "2213587711"
---
I have just released a second iteration of v2 beta. I&#8217;m calling it v2.0.0-beta2.

v2 contains many new improvements, notably [MomentJS](http://momentjs.com/) integration, timezone support, and built-in internationalization. It is important to note that it is a non-backwards-compatible release.<!--more-->

  * [A breakdown of what&#8217;s new](http://arshaw.com/fullcalendar/wiki/Upgrading-to-2/)
  * [documentation](http://arshaw.com/fullcalendar/docs2/)
  * [download](http://arshaw.com/fullcalendar/download/)
  * [github development branch](https://github.com/arshaw/fullcalendar/commits/v2)

The code is feature-complete but sorely in need of automated tests. In previous releases I have manually tested most features. That technique won&#8217;t scale up for this release because so much has changed. And it is obviously good for future development in general to have automated tests.

We have a [Karma](http://karma-runner.github.io/) + [Jasmine](http://pivotal.github.io/jasmine/) setup going with a few tests written. The goal is to have all new features, or existing features that have changed or been affected in some way, to be under test. Only when this happens will we be able to release v2.

**If you would like to help out the FullCalendar project by writing automated tests, please [contact me](http://arshaw.com/about/)!** I&#8217;ll get you set up with all the resources you&#8217;ll need.

Additionally, simply downloading and using the new beta release is also helpful. Please use the existing [bug report instructions](http://arshaw.com/fullcalendar/wiki/Report-a-Bug/), but prepend &#8220;[v2]&#8221; to the issue name.

Thanks! ~Adam