---
id: 120
title: 'Timeline &#038; Other News'
date: 2015-02-09T15:13:23+00:00
author: arshaw
layout: post
guid: http://blog.arshaw.com/?p=120
permalink: blog/:year/:month/:title/
excerpt_separator: <!--more-->
dsq_thread_id:
  - "3500946281"
categories:
  - Uncategorized
---
[<img class="alignright wp-image-121" style="margin-top: ‐10px;" src="/assets/images/blog/2015/02/timeline-view.png" alt="timeline-view" width="213" height="136" sizes="(max-width: 213px) 100vw, 213px" />](#preview)This post is an update on the highly-requested <a href="https://code.google.com/p/fullcalendar/issues/detail?id=150#footer" target="_blank">horizontal resource view</a> (aka _Timeline_). This feature allows the assigning of events to _resources_ (things like team members or conference rooms) and portrays time left-to-right and resources top-to-bottom. Please ☆ the <a href="https://code.google.com/p/fullcalendar/issues/detail?id=150#footer" target="_blank">issue tracker ticket</a> to receive further updates.<!--more-->

**Update (8/23/2015):** [Scheduler has been officially released!](http://blog.arshaw.com/1/post/2015/08/scheduler-released.html)

**Summary:** To build _Timeline_ the right way™ requires a lot of work. I&#8217;m a big supporter of open-source but, given the time commitment to get it off the ground and maintain, it only makes sense to release this feature as a premium product. I have a <a href="http://fullcalendar.io/timeline/" target="_blank">preview</a> of _Timeline_ to show you and have released <a href="https://github.com/arshaw/fullcalendar/releases" target="_blank">FullCalendar v2.2.7</a>.

### Timeline Development

**I first looked at other developers&#8217; implementations** when deciding to tackle this feature. Special thanks to <a href="https://github.com/jarnokurlin" target="_blank">@jarnokurlin</a> for helping out so many people. These implementations, which are essentially modifications to the existing _<a href="https://github.com/arshaw/fullcalendar/blob/master/src/basic/BasicView.js" target="_blank">Basic</a> _view, are very good and will continue to be useful to many developers. However, the _Basic_ view approach becomes strained when considering these more advanced scenarios:

  * arbitrary view durations (if there are too many slots, there should be scrolling)
  * arbitrary granularities (ex: slots that are 1 second, 1 day, or 1 year)
  * arbitrary number of resources (if there are too many, there should be scrolling)
  * nesting / grouping resources (ex: people within a team or rooms within a building)
  * other columns of data for each resource (effectively a built-in mini-spreadsheet)

So, **I started work on a brand new view** that would address these concerns, called **_Timeline_**. It quickly became clear that, if done thoroughly and robustly, development of this view would be a massive amount of work. I considered leveraging the open-source community to build this feature. However, as the project&#8217;s maintainer, quality-assuring and maintaining these large contributions from others would be a huge time commitment as well.

### FullCalendar Inc?

**FullCalendar has been my hobby** up until this point (albeit a very important and impactful one!) and the development of _Timeline_ has not seemed possible given the time required to get it off the ground at the quality standard I have tried to uphold. However, when considering FullCalendar in the context of an open-source-based business (think <a href="http://ckeditor.com/" target="_blank">CKEditor</a> or <a href="https://wordpress.org/" target="_blank">WordPress</a>), it begins to make more sense. If I can maintain FullCalendar&#8217;s standard feature set while being able to financially support the venture through premium features, I can offer the users of FullCalendar, both free and paid, faster and more consistent progress on the project.

So, **I will be making _Timeline_ a paid premium feature** when used in commercial projects. The exact terms are still undefined, but there will likely be a per-project license with email support (i.e. me personally answering your questions to start) for commercial projects and a parallel GPL-esque license for no-cost use in fully open-source projects. I also plan to offer a significant price reduction for non-profit organizations.

### Premium Features

**In the future, will all other features be premium?** The answer is **NO**. I really care about the open-source health of the project so I&#8217;ve come up with guidelines for what qualifies as a potential premium feature:

  * clearly time-intensive to implement
  * obviously separate from the core and should be implemented as a plugin
  * beyond what a basic JavaScript calendar should be

If the feature meets all these qualifications, it is a candidate for a premium feature. The core code will always be free, with a robust API and plugin system for creating things like <a href="http://fullcalendar.io/docs/views/Custom_Views/" target="_blank">Custom Views</a>.

**I would love to get your thoughts on this new approach.** Please comment away!

### <span id="preview">Preview of Timeline</span>

Back to Timeline. I&#8217;ve been hard at work, and even though my code is pre-alpha and not fit for download, <a href="http://fullcalendar.io/timeline/" target="_blank">I&#8217;ve prepared a live demo:</a>

<a href="http://fullcalendar.io/timeline/" target="_blank"><img class="alignnone wp-image-121 size-full" src="/assets/images/blog/2015/02/timeline-view.png" alt="timeline-view" width="946" height="606" sizes="(max-width: 946px) 100vw, 946px" /></a>

I&#8217;ve also prepared some <a href="http://fullcalendar.io/docs/timeline/" target="_blank">preliminary documentation</a>.

**To offer input on Timeline&#8217;s specs and features,** please participate in the <a href="https://code.google.com/p/fullcalendar/issues/detail?id=150#footer" target="_blank">issue tracker discussion</a>.

### Contracting Work

If you would like to hire me as a contractor for _Timeline_ customization/integration or anything else FullCalendar-related, <del>please email me at <a href="mailto:contracting@fullcalendar.io">contracting@fullcalendar.io</a></del> *****. This will allow _me_ to make ends meet while finishing _Timeline_ and will allow _you_ to receive high-quality custom work directly from the author of the project.

***Update (Feb 17th):** _I am no longer accepting contracting work at this time_

### FullCalendar v2.2.7

In other news, I have released a new minor version of FullCalendar. It contains bugfixes for already-released features. For more information, please <a href="https://github.com/arshaw/fullcalendar/releases" target="_blank">read the changelog</a>.