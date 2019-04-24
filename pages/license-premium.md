---
permalink: /license/premium
title: FullCalendar Scheduler License
layout: text
is_license: true
---

FullCalendar Scheduler is tri-licensed, **meaning you must choose one of three licenses to use**. Each license has its own set of conditions, so please carefully choose one. Here is an overview of each:


## Option 1)&nbsp; Commercial License

A commercial license, [which must be purchased]({{ site.baseurl }}/purchase), allows Scheduler's use in commercial projects. You may make modifications to the source code but you may not redistribute those modifications. This license is what most people choose.

[Read frequently asked questions (FAQs) &raquo;]({{ site.baseurl }}/license/premium-faq)

[Read the full license agreement &raquo;]({{ site.baseurl }}/license/premium-commercial)


## Option 2)&nbsp; Non-Commercial Creative Commons

Scheduler is also released under a Creative Commons Attribution Non-Commercial No-Derivatives license. This license permits free use of Scheduler for **non-commercial purposes only**. It does not allow redistribution of source code modifications.

[Read the full license &raquo;](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This is the license behind the [free trial version]({{ site.baseurl }}/scheduler/download) of Scheduler. If you are a student, university, public school, or a [registered non-profit organization](https://en.wikipedia.org/wiki/Nonprofit_organization), you may use Scheduler under this license. You may simply download it from the [free trial page]({{ site.baseurl }}/scheduler/download) and begin using it immediately. Governmental entities are not covered by this non-commercial license.


## Option 3)&nbsp; GPL License

Under the GPL license, you may use Scheduler without charge. You may even modify its source code and redistribute it under the same license. However, there is one big caveat. **Any project that leverages Scheduler must be open source**. So, if you have a commercial project, and you don't want its source code to be released publicly, it is best to choose another license. This GPL license is directed towards GPL-compatible open source projects that want to bundle Scheduler.

[Read the full GPLv3 license &raquo;](http://www.gnu.org/licenses/gpl-3.0.en.html)

If you decide to use the GPL license and would like to remove the license key warning,use the following license key:

```js
var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source'
});
```

By the way, Scheduler's source code is [hosted on GitHub]({{ site.fullcalendar_scheduler_repo }}).
