---
title: React Component
title_for_landing: React
---

FullCalendar seamlessly integrates with the [React] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This component is built and maintained by [Josh Ruff](https://github.com/joshuaRuff) of [Sardius Media](http://sardius.media/) in partnership with the maintainers of FullCalendar. It is the official React connector, released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_react_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Example project][example project] leveraging [Webpack], [Babel], and [Sass] (the code in this guide loosely follows it)
- [Runnable project](https://codesandbox.io/s/2z6wp2jozn) in a code playground

This guide does not go into depth about initializing a React project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the React adapter, the core package, and any additional plugins you plan to use:

```bash
npm install --save @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid
```

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.jsx]):

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }

}
```

You must initialized your calendar with at least one plugin that provides a view!


## CSS

The above example includes a `.scss` file from *JavaScript*. To get this to work with Webpack, you need to set up `style-loader`, `css-loader`, `sass-loader`, and `node-sass`. [More info &raquo;][sass-loader]

You must then manually include the stylesheets for FullCalendar's core and plugins. In `main.scss`:

```scss
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
```

The prefixed `~` tells Sass to look in the `node_modules` directory.


## Props

The `<FullCalendar>` component is equipped with [all of FullCalendar's options][docs toc]! Just pass them in as props. Example:

```jsx
<FullCalendar
  defaultView="dayGridMonth"
  plugins={calendarPlugins}
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
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar dateClick={this.handleDateClick} plugins={[ dayGridPlugin, interactionPlugin ]} />
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

}
```

Make sure your callbacks methods are [bound to your component's context][callback-method-binding]!


## Accessing FullCalendar's API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [defaultDate](defaultDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

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


## Scheduler

How do you use [FullCalendar Scheduler's](/pricing) premium plugins with React? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. Also, make sure to include your `schedulerLicenseKey`:

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />
    )
  }
}
```

Also, make sure all the correct stylesheets are being included.


## TypeScript

React goes really well with [TypeScript]! To show you how to integrate the two, we've prepared [another sample project &raquo;][typescript project]


[React]: https://reactjs.org/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[Sass]: https://sass-lang.com/
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v4/react
[DemoApp.jsx]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v4/react/src/DemoApp.jsx
[sass-loader]: https://github.com/webpack-contrib/sass-loader#readme
[docs toc]: https://fullcalendar.io/docs#toc
[callback-method-binding]: https://medium.com/@pauloesteves8/es6-classes-binding-public-class-fields-and-event-handling-in-react-2e1e39b1d498
[TypeScript]: https://www.typescriptlang.org/
[typescript project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v4/react-typescript
