---
title: Moment Plugin
---

[Moment JS](https://momentjs.com/) is a popular library for parsing, formatting, and manipulating dates. FullCalendar has a connector package that provides the following functionality:

- Lets you use moment formatting strings for all [date-formatting](date-formatting) settings
- Lets you convert native [Date objects](date-object) emitted from the API into moment objects that match the calendar's time zone and locale
- Lets you convert [Duration](duration-object) objects emitted from the API into moment durations objects


## Usage with NPM

First, install the `@fullcalendar/moment` package along with any other packages you plan to use:

```
npm install --save \
  @fullcalendar/moment \
  @fullcalendar/core \
  @fullcalendar/daygrid
```

Then, create a new calendar and pass in the plugins:

```js
import { Calendar } from '@fullcalendar/core'
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid'

let calendarEl = document.getElementById('calendar')
let calendar = new Calendar(calendarEl, {
  plugins: [ momentPlugin, dayGridPlugin ],
  titleFormat: 'MMMM D, YYYY' // you can now use moment format strings!
});

calendar.render()
```


## Usage with Webpack

When used with Webpack, whenever the `moment` package is imported into your project, it imports **ALL** locales. This is a known issue with `moment`. It applies to `@fullcalendar/moment` as well. Luckily there is a workaround. Use [moment-locales-webpack-plugin](https://www.npmjs.com/package/moment-locales-webpack-plugin) to strip away these unused locales.

<a href='https://github.com/fullcalendar/fullcalendar-examples/tree/main/moment' class='more-link'>View an example moment project</a>


## Usage with Script Tags

You can also configure the moment plugin with [script tags](initialize-globals). This example leverages CDN links:

```html
<!-- moment lib -->
<script src='https://cdn.jsdelivr.net/npm/moment@2.27.0/min/moment.min.js'></script>

<!-- fullcalendar bundle -->
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>

<!-- the moment-to-fullcalendar connector. must go AFTER the moment lib -->
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/moment@{{ site.data.latest-releases.v6 }}/index.global.min.js'></script>

<script>
  var calendarEl = document.getElementById('calendar')
  var calendar = new FullCalendar.Calendar(calendarEl, {
    titleFormat: 'MMMM D, YYYY' // you can now use moment format strings!
  })

  calendar.render()
</script>
```


## Formatting

The plugin allows you to specify [moment formatting strings](https://momentjs.com/docs/#/displaying/format/) wherever a [date formatting input](date-formatting) is expected:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  titleFormat: 'MMMM D, YYYY' // you can now use moment format strings!
})
```

If you want to format a date *range*, you can group related date parts with curly brackets:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  titleFormat: '{MMMM {D}}, YYYY'
  // could produce "January 5 - 7, 2018"
  // could produce "January 5 - February 31, 2018"
  // could produce "January 5, 2018 - June 9, 2019"
});
```


## Moment Objects

Using the provided utility functions, you can convert dates and durations supplied by FullCalendar's API into moment objects and durations:

```js
import { Calendar } from '@fullcalendar/core';
import { toMoment, toMomentDuration } from '@fullcalendar/moment';
...
let calendar = new Calendar(calendarEl, {

  dateClick: function(arg) {
    let m = toMoment(arg.date, calendar); // calendar is required
    console.log('clicked on ' + m.format());
  },

  eventDrop: function(arg) {
    let d = toMomentDuration(arg.delta);
    console.log('event moved ' + d.humanize());
  }
});
...
```

When using script tags, these utility functions are available as `FullCalendarMoment.toMoment` and `FullCalendarMoment.toMomentDuration`.


## Usage with TypeScript

If you're using the `@fullcalendar/moment` plugin in a TypeScript project, you'll need to configure your `tsconfig.json` to have the `allowSyntheticDefaultImports` compiler option set to `true`:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true
  }
}
```

This is necessary due to how the `moment` package exposes itself in an ES6 environment.

<a href='https://github.com/fullcalendar/fullcalendar-examples/tree/main/moment-typescript' class='more-link'>View an example moment+typescript project</a>
