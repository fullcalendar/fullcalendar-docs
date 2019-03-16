---
permalink: /download
title: Download
layout: text
---

<div class='sidenote-layout'>
<div class='sidenote-layout__main' markdown='1'>

<h2>
  Latest:
  <a href='{{ site.fullcalendar_repo }}/releases/download/v{{ site.data.fullcalendar_latest.version }}/fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip'
    onclick="ga('send', 'pageview', '/downloads/fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip')"
    >fullcalendar-{{ site.data.fullcalendar_latest.version }}.zip</a>
</h2>

Includes a **basic stylesheet**, the **Google Calendar extension**, and the necessary **jQuery** and **Moment** files.

[Changelog + All Releases &raquo;]({{ site.fullcalendar_repo }}/releases)


## Package Managers

You can install FullCalendar via [NPM](https://www.npmjs.com/):

```
$ npm install jquery moment fullcalendar
```

You can also install FullCalendar via [Bower](https://bower.io/):

```
$ bower install jquery moment fullcalendar
```


## CDNJS

[CDNJS](http://cdnjs.com/) is kind enough to host FullCalendar's files through a reliable CDN,
which you can directly link to from your site. However, the files **might not be immediately available
after a release**, as it takes some time for them to get approved and uploaded,
so keep that in mind. Here are the URLs of the latest files:

```
https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/{{ site.data.fullcalendar_latest.version }}/fullcalendar.min.js
https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/{{ site.data.fullcalendar_latest.version }}/fullcalendar.min.css
https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/{{ site.data.fullcalendar_latest.version }}/fullcalendar.print.css
```

</div>
<div class='sidenote-layout__sidenote' markdown='1'>

### Looking for the Scheduler plugin?

[Visit the free-trial page]({{ site.baseurl }}/scheduler/download)

</div>
</div>
