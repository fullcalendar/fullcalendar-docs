---
title: Angular Component
title_for_landing: Angular
---

started with ng create. typescript. but tests/lint stripped out. link to sample project (and package.json).

most important imports:

```bash
npm install --save @fullcalendar/angular @fullcalendar/core @fullcalendar/daygrid
```


need to include the module:

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


most of action is in src/app/ , like the component:

```js
import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarPlugins = [dayGridPlugin];

}
```

in app.component.html:

```html
<full-calendar defaultView="dayGridMonth" [plugins]="calendarPlugins"></full-calendar>
```

All attributes are just options! including events

```html
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

Hint: attributes with [] accept JS expressions (or bound variables) and normal just accept strings.


Styles

Put your styles in the global src/styles.scss:

```scss
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
```

DO NOT put them in the component file (app.component.scss). They will get scoped.

Another option is to add these files to the list in `angular.json`, projects.WHATEVER.architect.build.options.scripts[] array


Callbacks

Which are inputs, which are outputs?

In app.compoment.html:

```html
<full-calendar (dateClick)="handleDateClick($event)" [plugins]="calendarPlugins"></full-calendar>
```

In app.component.ts:

```js
export class AppComponent {

  calendarPlugins = [dayGridPlugin];

  handleDateClick(arg) {
    alert('clicked on ' + arg.dateStr);
  }

}
```


Calling API methods

Need to get a reference first:

```html
<full-calendar #calendar [plugins]="calendarPlugins"></full-calendar>
```

In app.component.ts:

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
