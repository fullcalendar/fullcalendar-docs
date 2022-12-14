---
title: Angular Component
title_for_landing: Angular
---

FullCalendar seamlessly integrates with the [Angular] 12 - 15. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This component is built and maintained by [irustm](https://github.com/irustm) in partnership with the maintainers of FullCalendar. It is the official Angular connector, released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_angular_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Angular 14 example project](https://github.com/fullcalendar/fullcalendar-examples/tree/main/angular14)
- [Angular 15 example project]

This guide does not go into depth about initializing an Angular project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need FullCalendar core, the Angular adapter, and any plugins you plan to use:

```bash
npm install --save \
  @fullcalendar/core
  @fullcalendar/angular \
  @fullcalendar/daygrid
```

You must then include the `FullCalendarModule` into your app's root module. An example app ([app.module.ts]):

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // register FullCalendar with your app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, in one of your app's component files ([app.component.ts]), prepare an object of options along with any plugins:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
```

Then, in your component's template file ([app.component.html]), you have access to the `<full-calendar>` tag. You must pass your options into this declaration!

```
<full-calendar [options]="calendarOptions"></full-calendar>
```


## Inputs and Emitted Events

Angular has the concept of bound input data (written with `[brackets]`) versus outputs (written with `(parentheses)`). For the FullCalendar connector, there is no distinction between inputs and outputs. Everything is passed into the master `options` input as key-value pairs. Here is an example that demonstrates passing in an `events` array and a `dateClick` handler:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
```

Template:

```
<full-calendar [options]="calendarOptions"></full-calendar>
```


<h2 id='individual-inputs' markdown='1'>Inputs for `events`/`eventSources`/`resources` (new in v6)</h2>

Certain options are exposed as top-level component inputs for convenience. This works well with the [`async`](https://angular.io/api/common/AsyncPipe) template helper, which accepts an `Observable` or `Promise`. The above example rewritten:

```js
import { Component } from '@angular/core';
import { CalendarOptions, EventsInput } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this)
  };
  eventsPromise: Promise<EventsInput>;

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
}
```

Template:

```
<full-calendar
  [options]="calendarOptions"
  [events]="eventsPromise | async"
></full-calendar>
```

This technique is commonly used when working with [NgRx](https://ngrx.io/). [View a sample project &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/angular15-ngrx)


### Modifying Properties

You can modify FullCalendar's options dynamically by reassigning them within the options object. This example toggles the `weekends` option on and off:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false // initial value
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
}
```

and the template:

```
<button (click)="toggleWeekends()">toggle weekends</button>
<full-calendar [options]="calendarOptions"></full-calendar>
```

If you want to modify options that are complex objects, like [headerToolbar](headerToolbar) or [events](events-array), you'll need to make a copy of the object, make your change, and then reassign it. If you DO NOT want to do this, you can have the angular connector recursively search for changes within your objects, though this comes at a slight performance cost. Set the `deepChangeDetection` prop to `"true"`:

```
<full-calendar
  [options]="calendarOptions"
  deepChangeDetection="true"
></full-calendar>
```


<h2 id='nested-templates'>Nested Templates (new in v6)</h2>

Use the `ng-template` tag to customize [content-injection](content-injection) areas such as [eventContent](event-render-hooks). Example:

```
<full-calendar [options]="calendarOptions">
  <ng-template #eventContent let-arg>
    <b>{% raw %}{{{% endraw %} arg.event.title {% raw %}}}{% endraw %}</b>
  </ng-template>
</full-calendar>
```

Explanation:

- The template is named via the [`#` syntax](https://angular.io/guide/template-reference-variables#syntax). It must be the name of a content-injection area.
- The template accepts a single [implicit local variable](https://stackoverflow.com/questions/45055384/what-is-implicit-in-angular-2/45055768#45055768) which is named via the `let-*` syntax. In the above example, `let-arg` names the variable "arg".
- The properties of the argument are documented alongside each content-injection area. For example see [eventContent's argument](event-render-hooks#argument).


## Calendar API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [initialDate](initialDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the [ViewChild reference][ViewChild]. In the template:

```
<full-calendar #calendar [options]="calendarOptions"></full-calendar>
```

Once you've explicitly marked your child component (`#calendar`), you can get the underlying `Calendar` object via the `getApi` method:

```js
import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // references the #calendar in the template
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}
```


## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with Angular? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. If you plan to use resources, you'll need the `@fullcalendar/resource` package:

```sh
npm install --save \
  @fullcalendar/core \
  @fullcalendar/angular \
  @fullcalendar/resource \
  @fullcalendar/resource-timeline
```

Then, initialize your calendar. Make sure to include your [schedulerLicenseKey](schedulerLicenseKey):

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    schedulerLicenseKey: 'XXX'
  };
}
```

and the template:

```
<full-calendar [options]="calendarOptions"></full-calendar>
```


[Angular]: https://angular.io/
[Angular CLI]: https://cli.angular.io/
[Angular 15 example project]: https://github.com/fullcalendar/fullcalendar-examples/tree/main/angular15
[app.module.ts]: https://github.com/fullcalendar/fullcalendar-examples/blob/main/angular15/src/app/app.module.ts
[app.component.ts]: https://github.com/fullcalendar/fullcalendar-examples/blob/main/angular15/src/app/app.component.ts
[app.component.scss]: https://github.com/fullcalendar/fullcalendar-examples/blob/main/angular15/src/app/app.component.scss
[app.component.html]: https://github.com/fullcalendar/fullcalendar-examples/blob/main/angular15/src/app/app.component.html
[component options]: https://github.com/fullcalendar/fullcalendar-angular/blob/main/lib/src/options.ts
[ViewChild]: https://angular.io/api/core/ViewChild
