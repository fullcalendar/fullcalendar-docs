---
title: The Issue Tracker Has Been Renovated
date: 2016-07-05T00:51:06+00:00
---

FullCalendar&#8217;s issue tracker had grown out of control. The list of issues was incredibly hard to navigate, both for project maintainers and project users. Also, since moving to Github, the issue list became incredibly hard to sort and prioritize. Some much needed renovation was in order.

Over the past two months, I&#8217;ve been finding time to clean out old issues, flesh out many half-baked feature request ideas, merge outstanding PRs, and categorize all issues with a new **label system**. There are now <a href='https://github.com/fullcalendar/fullcalendar/labels' target='_blank'>33 labels</a> used for categorization, making issues easier to browse.

I've also created a new interface for ranking issues by demand. It takes a number of factors into account, including  the number of +1/<img style='vertical-align: text-bottom;' src='{{ site.baseurl }}/assets/images/thumbsup-emoji.png' width='20' height='20' alt='thumbups' /> reactions, comments, and old Google Code issue statistics. <a href='http://fullcalendar.io/issues/' target='_blank'>Click to view this new UI:</a>

<a href='http://fullcalendar.io/issues/' target='_blank'><img style='border-radius: 3px; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);' src='/assets/images/blog/2016/07/Screen-Shot-2016-07-04-at-5.38.53-PM-300x254.png' width='300' height='254' alt='issue tracker screenshot' /></a>

I've open-sourced the code for creating this UI. It's a new project called <a href='https://github.com/arshaw/ghi-scoreboard' target='_blank'><strong>ghi-scoreboard</strong> (view it on Github)</a>. It&#8217;s easily configurable, so feel free to use it on your own Github-hosted projects.

**Please remember, the best way to express your interest is to make a <img style='vertical-align: text-bottom;' src='{{ site.baseurl }}/assets/images/thumbsup-emoji.png' width='20' height='20' alt='thumbsup' /> reaction on the description of the issue** (<a href='https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments' target='_blank'>learn how</a>). Also, if you&#8217;d like to receive email notifications when progress is made, press the <strong style='background-image: linear-gradient(#fcfcfc, #eee); border: 1px solid #d5d5d5; color: #333; padding: 0 5px; border-radius: 3px;'>Subscribe</strong> button.

Comments such as +1 or &#8220;when will this be ready&#8221; will not only receive a penalty in the ranking system, they will spam other watchers of the thread.

Looking at the issue tracker, it&#8217;s easy to see there are a lot of feature requests with a lot of demand. Now that this necessary housekeeping is over with, there will be more time for actually implementing these features.
