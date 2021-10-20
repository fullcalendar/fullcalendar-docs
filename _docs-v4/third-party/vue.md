---
title: Vue Component
title_for_landing: Vue
---

FullCalendar seamlessly integrates with the [Vue] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_vue_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- [Example project][example project] leveraging [Webpack] and [Sass] (the code in this guide loosely follows it)
- [Runnable project](https://codesandbox.io/s/8xyz32l0r8) in a code playground

This guide does not go into depth about initializing a Vue project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the Vue adapter, the core package, and any additional plugins you plan to use:

```bash
npm install --save @fullcalendar/vue @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
```

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.vue]):

```html
<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin, interactionPlugin ]
    }
  }
}

</script>

<template>
  <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
</template>
```

Notice how you must define the plugins in the data method, and then pass them into the `<FullCalendar>` component. This is the only way!


## CSS

You must manually include the stylesheets for FullCalendar's core and plugins. Assuming you have [Sass] set up, add a style block in the same `.vue` file:

```html
<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>
```

The prefixed `~` tells Sass to look in the `node_modules` directory.


## Props

The `<FullCalendar>` component is equipped with [all of FullCalendar's options][docs toc]! Just pass them in as props. Please be aware of when to prefix `:` (otherwise known as `v-bind:`) to the prop names. If you need a bound JavaScript expression, use `:`. Otherwise, use a normal attribute. Example:

```html
<FullCalendar
  defaultView="dayGridMonth"
  :plugins="calendarPlugins"
  :weekends="false"
  :events="[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]"
  />
```


## Emitted Events

A listener can be passed into a Vue component that will be called when something happens. For example, the [dateClick](dateClick) handler is called whenever the user clicks on a date. In order for this callback to fire, you must load the interaction plugin. If you are using an ES6 build system. The way you pass these into the `<FullCalendar>` component is different than props:

```html
<FullCalendar @dateClick="handleDateClick" :plugins="calendarPlugins" />
```

They are prefixed with `@` (otherwise known as `v-on:`). Then, in the JavaScript, write your handler method:

```js
methods: {
  handleDateClick(arg) {
    alert(arg.date)
  }
}
```

Don't mix up when to use props versus events! For help deciding which is which, consult the [giant list of props and events][component options] in the connector's source code.


## Accessing FullCalendar's API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [defaultDate](defaultDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the component's ref (short for "reference"). In the template:

```html
<FullCalendar ref="fullCalendar" :plugins="calendarPlugins" />
```

Once you have the ref, you can get the underlying `Calendar` object via the `getApi` method:

```js
let calendarApi = this.$refs.fullCalendar.getApi()
calendarApi.next()
```


## Kebab-case in Markup

Some people prefer to write component names and prop names in kebab-case when writing markup. This will work fine:

```html
<full-calendar default-view="dayGridMonth" :plugins="calendarPlugins" />
```

Notice how property *values* must remain in their original case.


## Scheduler

How do you use [FullCalendar Scheduler's](/pricing) premium plugins with Vue? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. Also, make sure to include your `schedulerLicenseKey`:

```html
<script>
import FullCalendar from '@fullcalendar/vue'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [ resourceTimelinePlugin ]
    }
  }
}

</script>

<template>
  <FullCalendar schedulerLicenseKey="XXX" :plugins="calendarPlugins" />
</template>

<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/timeline/main.css';
@import '~@fullcalendar/resource-timeline/main.css';

</style>
```


[Vue]: https://vuejs.org/
[Webpack]: https://webpack.js.org/
[Sass]: https://sass-lang.com/
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v4/vue
[DemoApp.vue]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v4/vue/src/DemoApp.vue
[docs toc]: https://fullcalendar.io/docs#toc
[component options]: https://github.com/fullcalendar/fullcalendar-vue/blob/v4/src/fullcalendar-options.js
