---
title: Vue Component
title_for_landing: Vue
---

FullCalendar seamlessly integrates with the [Vue] JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo]({{ site.fullcalendar_vue_repo }}) (please star it!)
- [Bug report instructions](/reporting-bugs)
- Example projects:
  - [Vue 2 example](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/vue) (uses [Webpack] and [css-loader]) - [runnable](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v6/vue?file=/src/DemoApp.vue)
  - [Vue 3 example](https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/vue3-typescript) (uses [TypeScript] and [Vite]) - [runnable](https://codesandbox.io/s/github/fullcalendar/fullcalendar-example-projects/tree/v6/vue3-typescript?file=/src/Demo.vue)

This guide does not go into depth about initializing a Vue project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies. You'll need FullCalendar core, the Vue adapter, and any plugins you plan to use.

If using **Vue 2**:

```bash
npm install --save \
  @fullcalendar/core@beta \
  @fullcalendar/vue@beta
```

If using **Vue 3**:

```bash
npm install --save \
  @fullcalendar/core@beta \
  @fullcalendar/vue3@beta
```

Then install any additional FullCalendar plugins like `@fullcalendar/daygrid`

You may then begin to write a parent component that leverages the `<FullCalendar>` component:

```html
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
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

It is recommended to import `@fullcalendar/core/vdom` before any other imports. This is especially important for [Vite]'s HMR to work. For more info, see [ticket #152](https://github.com/fullcalendar/fullcalendar-vue/issues/152).


## Props and Emitted Events

Vue has the concept of "props" (via `v-bind` or `:`) versus "events" (via `v-on` or `@`). For the FullCalendar connector, there is no distinction between props and events. Everything is passed into the master `options` object as key-value pairs. Here is an example that demonstrates passing in an `events` array and a `dateClick` handler:

```html
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
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
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
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

## Calendar API

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


## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with Vue? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. If you plan to use resources, you'll need the `@fullcalendar/resource` package:

```sh
npm install --save \
  @fullcalendar/core@beta \
  @fullcalendar/vue3@beta \
  @fullcalendar/resource@beta \
  @fullcalendar/resource-timeline@beta
```

Then, initialize your calendar. Make sure to include your [schedulerLicenseKey](schedulerLicenseKey):

```html
<script>
import FullCalendar from '@fullcalendar/vue3'
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

For `@fullcalendar/vue3`, nothing special is needed for TypeScript integration.

For `@fullcalendar/vue` (Vue 2), it is recommended to use [class-based components](https://github.com/vuejs/vue-class-component). See an <a href='https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/vue-typescript' class='more-link'>example TypeScript project</a>


## Vuex

[Vuex](https://vuex.vuejs.org/) is a popular state management library for Vue that works well with the FullCalendar connector. <a href='https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/vue-vuex' class='more-link'>View an example project</a>


## Nuxt

If you plan to use the [Nuxt] Vue framework, you'll need special configuration. <a class='more-link' href='https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/nuxt'>See the example project</a>


[Vue]: https://vuejs.org/
[Webpack]: https://webpack.js.org/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[docs toc]: https://fullcalendar.io/docs#toc
[Nuxt]: https://nuxtjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Vite]: https://github.com/vitejs/vite
