---
title: React Component
title_for_landing: React
---

FullCalendar seamlessly integrates with the [React] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_react_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Example project][example project] leveraging [Webpack], [Babel], and [css-loader] (the code in this guide loosely follows it)
- [Runnable project](https://stackblitz.com/github/fullcalendar/fullcalendar-examples/tree/main/react18) in a code playground

This guide does not go into depth about initializing a React project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need FullCalendar core, the React adapter, and any plugins you plan to use:

```bash
npm install --save \
  @fullcalendar/core \
  @fullcalendar/react \
  @fullcalendar/daygrid
```

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.jsx]):

```jsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  )
}
```


You must initialize your calendar with at least one plugin that provides a view!


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

Props for the `<FullCalendar>` component are set the same way for both Class and Functional Components.


## Callbacks

A callback function can be passed into a React component and it will be called when something happens. For example, the [dateClick](dateClick) handler is called whenever the user clicks on a date:

```jsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
    />
  )
}
```


## Content Injection

There are many settings throughout the API for injecting custom content, like the `eventContent` [event render hook](event-render-hooks). The [Content Injection article](content-injection) explains the general concept. When you're using the React connector, it's possible to return React JSX nodes. Example:

```jsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      eventContent={renderEventContent}
    />
  )
}

function renderEventContent(eventInfo) {
  return(
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
```


## Custom Views with Components

It's possible to make calendar views that have custom rendering logic. The [Custom Views via JS](custom-view-with-js) article explains the general concept. When you're using the React connector, it's possible to specify a [React component](https://reactjs.org/docs/components-and-props.html). Example:

```jsx
import { sliceEvents, createPlugin } from '@fullcalendar/core';

function CustomView(props) {
  let segs = sliceEvents(props, true); // allDay=true

  return (
    <>
      <div className='view-title'>
        {props.dateProfile.currentRange.start.toUTCString()}
      </div>
      <div className='view-events'>
        {segs.length} events
      </div>
    </>
  );
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
import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  const calendarRef = useRef(null)

  function goNext() {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.next()
  }

  return (
    <>
      <button onClick={goNext}>Go Next!</button>
      <FullCalendar ref={calendarRef} plugins={[ dayGridPlugin ]}>
    </>
  )
}
```


## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with React? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. If you plan to use resources, you'll need the `@fullcalendar/resource` package:

```sh
npm install --save \
  @fullcalendar/core \
  @fullcalendar/react \
  @fullcalendar/resource \
  @fullcalendar/resource-timeline
```

Then, initialize your calendar. Make sure to include your [schedulerLicenseKey](schedulerLicenseKey):

```jsx
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />
  )
}
```


## State Management

The above mentioned sample project uses a rather simple technique to store event data: it uses the FullCalendar component itself. It's possible to share this data with other parts of the application, but it's often useful to have a more sophisticated setup. For example, if you need access to event data when a FullCalendar component isn't visible.

Please check out the following example projects that demonstrate usage with third-party state-management libraries:

- [View the **Redux** example &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-redux)
- [View the **MobX** + **TypeScript** example &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-mobx-typescript)


## TypeScript

React works well with [TypeScript]!

- [View the **React** + **TypeScript** example &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-typescript)


## Next.js

FullCalendar works well with the React framework [Next.js](https://nextjs.org/).
View the [example project &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/next13)


## Remix

FullCalendar works well with the React framework [Remix](https://remix.run/).
It requires a workaround where you must explicitly define the location of FullCalendar's styles in the `<head>`:

```jsx
<style data-fullcalendar />
```

View the [example project](https://github.com/fullcalendar/fullcalendar-examples/tree/main/remix) for more information.


## Jest

The FullCalendar React connector works well with [Jest](https://jestjs.io/) but requires a workaround for Jest >=28:

- [Explanation on Github Issues](https://github.com/fullcalendar/fullcalendar/issues/7113#issuecomment-1384696198)
- [Example Project](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-jest)


[React]: https://reactjs.org/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[example project]: https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18
[DemoApp.jsx]: https://github.com/fullcalendar/fullcalendar-examples/blob/main/react18/src/DemoApp.jsx
[docs toc]: https://fullcalendar.io/docs#toc
[callback-method-binding]: https://medium.com/@pauloesteves8/es6-classes-binding-public-class-fields-and-event-handling-in-react-2e1e39b1d498
[TypeScript]: https://www.typescriptlang.org/
[Next.js]: https://nextjs.org/
