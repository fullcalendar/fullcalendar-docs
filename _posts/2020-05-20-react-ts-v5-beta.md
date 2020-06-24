---
title: React & TypeScript Innovations in V5 Beta
date: 2020-05-20T08:07:26+00:00
advanced_sidebar: true
---

FullCalendar v5.0.0-beta.3 has just been released! Updates:


- **"Real" React** - FullCalendar's React package is more than just a connector that wraps a vanilla JS lib. It actually uses the real React virtual DOM through and through. This is possible because we chose to use Preact as FullCalendar's tiny inner core (more info in a [previous post]({{ site.baseurl }}{% post_url 2020-02-05-changes-in-the-upcoming-v5 %})). For the React package, we swap it out for React. This was rather technically difficult to achieve, so I'll likely be writing a blog post about this in the future.

- **TypeScript** - The TypeScript definitions have been infinitely improved over the previous beta release. They are now baked into the core code in such a way that they will never fall out of date.

- **Small Bugs** - For more info, [view the full changelog](https://github.com/fullcalendar/fullcalendar/blob/master/CHANGELOG.md)


We're getting very close an official v5! We just need to fix printer-friendly rendering and then we're off to the races!


- [View the Changelog and Upgrade Guide]({{ site.baseurl }}/docs/upgrading-from-v4)
- [View the Docs]({{ site.baseurl }}/docs)
- [Get the Code]({{ site.baseurl }}/docs/getting-started)
