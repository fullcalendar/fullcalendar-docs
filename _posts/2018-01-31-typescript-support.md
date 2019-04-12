---
id: 292
title: TypeScript Support
date: 2018-01-31T00:09:12+00:00
author: arshaw
layout: post
guid: https://fullcalendar.io/blog/?p=292
permalink: blog/:year/:month/:title/
excerpt_separator: <!--more-->
dsq_thread_id:
  - "6448857282"
categories:
  - Uncategorized
---
FullCalendar and Scheduler now officially support [TypeScript](https://www.typescriptlang.org/)! TypeScript is a popular type-aware superset of the JavaScript language that is great for larger projects.<!--more-->

In prior versions of FullCalendar, you needed [DefinitelyTyped](http://definitelytyped.org/) for the definition files, but as of FullCalendar version [3.8.2](https://github.com/fullcalendar/fullcalendar/releases/tag/v3.8.2) and Scheduler version [1.9.2](https://github.com/fullcalendar/fullcalendar-scheduler/releases/tag/v1.9.2), the definition files are bundled with the libraries when you npm-install them. (Actually, they were bundled since 3.8.0, but some kinks needed to be worked out).

  * [How to use TypeScript with FullCalendar »](https://fullcalendar.io/docs/typescript/)
  * [Example repo with FullCalendar »](https://github.com/fullcalendar/typescript-example)
  * [Example repo with Scheduler »](https://github.com/fullcalendar/scheduler-typescript-example)

By the way, the FullCalendar/Scheduler source code itself is written in TypeScript! Moving to TypeScript was a lot of work, but ultimately a great idea as it makes refactoring much much easier. When the source code gets compiled, it automatically generates the necessary TypeScript definitions files, so no need to maintain separate .d.ts files internally.

Adding TypeScript support is part of FullCalendar&#8217;s initiative to stay up-to-date with the coolest new JS technologies. The most obvious next project is to remove jQuery as a dependency so that FullCalendar plays nicer with React and Vue. This project is already in the works.