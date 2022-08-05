---
title: Angular Integration
title_for_landing: Angular
---

[Angular], all versions.

- [Example project][example project]. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. The code in this guide loosely follows it.
- [Runnable project](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v6/angular?file=/src/app/app.component.ts) in a code playground

Install:

```bash
npm install --save \
  @fullcalendar/web-component \
  @fullcalendar/core@beta \
  @fullcalendar/daygrid@beta
```

In `app.module.ts`, enable the use of Web Components, aka "Custom Elements"
([more info][Angular Web Components]):

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
```

In `app.component.ts`, import the FullCalendar-related packages and configure FullCalendar's
options:

```ts
import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

// make the <full-calendar> element globally available by calling this function at the top-level
defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };
}
```

In `app.component.html`, include the correct tags:

```
<full-calendar [options]='calendarOptions'></full-calendar>
```


### Modifying Properties

You can modify FullCalendar's options dynamically by reassigning them within the options object. This example toggles the `weekends` option on and off:

```js
import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    weekends: false // initial value
  };

  toggleWeekends() {
    this.calendarOptions = {
      weekends: !this.calendarOptions.weekends,
    }
  }
}
```

and the template:

```
<button (click)="toggleWeekends()">toggle weekends</button>
<full-calendar [options]="calendarOptions"></full-calendar>
```

If you want to modify options that are complex objects, like [headerToolbar](headerToolbar) or [events](events-array), you'll need to make a copy of the object, make your change, and then reassign it.


## FullCalendar Utilities

All of FullCalendar's utility functions that would normally be accessible via `@fullcalendar/core` will also be accessible via `@fullcalendar/angular`. The [formatDate](formatDate) utility for example. This prevents you from needing to add another dependency to your project.

```js
import { formatDate } from '@fullcalendar/angular';

let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});

console.log(str);
```


## Calendar API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [initialDate](initialDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the [ViewChild reference][ViewChild]. In the template:

```
<full-calendar #calendar [options]="calendarOptions"></full-calendar>
```

Once you've explicitly marked your child component (`#calendar`), you can get the underlying `Calendar` object via the `getApi` method:

```js
import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // references the #calendar in the template
  @ViewChild('calendar') calendarRef: ElementRef<FullCalendarElement>;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
  };

  someMethod() {
    let calendarApi = this.calendarRef.nativeElement.getApi();
    calendarApi.next();
  }
}
```


## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with Angular? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example, but with [resourceTimelinePlugin](timeline-view) or whatever premium plugin you want to use.

First, enable Custom Element support (see `CUSTOM_ELEMENTS_SCHEMA` above).

Also, make sure to include your [schedulerLicenseKey](schedulerLicenseKey) in the options object.

In `app.component.ts`:

```ts
import { Component } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [resourceTimelinePlugin],
    schedulerLicenseKey: 'XXX'
  };
}
```

[Angular]: https://angular.io/
[Angular CLI]: https://cli.angular.io/
[Angular Web Components]: https://coryrylan.com/blog/using-web-components-in-angular
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular
[app.module.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular/src/app/app.module.ts
[app.component.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular/src/app/app.component.ts
[app.component.scss]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular/src/app/app.component.scss
[app.component.html]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular/src/app/app.component.html
[docs toc]: https://fullcalendar.io/docs#toc
[component options]: https://github.com/fullcalendar/fullcalendar-angular/blob/master/projects/fullcalendar/src/lib/fullcalendar-options.ts
[ViewChild]: https://angular.io/api/core/ViewChild
