---
id: 316
title: 'Alpha Release: jQuery Removal'
date: 2018-04-13T20:04:10+00:00
author: arshaw
layout: post
guid: https://fullcalendar.io/blog/?p=316
excerpt_separator: <!--more-->
dsq_thread_id:
  - "6612040761"
---
Removing jQuery from the codebase will make FullCalendar more lightweight and allow for better integration with React/Vue/Angular. We have completed the detangling process!<!--more-->

Removing jQuery as a dependency is a non-backwards-compatible change of course, warranting a major version bump to v4.0.0. We will use this as an opportunity to introduce other breaking changes. A spec will soon be released detailing these changes. Subsequently,  community feedback will be gathered.

Prior to v4.0.0, we wanted to release an alpha containing the jQuery removal. If you are interested in playing around with it, here are some things you should know about the API:

  * Initializing a calendar and calling a calendar&#8217;s methods are now done in an object-oriented way.
  * All parts of the API that previously exposed jQuery objects now expose raw DOM nodes or arrays of raw DOM nodes.
  * We now rely on <a href="https://visionmedia.github.io/superagent/" target="_blank">SuperAgent</a> for ajax requests. We will eventually provide a way for you to [tree-shake](https://webpack.js.org/guides/tree-shaking/) it away if you don&#8217;t need it.
  * Drag-and-drop of external elements into a calendar instance can still be done with jQuery UI, but you&#8217;ll need to use a connector. We&#8217;ve provided this connector, along with a connector for <a href="https://bevacqua.github.io/dragula/" target="_blank">Dragula</a> if you want to use that instead.
  * We&#8217;ve dropped support for IE9

For API examples and downloads:

  * **fullcalendar 4.0.0-alpha**  
    <a href="https://github.com/fullcalendar/fullcalendar/tree/jquery-removal/demos" target="_blank">code samples</a> | <a href="https://github.com/fullcalendar/fullcalendar/releases/tag/v4.0.0-alpha" target="_blank">download</a> or run `npm install fullcalendar@alpha`
  * **fullcalendar-scheduler 4.0.0-alpha.2**  
    <a href="https://github.com/fullcalendar/fullcalendar-scheduler/tree/jquery-removal/demos" target="_blank">code samples</a> | <a href="https://github.com/fullcalendar/fullcalendar-scheduler/releases/tag/v4.0.0-alpha.2" target="_blank">download</a> or run `npm install fullcalendar-scheduler@alpha`

Please leave a comment if you have feedback!

## Paid Contractor Positions

We are hiring for two paid contractor positions. These positions will help out with the release of v4 as well as contribute on an ongoing basis:

  * Test Automation Engineer
  * Technical Documentation Writer

[More information + How to Apply »](https://fullcalendar.io/opportunities)