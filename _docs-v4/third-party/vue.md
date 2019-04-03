---
title: Vue Component
title_for_landing: Vue
---

reference to sample project
quick link to installing webpack+vue+ devdeps, main.js+index.html


npm install (main lib)

```bash
npm install --save @fullcalendar/vue @fullcalendar/core @fullcalendar/daygrid
```


```html
<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin ]
    }
  }
}

</script>
```


```html
<template>
  <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
</template>
```


All attributes are just options! including events

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

Hint: attributes with : accept JS expressions (or bound variables) and normal just accept strings.

CSS...

```html
<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>
```

Which are inputs, which are outputs?


```html
<FullCalendar @dateClick="handleDateClick" :plugins="calendarPlugins" />
```

```js
methods: {
  handleDateClick(arg) {
    alert(arg.date)
  }
}
```

calling api methods? (discourage, but mention defaultDate situation)


```html
<FullCalendar ref="fullCalendar" :plugins="calendarPlugins" />
```

```js
let calendarApi = this.$refs.fullCalendar.getApi()
calendarApi.next()
```


Scheduler?
Will work if you include the resource* plugins!
