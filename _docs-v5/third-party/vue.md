---
title: Vue Component
title_for_landing: Vue
---

FullCalendar seamlessly integrates with the [Vue] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_vue_repo }}) (please star it!)
- [Bug report instructions]({{ site.baseurl }}/reporting-bugs)
- [Example project][example project] leveraging [Webpack] and [css-loader] (the code in this guide loosely follows it)
- [Runnable project](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v5/vue?file=/src/DemoApp.vue) in a code playground

This guide does not go into depth about initializing a Vue project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need the Vue adapter, the core package, and any additional plugins you plan to use:

```bash
npm install --save @fullcalendar/vue@5.0.0-rc @fullcalendar/core@5.0.0-rc @fullcalendar/daygrid@5.0.0-rc
```

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.vue]):

```html
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
```


## CSS

All of FullCalendar's CSS will be automatically loaded as long as your build system is able to process `.css` file imports. See [Initializing with an ES6 Build System](initialize-es6) for more information on configuring your build system.


## Props and Emitted Events

Vue has the concept of "props" (via `v-bind` or `:`) versus "events" (via `v-on` or `@`). For the FullCalendar connector, there is no distinction between props and events. Everything is passed into the master `options` object as key-value pairs. Here is an example that demonstrates passing in an `events` array and a `dateClick` handler:

```html
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
```


## Modifying Options

You can modify your calendar's options after initialization by reassigning them within the options object. This is an example of changing the `weekends` options:

```html
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth',
        weekends: false // initial value
      }
    }
  },
  methods: {
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }
  }
}
</script>
<template>
  <button @click="toggleWeekends">toggle weekends</button>
  <FullCalendar :options="calendarOptions" />
</template>
```





## Accessing FullCalendar's API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [initialDate](initialDate) prop will set the *initial* date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation).

To do something like this, you'll need to get ahold of the component's ref (short for "reference"). In the template:

```html
<FullCalendar ref="fullCalendar" :options="calendarOptions" />
```

Once you have the ref, you can get the underlying `Calendar` object via the `getApi` method:

```js
let calendarApi = this.$refs.fullCalendar.getApi()
calendarApi.next()
```


## Kebab-case in Markup

Some people prefer to write component names in kebab-case when writing markup. This will work fine:

```html
<full-calendar :options="calendarOptions" />
```

However, the properties within `calendarOptions` must have the same names.


## Scheduler

How do you use [FullCalendar Scheduler's](premium) premium plugins with Vue? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. Also, make sure to include your `schedulerLicenseKey`:

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
      calendarOptions: {
        plugins: [ resourceTimelinePlugin ],
        schedulerLicenseKey: 'XXX'
      }
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
```


## TypeScript

The `@fullcalendar/vue` package includes its own [TypeScript](https://www.typescriptlang.org/) definitions. When using TypeScript in your Vue project, it is recommended to use [class-based components](https://github.com/vuejs/vue-class-component). See an <a href='https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/vue-typescript' class='more-link'>example TypeScript project</a>


## Vuex

[Vuex](https://vuex.vuejs.org/) is a state management library for Vue. FullCalendar is surely compatible with Vuex, but we don't have an example project to show you just yet. <a href='https://github.com/fullcalendar/fullcalendar-vue/issues/94' class='more-link'>Help out by writing an example</a>


[Vue]: https://vuejs.org/
[Webpack]: https://webpack.js.org/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[example project]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v5/vue
[DemoApp.vue]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v5/vue/src/DemoApp.vue
[docs toc]: https://fullcalendar.io/docs#toc
[component options]: https://github.com/fullcalendar/fullcalendar-vue/blob/master/src/fullcalendar-options.js
