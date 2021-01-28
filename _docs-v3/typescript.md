---
title: TypeScript Support
layout: docs-sublanding
excerpt_separator: <!--more-->
---

It is possible to use FullCalendar and [Scheduler]({{ site.baseurl }}/pricing) with **TypeScript**, a type-aware superset of the JavaScript language that compiles down to JavaScript.<!--more--> TypeScript is great for the maintainability of large JavaScript projects, however, it is probably overkill for smaller projects. [Learn more about TypeScript &raquo;](https://www.typescriptlang.org/)

As of FullCalendar version `3.8.2` and Scheduler version `1.9.2`, the TypeScript definition files come bundled when you `npm install` these libs. However, jQuery, which is unfortunately still a dependency of FullCalendar, does **not** come bundled with TypeScript definitions, so you must install them like this:

```sh
$ npm install --save-dev @types/jquery
```

You will then need to set up some sort of build system that compiles TypeScript to JavaScript. You can use the `tsc` compiler directly or you can use a more sophisticated system like [Webpack](https://webpack.js.org/).

- [View the **FullCalendar + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/typescript-example/tree/v3)
- [View the **FullCalendar Scheduler + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/scheduler-typescript-example/tree/v3)

Once you have your build system set up, you can begin to write type-aware code like this:

**example.ts**:

```ts
import * as $ from 'jquery';
import 'fullcalendar';

$(function() {
  let containerEl: JQuery = $('#calendar');

  containerEl.fullCalendar({
    // options here
  });
});
```
