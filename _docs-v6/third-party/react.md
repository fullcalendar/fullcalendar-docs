---
title: React Component
title_for_landing: React
---

FullCalendar seamlessly integrates with the [React] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This is more than a mere "connector". It tells the core FullCalendar package to begin rendering with **React** virtual DOM nodes as opposed to the [Preact](https://preactjs.com/) nodes it normally uses, transforming FullCalendar into a "real" React component. You can learn a bit more [from this blog post](/blog/2020/05/react-ts-v5-beta) (more info to come).

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_react_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Example project][example project] leveraging [Webpack], [Babel], and [css-loader] (the code in this guide loosely follows it)
- [Runnable project](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v6/react?file=/src/DemoApp.jsx) in a code playground

This guide does not go into depth about initializing a React project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the React adapter any additional plugins you plan to use:

```bash
npm install --save \
  @fullcalendar/react@beta \
  @fullcalendar/daygrid@beta
```

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.jsx]):

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )
  }
}
```

You must initialized your calendar with at least one plugin that provides a view!


## Props

The `<FullCalendar>` component is equipped with [all of FullCalendar's options][docs toc]! Just pass them in as props. Example:

```jsx
<FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={false}
  events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]}
/>
```


## Callbacks

A callback function can be passed into a React component and it will be called when something happens. For example, the [dateClick](dateClick) handler is called whenever the user clicks on a date:

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
      />
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

}
```

Make sure your callbacks methods are [bound to your component's context][callback-method-binding]!


## Content Injection

There are many settings throughout the API for injecting custom content, like the `eventContent` [event render hook](event-render-hooks). The [Content Injection article](content-injection) explains the general concept. When you're using the React connector, it's possible to return React JSX nodes. Example:

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        eventContent={renderEventContent}
      />
    )
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
```


## FullCalendar Utilities

All of FullCalendar's utility functions that would normally be accessible via `@fullcalendar/core` will also be accessible via `@fullcalendar/react`. The [formatDate](formatDate) utility for example. This prevents you from needing to add another dependency to your project.

```js
import { formatDate } from '@fullcalendar/react';

let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});

console.log(str);
```


## Custom Views with Components

It's possible to make calendar views that have custom rendering logic. The [Custom Views via JS](custom-view-with-js) article explains the general concept. When you're using the React connector, it's possible to specify a [React component](https://reactjs.org/docs/components-and-props.html). Example:

```jsx
import React from 'react';
import { sliceEvents, createPlugin } from '@fullcalendar/react';

class CustomView extends React.Component {

  render(props) {
    let segs = sliceEvents(props, true); // allDay=true

    return (
      <Fragment>
        <div class='view-title'>
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div class='view-events'>
          {segs.length} events
        </div>
      </Fragment>
    );
  }

}

export default createPlugin({
  views: {
    custom: CustomView
  }
});
```


## Calendar API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [initialDate](initialDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the component's ref (short for "reference"). Once you do that, you call the `getApi` method of the "current" component instance:

```jsx
export default class DemoApp extends React.Component {

  calendarRef = React.createRef()

  render() {
    return (
      <FullCalendar ref={this.calendarRef} plugins={[ dayGridPlugin ]} />
    )
  }

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.next()
  }

}
```


## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with React? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. Also, make sure to include your [schedulerLicenseKey](schedulerLicenseKey):

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import resourceTimelinePlugin from '@fullcalendar/resource-timeline' // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />
    )
  }
}
```


## State Management

The above mentioned sample project uses a rather simple technique to store event data: it uses the FullCalendar component itself. It's possible to share this data with other parts of the application, but it's often useful to have a more sophisticated setup. For example, if you need access to event data when a FullCalendar component isn't visible.

Please check out the following example projects that demonstrate usage with third-party state-management libraries:

- [View the **Redux** example &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/react-redux)
- [View the **MobX** + **TypeScript** example &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/react-mobx-typescript)


## TypeScript

React goes really well with [TypeScript]!

- [View the **React** + **TypeScript** example &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/react-typescript)


## Next.js

If you plan to use the [Next.js] React framework, you'll need special configuration. See the following example projects:

- [View the **Next** example &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/next)
- [View the **Next** + **Scheduler** example &raquo;](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/next-scheduler)


[React]: https://reactjs.org/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/react
[DemoApp.jsx]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/react/src/DemoApp.jsx
[docs toc]: https://fullcalendar.io/docs#toc
[callback-method-binding]: https://medium.com/@pauloesteves8/es6-classes-binding-public-class-fields-and-event-handling-in-react-2e1e39b1d498
[TypeScript]: https://www.typescriptlang.org/
[Next.js]: https://nextjs.org/
