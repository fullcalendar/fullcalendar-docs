---
title: Moment Timezone Plugin
---

[Moment Timezone](https://momentjs.com/timezone/) is a library for dealing with time zones. FullCalendar has a connector plugin that gives your calendar support for arbitrary named time zones. It provides a "named timezone implementation" for the [timeZone](timeZone#named-time-zones) setting.


## Usage with NPM

First, install the `@fullcalendar/moment-timezone` package along with any other packages you plan to use:

```
npm install --save @fullcalendar/moment-timezone @fullcalendar/core @fullcalendar/daygrid
```

Then, create a new calendar and pass in the plugins:

```js
import { Calendar } from '@fullcalendar/core'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import dayGridPlugin from '@fullcalendar/daygrid'

let calendarEl = document.getElementById('calendar')
let calendar = new Calendar(calendarEl, {
  plugins: [ momentTimezonePlugin, dayGridPlugin ],
  timeZone: 'Europe/Moscow' // arbitrary timezones are now honored!
});

calendar.render()
```


## Usage with Webpack

When used with Webpack, whenever the `moment-timezone` package is imported into your project, it imports **ALL** timezone data. This is a known issue with `moment-timezone`. It applies to `@fullcalendar/moment-timezone` as well. Luckily there is a workaround. Use [moment-timezone-data-webpack-plugin](https://www.npmjs.com/package/moment-timezone-data-webpack-plugin) to strip away this unused data.

<a href='https://github.com/fullcalendar/fullcalendar-examples/tree/v5/moment-timezone' class='more-link'>View an example moment-timezone project</a>


## Usage with Script Tags

You can also configure the moment-timezone plugin with [script tags](initialize-globals). This example leverages CDN links:

```html
<!-- include one of the moment-timezone builds -->
<script src='https://cdn.jsdelivr.net/npm/moment-timezone@0.5.31/builds/moment-timezone-with-data.min.js'></script>

<!-- fullcalendar bundle -->
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v5 }}/main.min.js'></script>

<!-- the connector. must go AFTER moment-timezone -->
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/moment@{{ site.data.latest-releases.v5 }}/main.global.min.js'></script>

<script>
  var calendarEl = document.getElementById('calendar')
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'Europe/Moscow' // arbitrary timezones are now honored!
  });

  calendar.render()
</script>
```


## Usage with TypeScript

If you're using the `@fullcalendar/moment-timezone` plugin in a TypeScript project, you'll need to configure your `tsconfig.json`. See [Moment Plugin :: Usage with TypeScript](moment-plugin#usage-with-typescript)
