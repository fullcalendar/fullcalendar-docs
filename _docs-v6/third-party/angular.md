---
title: Angular Component
title_for_landing: Angular
---

FullCalendar seamlessly integrates with the [Angular] 9 - 15. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This component is built and maintained by [irustm](https://github.com/irustm) in partnership with the maintainers of FullCalendar. It is the official Angular connector, released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_angular_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Angular 15 example project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/angular15)

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
    FullCalendarModule // register FullCalendar with you app
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


## Props and Emitted Events

Angular has the concept of props (aka "inputs", written with `[brackets]`) versus events (aka "outputs", written with `(parentheses)`). For the FullCalendar connector, there is no distinction between props and events. Everything is passed into the master `options` object as key-value pairs. Here is an example that demonstrates passing in an `events` array and a `dateClick` handler:

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
    dateClick: this.handleDateClick.bind(this), // bind is important!
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

and the template, which still only accepts `[options]`:

```
<full-calendar [options]="calendarOptions"></full-calendar>
```


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
<full-calendar deepChangeDetection="true" [options]="calendarOptions"></full-calendar>
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
  @fullcalendar/core@beta \
  @fullcalendar/angular@beta \
  @fullcalendar/resource@beta \
  @fullcalendar/resource-timeline@beta
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
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular15
[app.module.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular15/src/app/app.module.ts
[app.component.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular15/src/app/app.component.ts
[app.component.scss]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular15/src/app/app.component.scss
[app.component.html]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/angular15/src/app/app.component.html
[component options]: https://github.com/fullcalendar/fullcalendar-angular/blob/v6/lib/src/options.ts
[ViewChild]: https://angular.io/api/core/ViewChild
