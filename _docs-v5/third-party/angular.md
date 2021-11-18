---
title: Angular Component
title_for_landing: Angular
---

FullCalendar seamlessly integrates with the [Angular] 9. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This component is built and maintained by [irustm](https://github.com/irustm) in partnership with the maintainers of FullCalendar. It is the official Angular connector, released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_angular_repo }}) (please star it!)
- [Bug report instructions]({{ site.baseurl }}/reporting-bugs)
- [Example project][example project]. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. The code in this guide loosely follows it.
- [Runnable project](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/master/angular?file=/src/app/app.component.ts) in a code playground

This guide does not go into depth about initializing an Angular project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the Angular adapter and any additional plugins you plan to use:

```bash
npm install --save @fullcalendar/angular @fullcalendar/daygrid @fullcalendar/interactionPlugin
```

You must then include the `FullCalendarModule` into your app's root module along with any plugins you plan to use. You'll then register these plugins with the FullCalendar module and subsequently register the FullCalendar module with your app. An example app ([app.module.ts]):

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

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

Your import of `@fullcalendar/angular` must go before any of the FullCalendar plugins or else a runtime error will occur.

Then, in one of your app's component files ([app.component.ts]), you must prepare an object of options:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

}
```

There's no need to specify `plugins` in this object of options. The plugins were already registered previously.

Then, in your component's template file ([app.component.html]), you have access to the `<full-calendar>` tag. You must pass your options into this declaration!

```
<full-calendar [options]="calendarOptions"></full-calendar>
```


## CSS

All of FullCalendar's CSS will be automatically loaded into your project when you import the `full-calendar` component. Each plugins' CSS will be included as well.


## Props and Emitted Events

Angular has the concept of props (aka "inputs", written with `[brackets]`) versus events (aka "outputs", written with `(parentheses)`). For the FullCalendar connector, there is no distinction between props and events. Everything is passed into the master `options` object as key-value pairs. Here is an example that demonstrates passing in an `events` array and a `dateClick` handler:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

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
import { CalendarOptions } from '@fullcalendar/angular';

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
import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';

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

How do you use [FullCalendar Premium's]({{ site.baseurl }}/pricing) plugins with Angular? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example, but with [resourceTimelinePlugin](timeline-view) or whatever premium plugin you want to use:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; // a plugin!
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  resourceTimelinePlugin
]);

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

Also, make sure to include your [schedulerLicenseKey](schedulerLicenseKey) in the options object:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

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
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular
[app.module.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.module.ts
[app.component.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.ts
[app.component.scss]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.scss
[app.component.html]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.html
[docs toc]: https://fullcalendar.io/docs#toc
[component options]: https://github.com/fullcalendar/fullcalendar-angular/blob/v5/projects/fullcalendar/src/lib/fullcalendar-options.ts
[ViewChild]: https://angular.io/api/core/ViewChild
