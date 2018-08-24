---
title: TypeScript Support
layout: docs-sublanding
excerpt_separator: <!--more-->
---

It is possible to use FullCalendar and [Scheduler]({{ site.baseurl }}/scheduler) with **TypeScript**, a type-aware superset of the JavaScript language that compiles down to JavaScript.<!--more--> TypeScript is great for the maintainability of large JavaScript projects, however, it is probably overkill for smaller projects. [Learn more about TypeScript &raquo;](https://www.typescriptlang.org/)

As of FullCalendar version `3.8.2` and Scheduler version `1.9.2`, the TypeScript definition files come bundled when you `npm install` these libs. However, jQuery, which is unfortunately still a dependency of FullCalendar, does **not** come bundled with TypeScript definitions, so you must install them like this:

```sh
$ npm install --save-dev @types/jquery
```

You will then need to set up some sort of build system that compiles TypeScript to JavaScript. You can use the `tsc` compiler directly or you can use a more sophisticated system like [Webpack](https://webpack.js.org/).

- [View the **FullCalendar + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/typescript-example)
- [View the **FullCalendar Scheduler + TypeScript + Webpack** example repo &raquo;](https://github.com/fullcalendar/scheduler-typescript-example)

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

**Example typing**

```ts
import * as calendar from  'fullcalendar';

// list of calendar objects to display
 calendarDate: calendar.EventObjectInput[] =
		[
				{
					title: 'From',
					start: '2018-03-22',
					allDay: true,
					rendering: 'background',
					backgroundColor: '#f26522',
				},
			];
      
     // TODO:  Type this...
    calendarOptions: any = {
        //height: 450,
        editable: true,
        title:'My Calendar',
        weekends: false,
        header: {
          left: 'month agendaWeek',
//          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: this.DateClicked(this),
        eventMouseover : this.MouseOver,
	    eventMouseout: this.MouseOut,
        eventClick: this.EventClicked,
        contentHeight: 600,
        // eventDrop: (event: calendar.EventObjectInput, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: calendar.View) => {
        //     console.log( event.title + ' was drop ');
        // },
        // eventResize: (event: calendar.EventObjectInput, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: calendar.View) => {
        //     console.log( event.title + ' was resize ');
        // }
    };
    
    
    
     // WARNING:  'this' is date cell not the class, why there is a function returning a true Javascript function.
    DateClicked(me: TeacherCalendarComponent) {
        return function(date: moment.Moment, jsEvent: MouseEvent, view: calendar.View, resourceObj?: any)    {
            var present = _.find(me.selectedDates, x=> x.isSame(date));
             ...
        }
     }
     
       EventClicked = (event: calendar.EventObjectInput, jsEvent: MouseEvent, view: calendar.View) => {
        console.log( event.title + ' was clicked ');
    }
    MouseOver = (event: calendar.EventObjectInput, jsEvent: MouseEvent, view: calendar.View) => {
        console.log( event.title + ' was mouse over');
    }
    MouseOut = (event: calendar.EventObjectInput, jsEvent: MouseEvent, view: calendar.View) => {
        console.log( event.title + ' was mouse out');
    }
    
    // I am using Angular Material JS calendar created implicitly.
    
    var calendar = $('#teacher-calendar').fullCalendar('getCalendar');
    calendar.addEventSource(this.holidays);
    calendar.addEventSource({ events: this.calendarDate });
      
```
