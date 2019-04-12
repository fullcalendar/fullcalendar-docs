---
id: 41
title: FullCalendar News
date: 2013-09-10T23:38:05+00:00
author: arshaw
layout: post
excerpt_separator: <!--more-->
guid: http://blog.arshaw.com/?p=41
permalink: blog/:year/:month/:title/
dsq_thread_id:
  - "1747549948"
categories:
  - Uncategorized
---
I haven&#8217;t blogged in a while, but don&#8217;t worry, I&#8217;ve been hard at work doing FullCalendar-related things! I want to let everyone know about some developments with the project, both major and minor.<!--more-->

## New Releases

There have been four releases over the past few months: 1.6.1, 1.6.2, 1.6.3, and 1.6.4. They provide a variety of bugfixes and improvements to the API. For more information, [see the changelog](https://github.com/arshaw/fullcalendar/blob/0dfc25afcb99c4d1e89f51f8a1ebf71790aa3cf1/changelog.md).

## Housekeeping

  * Reduced open [issue tracker](https://code.google.com/p/fullcalendar/issues/list) ticket count from over 900 to **150**
  * Reduced open [pull requests](https://github.com/arshaw/fullcalendar/pulls) count from 68 to **32**
  * Much needed improvements to the [Support](http://arshaw.com/fullcalendar/wiki/Support/) pages
  * Much needed [Contribute](http://arshaw.com/fullcalendar/wiki/Contribute/) and [License](http://arshaw.com/fullcalendar/license/) pages
  * Instructions for Bower and CDNJS on the [Downloads](http://arshaw.com/fullcalendar/download/) page
  * New blog and Disqus comment system (no more spam!)

## Roadmap

There have been a few fundamental issues with FullCalendar since the beginning of its existence. Dealing with timezones has always been awkward and confusing, along with the way dates are stored. Also, built-in support for other languages and cultures has always been lacking.

I believe it is important to deal with these fundamental issues before moving forward. My proposed solution leverages [MomentJS](http://momentjs.com/), a very awesome and popular date library. For more information, see my [Proposal for a date system overhaul](https://gist.github.com/arshaw/6420506) as well as the [issues it will solve](https://code.google.com/p/fullcalendar/issues/list?q=milestone=date).

Beyond that, core user-experience issues are top priority, such as displaying [too many events](https://code.google.com/p/fullcalendar/issues/detail?id=304) and [printing problems](https://code.google.com/p/fullcalendar/issues/detail?id=35). Then, more meaty highly-requested UI features such as a [new views](https://code.google.com/p/fullcalendar/issues/detail?id=289) and [background periods](https://code.google.com/p/fullcalendar/issues/detail?id=144) can be tackled.

Stay tuned!