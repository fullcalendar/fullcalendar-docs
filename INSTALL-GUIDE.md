<!--
NOTE: for new releases, update string "7.0.0-beta.7" for CDN links
NOTE: will move from "@beta" -> "@rc" in all npm-install snippets (and eventually "@rc" -> "")
-->

# FullCalendar v7 Guide

This document provides installation instructions for the new theme system.

More documentation about v7 features and API changes to come.

Table of contents:

<!--
NOTE: In VSCode, update table with SHIFT+CMD+P, then "Markdown... Update Table of Contents",
  then delete the unnecessary top entry "FullCalendar v7 Guide" and unindent
-->

- [Stock Themes](#stock-themes)
  - [React](#react)
    - [Standard Plugins](#standard-plugins)
    - [Premium Plugins](#premium-plugins)
  - [Vue](#vue)
    - [Standard Plugins](#standard-plugins-1)
    - [Premium Plugins](#premium-plugins-1)
  - [Angular](#angular)
    - [Standard Plugins](#standard-plugins-2)
    - [Premium Plugins](#premium-plugins-2)
  - [Vanilla JS](#vanilla-js)
    - [Standard Plugins](#standard-plugins-3)
    - [Premium Plugins](#premium-plugins-3)
  - [Color Palettes](#color-palettes)
    - [Dark Mode](#dark-mode)
- [Custom Themes](#custom-themes)
  - [Tailwind](#tailwind)
  - [CSS Modules](#css-modules)
  - [Global CSS](#global-css)
- [Shadcn](#shadcn)
  - [Standard Plugins](#standard-plugins-4)
  - [Premium Plugins](#premium-plugins-4)
- [MUI](#mui)
  - [Standard Plugins](#standard-plugins-5)
    - [Option 1: Stock Component](#option-1-stock-component)
    - [Option 2: Composable Components](#option-2-composable-components)
  - [Premium Plugins](#premium-plugins-5)
    - [Option 1: Stock Component](#option-1-stock-component-1)
    - [Option 2: Composable Components](#option-2-composable-components-1)
- [Temporal Polyfill](#temporal-polyfill)


## Stock Themes

FullCalendar offers 5 beautiful stock themes that are intended to be used without any preexisting component library.


### React

First, visit [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For example, `monarch` with color palette `purple`. This choice will be used in the examples below.


#### Standard Plugins

Install the React standard package along with temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install @fullcalendar/react@beta temporal-polyfill
```

Initialize in the JS:

```jsx
import FullCalendar from '@fullcalendar/react'
import themePlugin from '@fullcalendar/react/themes/monarch' // YOUR THEME
import interactionPlugin from '@fullcalendar/react/interaction'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import listPlugin from '@fullcalendar/react/list'
import multimonthPlugin from '@fullcalendar/react/multimonth'

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/monarch/theme.css' // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE

<FullCalendar
  plugins={[
    themePlugin,
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    multimonthPlugin,
  ]}
/>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


#### Premium Plugins

Install the React "scheduler" package along with the "standard" package and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  @fullcalendar/react-scheduler@beta \
  @fullcalendar/react@beta \
  temporal-polyfill
```

Initialize in the JS:

```jsx
import FullCalendar from '@fullcalendar/react'
import themePlugin from '@fullcalendar/react/themes/monarch' // YOUR THEME
import adaptivePlugin from '@fullcalendar/react-scheduler/adaptive'
import resourceTimelinePlugin from '@fullcalendar/react-scheduler/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/react-scheduler/resource-timegrid'

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/monarch/theme.css' // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE

<FullCalendar
  schedulerLicenseKey='XXX'
  plugins={[
    themePlugin,
    adaptivePlugin,
    resourceTimelinePlugin,
    resourceTimeGridPlugin,
  ]}
/>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


### Vue

First, visit [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For example, `monarch` with color palette `purple`. This choice will be used in the examples below.


#### Standard Plugins

Install the Vue 3 standard package along with temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install @fullcalendar/vue3@beta temporal-polyfill
```

Initialize in the JS:

```vue
<script setup>
  import FullCalendar from '@fullcalendar/vue3'
  import themePlugin from '@fullcalendar/vue3/themes/monarch' // YOUR THEME
  import interactionPlugin from '@fullcalendar/vue3/interaction'
  import dayGridPlugin from '@fullcalendar/vue3/daygrid'
  import timeGridPlugin from '@fullcalendar/vue3/timegrid'
  import listPlugin from '@fullcalendar/vue3/list'
  import multimonthPlugin from '@fullcalendar/vue3/multimonth'

  import '@fullcalendar/vue3/skeleton.css'
  import '@fullcalendar/vue3/themes/monarch/theme.css' // YOUR THEME
  import '@fullcalendar/vue3/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE
</script>

<template>
  <FullCalendar
    :options="{
      plugins: [
        themePlugin,
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        multimonthPlugin,
      ],
    }"
  />
</template>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


#### Premium Plugins

Install the Vue 3 "scheduler" package along with the "standard" package and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  @fullcalendar/vue3-scheduler@beta \
  @fullcalendar/vue3@beta \
  temporal-polyfill
```

Initialize in the JS:

```vue
<script setup>
  import FullCalendar from '@fullcalendar/vue3'
  import themePlugin from '@fullcalendar/vue3/themes/monarch' // YOUR THEME
  import adaptivePlugin from '@fullcalendar/vue3-scheduler/adaptive'
  import resourceTimelinePlugin from '@fullcalendar/vue3-scheduler/resource-timeline'
  import resourceTimeGridPlugin from '@fullcalendar/vue3-scheduler/resource-timegrid'

  import '@fullcalendar/vue3/skeleton.css'
  import '@fullcalendar/vue3/themes/monarch/theme.css' // YOUR THEME
  import '@fullcalendar/vue3/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE
</script>

<template>
  <FullCalendar
    :options="{
      schedulerLicenseKey: 'XXX',
      plugins: [
        themePlugin,
        adaptivePlugin,
        resourceTimelinePlugin,
        resourceTimeGridPlugin,
      ],
    }"
  />
</template>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


### Angular

First, visit [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For example, `monarch` with color palette `purple`. This choice will be used in the examples below.


#### Standard Plugins

Install the Angular standard package along with the vanilla JS package and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install @fullcalendar/angular@beta fullcalendar@beta temporal-polyfill
```

**NOTE:** Though you are installing the vanilla JS `fullcalendar` package, you will NOT be importing it directly from your JS. You will ONLY be importing `@fullcalendar/angular`.

Add the module:

```diff
+ import { FullCalendarModule } from '@fullcalendar/angular';

  @Component({
    selector: 'app-root',
    standalone: true,
-   imports: [CommonModule],
+   imports: [CommonModule, FullCalendarModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
```

Add your theme, plugins, and options:

```diff
- import { FullCalendarModule } from '@fullcalendar/angular';
+ import { FullCalendarModule, CalendarOptions } from '@fullcalendar/angular';
+ import themePlugin from '@fullcalendar/angular/themes/monarch'; // YOUR THEME
+ import interactionPlugin from '@fullcalendar/angular/interaction';
+ import dayGridPlugin from '@fullcalendar/angular/daygrid';

  // ...

  export class App {
+   calendarOptions = signal<CalendarOptions>({
+     plugins: [
+       themePlugin,
+       interactionPlugin,
+       dayGridPlugin,
+     ],
+     editable: true,
+   })
```

Declare the calendar in your template:

```txt
<full-calendar [options]='calendarOptions()'>
```

Add the following stylesheets to your `angular.json`:

```diff
  {
    "projects": {        // ...
      "my-project": {    // ...
        "architect": {   // ...
          "build": {     // ...
            "options": { // ...
              "styles": [
+               "@fullcalendar/angular/skeleton.css",
+               "@fullcalendar/angular/themes/classic/theme.css", // YOUR THEME
+               "@fullcalendar/angular/themes/classic/palette.css", // YOUR THEME + PALETTE
                "src/styles.css"
              ]
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


#### Premium Plugins

Install the following packages, including temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  @fullcalendar/angular-scheduler@beta \
  @fullcalendar/angular@beta \
  fullcalendar-scheduler@beta \
  fullcalendar@beta \
  temporal-polyfill
```

**NOTE:** Though you are installing the vanilla JS `fullcalendar-scheduler` and `fullcalendar` packages, you will NOT be importing them directly from your JS. You will ONLY be importing `@fullcalendar/angular-scheduler` and `@fullcalendar/angular`.

Building on the "standard" code samples above, you can incorporate plugins from the `@fullcalendar/angular-scheduler` package:

```diff
  import { FullCalendarModule } from '@fullcalendar/angular';
  import { FullCalendarModule, CalendarOptions } from '@fullcalendar/angular';
  import themePlugin from '@fullcalendar/angular/themes/monarch'; // YOUR THEME
  import interactionPlugin from '@fullcalendar/angular/interaction';
  import dayGridPlugin from '@fullcalendar/angular/daygrid';
+ import resourceTimelinePlugin from '@fullcalendar/angular-scheduler/resource-timeline'
+ import resourceTimeGridPlugin from '@fullcalendar/angular-scheduler/resource-timegrid'

  import '@fullcalendar/angular/skeleton.css'
  import '@fullcalendar/angular/themes/monarch/theme.css' // YOUR THEME
  import '@fullcalendar/angular/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE

  // ...

  export class App {
    calendarOptions = signal<CalendarOptions>({
      plugins: [
        themePlugin,
        interactionPlugin,
        dayGridPlugin,
+       resourceTimelinePlugin,
+       resourceTimeGridPlugin,
      ],
      editable: true,
+     schedulerLicenseKey: 'XXX',
    })
```


### Vanilla JS

First, visit the [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For example, `monarch` with color palette `purple`. This choice will be used in the examples below.


#### Standard Plugins

Install the vanilla JS "standard" package along with temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install fullcalendar@beta temporal-polyfill
```

Initialize in the JS:

```js
import { Calendar } from 'fullcalendar'
import themePlugin from 'fullcalendar/themes/monarch' // YOUR THEME
import interactionPlugin from 'fullcalendar/interaction'
import dayGridPlugin from 'fullcalendar/daygrid'
import timeGridPlugin from 'fullcalendar/timegrid'
import listPlugin from 'fullcalendar/list'
import multimonthPlugin from 'fullcalendar/multimonth'

import 'fullcalendar/skeleton.css'
import 'fullcalendar/themes/monarch/theme.css' // YOUR THEME
import 'fullcalendar/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
  plugins: [
    themePlugin,
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    multimonthPlugin,
  ],
})
calendar.render()
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.

It's possible to use global `<script>` tags as well:

```html
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/skeleton.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/theme.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/palettes/purple.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/all.global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/global.min.js'></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar')
    var calendar = new FullCalendar.Calendar(calendarEl, {
      // your props here
    })
    calendar.render()
  })
</script>
<div id='calendar'></div>
```


#### Premium Plugins

Install the vanilla JS "scheduler" package along with the "standard" package and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  fullcalendar-scheduler@beta \
  fullcalendar@beta \
  temporal-polyfill
```

Initialize in the JS:

```js
import { Calendar } from 'fullcalendar'
import themePlugin from 'fullcalendar/theme-monarch' // YOUR THEME
import adaptivePlugin from 'fullcalendar-scheduler/adaptive'
import resourceTimelinePlugin from 'fullcalendar-scheduler/resource-timeline'
import resourceTimeGridPlugin from 'fullcalendar-scheduler/resource-timegrid'

import 'fullcalendar/skeleton.css'
import 'fullcalendar/themes/monarch/theme.css' // YOUR THEME
import 'fullcalendar/themes/monarch/palettes/purple.css' // YOUR THEME + PALETTE

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'XXX',
  plugins: [
    themePlugin,
    adaptivePlugin,
    resourceTimelinePlugin,
    resourceTimeGridPlugin,
  ],
})
calendar.render()
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.

It's possible to use global `<script>` tags as well:

```html
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/skeleton.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/theme.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/palettes/purple.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/all.global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.7/themes/monarch/global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@7.0.0-beta.7/all.global.min.js'></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar')
    var calendar = new FullCalendar.Calendar(calendarEl, {
      schedulerLicenseKey: 'XXX',
      // your props here
    })
    calendar.render()
  })
</script>
<div id='calendar'></div>
```


### Color Palettes

The 5 stock themes come with their own "palettes", which define color values:

- **Monarch** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-monarch/src/palettes)
- **Forma** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-forma/src/palettes)
- **Breezy** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-breezy/src/palettes)
- **Pulse** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-pulse/src/palettes)
- **Classic** - there is only one - [`palette.css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-classic/src/palette.css)

Feel free to fork these CSS files into your own codebase and customize their color values! Here's how to wire it up in your JS:

```diff
  import 'fullcalendar/skeleton.css'
  import 'fullcalendar/themes/monarch/theme.css'
- import 'fullcalendar/themes/monarch/palettes/purple.css'
+ import './my-forked-monarch-color-palette.css'
```


#### Dark Mode

All stock themes support dark mode, but your app must explicitly opt-in via the `data-color-scheme="dark"` HTML attribute:

```html
<body data-color-scheme="dark">
```

If you want to use a custom selector for toggling dark mode, **you must fork one of the above palette CSS files** and rewrite the selector:

```diff
-  [data-color-scheme=dark] {
+  .my-custom-dark-class-name {
    --fc-monarch-primary: #D0BCFF;
    --fc-monarch-primary-foreground: #381E72;
```

Similarly, if you want the user's system to decide dark mode, modify the selector like this:

```diff
-  [data-color-scheme=dark] {
+  @media (prefers-color-scheme: dark) {
    --fc-monarch-primary: #D0BCFF;
    --fc-monarch-primary-foreground: #381E72;
```


## Custom Themes

At its heart, the theme system is just a ton of class name props.

You can supply a `string` argument for each, or a function that accepts `state` and returns a `string`.

To combine multiple class names, we recommend using the [clsx](https://www.npmjs.com/package/clsx) utility.

We are working an extensive reference for all class name props, but in the meantime, please consult the existing theme files:

- **Monarch** - [event-calendar.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-monarch/_compiled/event-calendar.tsx), [scheduler.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-monarch/_compiled/scheduler.tsx)
- **Forma** - [event-calendar.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-forma/_compiled/event-calendar.tsx), [scheduler.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-forma/_compiled/scheduler.tsx)
- **Breezy** - [event-calendar.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-breezy/_compiled/event-calendar.tsx), [scheduler.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-breezy/_compiled/scheduler.tsx)
- **Pulse** - [event-calendar.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-pulse/_compiled/event-calendar.tsx), [scheduler.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-pulse/_compiled/scheduler.tsx)
- **Classic** - [event-calendar.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-classic/_compiled/event-calendar.tsx), [scheduler.tsx](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-default-react-tailwind/src/theme-classic/_compiled/scheduler.tsx)

Here's how you might write a custom theme with various styling solutions...


### Tailwind

```jsx
import { clsx } from 'clsx'

<FullCalendar
  dayRowClass='border border-gray-500'
  dayCellClass={(state) => clsx(
    'border border-gray-400',
    state.isToday && 'bg-yellow-500',
  )}
/>
```


### CSS Modules

```jsx
import { clsx } from 'clsx'
import classNames from './styles.module.css'

<FullCalendar
  dayRowClass={classNames.row}
  dayCellClass={(state) => clsx(
    classNames.cell,
    state.isToday && classNames.cellToday,
  )}
/>
```

`styles.module.css`:

```css
.row {
  border: 1px solid #6b7280;
}

.cell {
  border: 1px solid #9ca3af;
}

.cellToday {
  background-color: #eab308;
}
```


### Global CSS

```jsx
import { clsx } from 'clsx'
import './global-styles.css'

<FullCalendar
  dayRowClass='calendar-row'
  dayCellClass={(state) => clsx(
    'calendar-cell',
    state.isToday && 'calendar-cell-today',
  )}
/>
```

`global-styles.css`:

```css
.calendar-row {
  border: 1px solid #6b7280;
}

.calendar-cell {
  border: 1px solid #9ca3af;
}

.calendar-cell-today {
  background-color: #eab308;
}
```


## Shadcn

[Shadcn](https://ui.shadcn.com/) is a React component framework.

FullCalendar inherits all style variables from the Shadcn theme while also allowing choice in theme "flavor". Visit [themes.fullcalendar.io/shadcn](https://themes.fullcalendar.io/shadcn) to see the available flavors (`monarch`, `forma`, `breezy`, `pulse`, and `classic`).

Choose a flavor and add it to your `components.json`:

```jsonc
{
  "registries": {
    "@fullcalendar-monarch": "https://shadcn-registry.fullcalendar.io/monarch/{name}.json"
    //             ^^^^^^^ YOUR FLAVOR                                ^^^^^^^ YOUR FLAVOR
  }
}
```


### Standard Plugins

Install a Shadcn event calendar with standard plugins:

```bash
npx shadcn@latest add @fullcalendar-monarch/event-calendar
#                                   ^^^^^^^ YOUR FLAVOR
```

Then, easily render a demo:

```jsx
import { EventCalendarDemo } from '@/components/event-calendar-demo'

<div className='px-5'>
  <EventCalendarDemo />
</div>
```

Feel free to dissect the `event-calendar-demo.tsx` file and delete when done.


### Premium Plugins

Install an Shadcn event calendar with premium plugins (aka "scheduler").

```bash
npx shadcn@latest add @fullcalendar-monarch/scheduler
#                                   ^^^^^^^ YOUR FLAVOR
```

Then, easily render a demo:

```jsx
import { ResourceTimelineDemo } from '@/components/resource-timeline-demo'
import { ResourceTimeGridDemo } from '@/components/resource-timegrid-demo'

<div className='px-5'>
  <ResourceTimelineDemo />
  <ResourceTimeGridDemo />
</div>
```

Feel free to dissect the `resource-timeline-demo.tsx` and `resource-timegrid-demo.tsx` files and delete when done.


## MUI

MUI's [Material UI](https://mui.com/material-ui/) is a React component framework.

FullCalendar inherits all style variables from the MUI theme while also allowing choice in theme "flavor". Visit [themes.fullcalendar.io/mui](https://themes.fullcalendar.io/mui) to see the available flavors (`monarch`, `forma`, `breezy`, `pulse`, and `classic`). This choice will be used in the examples below.


### Standard Plugins

Install the MUI package, the React "standard" package, and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  @fullcalendar/mui@beta \
  @fullcalendar/react@beta \
  temporal-polyfill
```

There are two ways to initialize a component:


#### Option 1: Stock Component

FullCalendar provides a stock MUI `EventCalendar` component with standard plugins and toolbar:

```jsx
import EventCalendar from '@fullcalendar/mui/monarch/EventCalendar' // YOUR FLAVOR

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/mui/monarch/theme.css' // YOUR FLAVOR

<EventCalendar
  // your props here
/>
```


#### Option 2: Composable Components

Alternatively, you can control the exact plugins and toolbar:

```jsx
import { useCalendarController } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import timeGridPlugin from '@fullcalendar/react/timegrid'
import EventCalendarContainer from '@fullcalendar/mui/monarch/EventCalendarContainer' // YOUR FLAVOR
import EventCalendarToolbar from '@fullcalendar/mui/monarch/EventCalendarToolbar' // YOUR FLAVOR
import EventCalendarViews from '@fullcalendar/mui/monarch/EventCalendarViews' // YOUR FLAVOR

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/mui/monarch/theme.css' // YOUR FLAVOR

function CustomEventCalendar(props) {
  const controller = useCalendarController()

  return (
    <EventCalendarContainer>
      {/* use toolbar as-is or write your own */}
      <EventCalendarToolbar
        controller={controller}
        availableViews={['dayGridMonth', 'timeGridWeek', 'timeGridDay']}
      />
      <EventCalendarViews
        controller={controller}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView='dayGridMonth'
        navLinkWeekClick='timeGridWeek'
        navLinkDayClick='timeGridDay'
        events={props.events}
      />
    </EventCalendarContainer>
  )
}
```

For further inspiration, see what the stock [EventCalendar](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-mui/src/monarch/EventCalendar.tsx) and [EventCalendarToolbar](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-mui/src/monarch/EventCalendarToolbar.tsx) do.


### Premium Plugins

Install the MUI package, the React "scheduler" package, the React "standard" package, and temporal-polyfill ([more info](#temporal-polyfill)):

```bash
npm install \
  @fullcalendar/mui@beta \
  @fullcalendar/react-scheduler@beta \
  @fullcalendar/react@beta \
  temporal-polyfill
```

There are two ways to initialize a component:


#### Option 1: Stock Component

FullCalendar provides stock MUI components with preset toolbar:

```jsx
import ResourceTimeline from '@fullcalendar/mui/monarch/ResourceTimeline' // YOUR FLAVOR
import ResourceTimeGrid from '@fullcalendar/mui/monarch/ResourceTimeGrid' // YOUR FLAVOR

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/mui/monarch/theme.css' // YOUR FLAVOR

<div>
  <ResourceTimeline
    // your props here
  />
  <ResourceTimeGrid
    // your props here
  />
</div>
```


#### Option 2: Composable Components

Alternatively, you can control the exact plugins and toolbar:

```jsx
import { useCalendarController } from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/react-scheduler/resource-timeline'
import EventCalendarContainer from '@fullcalendar/mui/monarch/EventCalendarContainer' // YOUR FLAVOR
import EventCalendarToolbar from '@fullcalendar/mui/monarch/EventCalendarToolbar' // YOUR FLAVOR
import SchedulerViews from '@fullcalendar/mui/monarch/SchedulerViews' // YOUR FLAVOR

import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/mui/monarch/theme.css' // YOUR FLAVOR

function CustomScheduler(props) {
  const controller = useCalendarController()

  return (
    <EventCalendarContainer>
      {/* use toolbar as-is or write your own */}
      <EventCalendarToolbar
        controller={controller}
        availableViews={['resourceTimelineMonth', 'resourceTimelineWeek', 'resourceTimelineDay']}
      />
      <SchedulerViews
        controller={controller}
        plugins={[resourceTimelinePlugin]}
        initialView='resourceTimelineMonth'
        navLinkWeekClick='resourceTimelineWeek'
        navLinkDayClick='resourceTimelineDay'
        resources={props.resources}
        events={props.events}
      />
    </EventCalendarContainer>
  )
}
```

For further inspiration, see what the stock [ResourceTimeline](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-mui/src/monarch/ResourceTimeline.tsx), [ResourceTimeGrid](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-mui/src/monarch/ResourceTimeGrid.tsx), and [EventCalendarToolbar](https://github.com/fullcalendar/fullcalendar-workspace/blob/v7-dev/theming/ui-mui/src/monarch/EventCalendarToolbar.tsx) do.


## Temporal Polyfill

The [temporal-polyfill](https://www.npmjs.com/package/temporal-polyfill) package is now a peer dependency of all the FullCalendar packages. This means you are required to install it.

The "Temporal" [built-in browser API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) is coming to all modern browsers, and this package is a polyfill for it, which means it allows you to use it before it's officially supported.

FullCalendar **DOES NOT INSTALL IT GLOBALLY** but instead uses it internally. For v7, FullCalendar uses the [tree-shakeable API](https://github.com/fullcalendar/temporal-polyfill?tab=readme-ov-file#tree-shakable-api), meaning the code-size impact will be minimal and there will be no side-effects.

Though FullCalendar does not install the polyfill globally, you are welcome to do so for your projects:

```ts
import 'temporal-polyfill/global'
```
