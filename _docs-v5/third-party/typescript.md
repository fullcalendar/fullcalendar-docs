---
title: TypeScript Support
title_for_landing: TypeScript
excerpt_separator: <!--more-->
---

It is possible to use FullCalendar and [Scheduler](/pricing) with **TypeScript**, a type-aware superset of the JavaScript language that compiles down to JavaScript.<!--more--> TypeScript is great for the maintainability of large JavaScript projects, however, it is probably overkill for smaller projects. [Learn more about TypeScript &raquo;](https://www.typescriptlang.org/)

You will then need to set up some sort of build system that compiles TypeScript to JavaScript. You can use the `tsc` compiler directly or you can use a more sophisticated system like [Webpack](https://webpack.js.org/).

- [View the **FullCalendar + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/typescript)
- [View the **FullCalendar Scheduler + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/typescript-scheduler)

Once you have your build system set up, you can begin to write type-aware code like this:

**example.ts**:

```ts
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl: HTMLElement = document.getElementById('calendar')!;

  let calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ]
    // options here
  });

  calendar.render();
});
```
