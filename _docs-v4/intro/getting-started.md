---
title: Getting Started
---

There are a few different ways to install the FullCalendar library.


## Package Manager

FullCalendar is available on [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). You'll first need to install FullCalendar’s `core` package as well as any plugins. Example:

```sh
npm install --save @fullcalendar/core @fullcalendar/daygrid
```

To initialize a calendar, <a href='initialize-es6' class='more-link'>read about using an ES6 build system</a>


## Download

You can also download the library manually. <a href='{{ site.fullcalendar_repo }}/releases' class='more-link'>View all releases</a>

Once you've downloaded it, you can initialize a calendar <a href='initialize-globals' class='more-link'>using script tags and browser globals</a>



## CDN

A number of free CDNs host FullCalendar's dist files. A clever way to choose a CDN and figure out the URLs of the files you need is to visit the package on [Yarn](https://yarnpkg.com/). For example, visit the [@fullcalendar/core](https://yarnpkg.com/en/package/@fullcalendar/core) package. Then, look at the "CDNs" area on the sidebar.

You'll be manually initializing FullCalendar with [script tags and globals]({{ site.baseurl }}/docs/initialize-globals), so make sure you've included all the necessary files for whatever [plugins you choose]({{ site.baseurl }}/docs/plugin-index).


## FullCalendar Scheduler

FullCalendar Scheduler is a collection of premium plugins for FullCalendar.
<a href='premium' class='more-link'>Get started with FullCalendar Scheduler</a>
