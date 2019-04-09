---
title: Angular Component
title_for_landing: Angular
---

FullCalendar seamlessly integrates with the [Angular] 7. It provides a component that exactly matches the functionality of FullCalendar's standard API.

<div class='spec' markdown='1' style='font-family:inherit'>
This package is in **beta**. [Learn more &raquo;](https://fullcalendar.io/blog/2019/04/react-vue-and-angular-connectors)
</div>

This component is built and maintained by [irustm](https://github.com/irustm) in partnership with the maintainers of FullCalendar. It is the official Angular connector, released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_angular_repo }}) (please star it!)
- [Bug report instructions]({{ site.baseurl }}/reporting-bugs)
- [Example project][example project]. It was initially set up with the `ng new` command of the [Angular CLI], but with lots of stuff stripped out including testing and linting. The code in this guide loosely follows it.
- [Runnable project]({{ site.fullcalendar_angular_playground }}) in a code playground

This guide does not go into depth about initializing an Angular project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the Angular adapter, the core package, and any additional plugins you plan to use:

```bash
npm install --save @fullcalendar/angular @fullcalendar/core @fullcalendar/daygrid
```

You must then include the `FullCalendarModule` into your app's root module. An example module in its entirety ([app.module.ts]):

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // for FullCalendar!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, in one of your app's component files ([app.component.ts]), you must prepare an array of FullCalendar plugins:

```js
import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarPlugins = [dayGridPlugin]; // important!

}
```

Then, in your component's template file ([app.component.html]), you have access to the `<full-calendar>` tag. You must pass your plugins into this declaration!

```
<full-calendar defaultView="dayGridMonth" [plugins]="calendarPlugins"></full-calendar>
```


## CSS

You must manually include the stylesheets for FullCalendar's core and plugins. One way to do this is to include them from your project's global scss stylesheet ([styles.scss]):

```scss
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
```

The prefixed `~` tells Sass to look in the `node_modules` directory.

DO NOT include these stylesheets from your component's CSS file ([app.component.scss]). They will get scoped to your component and won't work properly.

An alternative to using the global stylesheet is to include them in your project's [angular.json] under the `projects.PROJECTNAME.architect.build.options.styles` array.


## Properties

The `<FullCalendar>` component is equipped with [all of FullCalendar's options][docs toc]! Just pass them in as properties. As with any Angular component, use `[bracketed]` property names for bound JavaScript expression and normal property names otherwise. Example:

```
<full-calendar
  defaultView="dayGridMonth"
  [plugins]="calendarPlugins"
  [weekends]="false"
  [events]="[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]"
></full-calendar>
```


## Emitted Events

A listener can be passed into an Angular component that will be called when something happens. For example, the [dateClick](dateClick) handler is called whenever the user clicks on a date. The way you pass these into the `<full-calendar>` component is different than properties:

```
<full-calendar (dateClick)="handleDateClick($event)" [plugins]="calendarPlugins"></full-calendar>
```

They are written `(likethis)`. Then, in the JavaScript, write your handler method:

```js
export class AppComponent {

  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

}
```

Don't mix up when to use properties versus events! For help deciding which is which, consult the [giant list of properties and events][component options] in the connector's source code.


## Accessing FullCalendar's API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [defaultDate](defaultDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the [ViewChild reference][ViewChild]. In the template:

```
<full-calendar #calendar [plugins]="calendarPlugins"></full-calendar>
```

Once you've explicitly marked your child component (`#calendar`), you can get the underlying `Calendar` object via the `getApi` method:

```js
import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
// ...

export class AppComponent {

  // references the #calendar in the template
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin];

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

}
```


## Scheduler

How do you use [FullCalendar Scheduler's](scheduler) premium plugins with Angular? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. Also, make sure to include your `schedulerLicenseKey`:

```js
import { Component } from '@angular/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

// ...
export class AppComponent {
  calendarPlugins = [resourceTimelinePlugin];
}
```

```
<full-calendar schedulerLicenseKey="XXX" [plugins]="calendarPlugins"></full-calendar>
```

Also, make sure all the correct stylesheets are being included.


[Angular]: https://angular.io/
[Angular CLI]: https://cli.angular.io/
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular
[app.module.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.module.ts
[app.component.ts]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.ts
[app.component.scss]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.scss
[app.component.html]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/app/app.component.html
[styles.scss]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/src/styles.scss
[angular.json]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/angular/angular.json
[docs toc]: https://fullcalendar.io/docs#toc
[component options]: https://github.com/fullcalendar/fullcalendar-angular/blob/master/projects/fullcalendar/src/lib/fullcalendar-options.ts
[ViewChild]: https://angular.io/api/core/ViewChild
