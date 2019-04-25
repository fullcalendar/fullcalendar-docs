---
title: FullCalendar 2.0.0 Released
date: 2014-06-02T00:46:13+00:00
---

After a ton of work, I&#8217;m happy to say that FullCalendar version 2.0.0 has been released. It contains some huge improvements, namely internationalization support, timezone support, and [MomentJS](http://momentjs.com) integration, which is a new dependency. It is important to note that many of the API changes are backwards-incompatible with 1.x versions.

See a [full list of changes](http://arshaw.com/fullcalendar/wiki/Upgrading-to-v2/)

It also comes with a new automated test suite. Tests have been written that cover about half of FullCalendar&#8217;s functionality. Automated tests are very important to be able to develop new features and write new code with confidence. Thank you very much to @incre-d, @vidbina, and @sirrocco for the help so far. Any additional help is greatly appreciated. See the [Automated Test Readme](https://github.com/arshaw/fullcalendar/wiki/Automated-Tests).


### How to get it

See the [Downloads page](http://arshaw.com/fullcalendar/download/)

**Update:** Both CDNJS and Bower have been updated with the latest version. You might need to run \`_bower cache clean\`_ if it isn&#8217;t showing up (because of a repo switch). Also, in the Bower deliverable, the location of the important JS/CSS has moved to a subdirectory called _dist_.
