<!--
NOTE: for new releases, update string "7.0.0-beta.5" for CDN links
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
  - [Angular](#angular)
  - [Vanilla JS](#vanilla-js)
    - [Standard Plugins](#standard-plugins-1)
    - [Premium Plugins](#premium-plugins-1)
  - [Color Palettes](#color-palettes)
    - [Dark Mode](#dark-mode)
- [Custom Themes](#custom-themes)
  - [Tailwind](#tailwind)
  - [CSS Modules](#css-modules)
  - [Global CSS](#global-css)
- [Shadcn](#shadcn)
  - [Standard Plugins](#standard-plugins-2)
  - [Premium Plugins](#premium-plugins-2)
- [MUI](#mui)
  - [Standard Plugins](#standard-plugins-3)
    - [Option 1: Stock Component](#option-1-stock-component)
    - [Option 2: Composable Components](#option-2-composable-components)
  - [Premium Plugins](#premium-plugins-3)
    - [Option 1: Stock Component](#option-1-stock-component-1)
    - [Option 2: Composable Components](#option-2-composable-components-1)


## Stock Themes

FullCalendar offers 5 beautiful stock themes that are intended to be used without any preexisting component library.


### React

First, visit [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For examples, `monarch` with color palette `purple`.

Next, install the react package, the core package, and your chosen theme:

```bash
npm install \
  @fullcalendar/react@beta \
  @fullcalendar/core@beta \
  @fullcalendar/theme-monarch@beta
  #                   ^^^^^^^ YOUR THEME
```


#### Standard Plugins

Install any standard plugins you wish to use:

```bash
npm install \
  @fullcalendar/interaction@beta \
  @fullcalendar/daygrid@beta \
  @fullcalendar/timegrid@beta \
  @fullcalendar/list@beta \
  @fullcalendar/multimonth@beta
```

Initialize in the JS:

```jsx
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multimonthPlugin from '@fullcalendar/multimonth'
import themePlugin from '@fullcalendar/theme-monarch' // YOUR THEME

import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css' // YOUR THEME
import '@fullcalendar/theme-monarch/palettes/purple.css' // YOUR THEME + PALETTE

<FullCalendar
  plugins={[
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    multimonthPlugin,
    themePlugin,
  ]}
/>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


#### Premium Plugins

Install any premium plugins you wish to use:

```bash
npm install \
  @fullcalendar/adaptive@beta \
  @fullcalendar/scrollgrid@beta \
  @fullcalendar/timeline@beta \
  @fullcalendar/resource@beta \
  @fullcalendar/resource-timeline@beta \
  @fullcalendar/resource-daygrid@beta \
  @fullcalendar/resource-timegrid@beta
```

Initialize in the JS:

```jsx
import FullCalendar from '@fullcalendar/react'
import adaptivePlugin from '@fullcalendar/adaptive'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import themePlugin from '@fullcalendar/theme-monarch' // YOUR THEME

import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css' // YOUR THEME
import '@fullcalendar/theme-monarch/palettes/purple.css' // YOUR THEME + PALETTE

<FullCalendar
  schedulerLicenseKey='XXX'
  plugins={[
    adaptivePlugin,
    resourceTimelinePlugin,
    resourceTimeGridPlugin,
    themePlugin,
  ]}
/>
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.


### Vue

Coming soon


### Angular

Coming soon


### Vanilla JS

First, visit the [themes.fullcalendar.io](https://themes.fullcalendar.io) and choose a theme (`monarch`, `forma`, `breezy`, `pulse`, or `classic`) and color palette. For examples, `monarch` with color palette `purple`.

Next, install the core package and your chosen theme:

```bash
npm install @fullcalendar/core @fullcalendar/theme-monarch
#                                                  ^^^^^^^ YOUR THEME
```


#### Standard Plugins

Install any standard plugins you wish to use:

```bash
npm install \
  @fullcalendar/interaction@beta \
  @fullcalendar/daygrid@beta \
  @fullcalendar/timegrid@beta \
  @fullcalendar/list@beta \
  @fullcalendar/multimonth@beta
```

Initialize in the JS:

```js
import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multimonthPlugin from '@fullcalendar/multimonth'
import themePlugin from '@fullcalendar/theme-monarch' // YOUR THEME

import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css' // YOUR THEME
import '@fullcalendar/theme-monarch/palettes/purple.css' // YOUR THEME + PALETTE

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
  plugins: [
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    multimonthPlugin,
    themePlugin,
  ],
})
calendar.render()
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.

It's possible to use global `<script>` tags as well:

```html
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.5/skeleton.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/theme.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/palettes/purple.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.0.0-beta.5/global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/global.min.js'></script>
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

Install any premium plugins you wish to use:

```bash
npm install \
  @fullcalendar/adaptive@beta \
  @fullcalendar/scrollgrid@beta \
  @fullcalendar/timeline@beta \
  @fullcalendar/resource@beta \
  @fullcalendar/resource-timeline@beta \
  @fullcalendar/resource-daygrid@beta \
  @fullcalendar/resource-timegrid@beta
```

Initialize in the JS:

```js
import { Calendar } from '@fullcalendar/core'
import adaptivePlugin from '@fullcalendar/adaptive'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'
import themePlugin from '@fullcalendar/theme-monarch' // YOUR THEME

import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css' // YOUR THEME
import '@fullcalendar/theme-monarch/palettes/purple.css' // YOUR THEME + PALETTE

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: 'XXX',
  plugins: [
    adaptivePlugin,
    resourceTimelinePlugin,
    resourceTimeGridPlugin,
    themePlugin,
  ],
})
calendar.render()
```

For further explanation of palettes and dark mode, see the [Color Palettes](#color-palettes) section.

It's possible to use global `<script>` tags as well:

```html
<link href='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@7.0.0-beta.5/skeleton.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/theme.min.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/palettes/purple.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@7.0.0-beta.5/global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/theme-monarch@7.0.0-beta.5/global.min.js'></script>
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


### Color Palettes

The 5 stock themes come with their own "palettes", which define color values:

- **Monarch** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-monarch/src/palettes)
- **Forma** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-forma/src/palettes)
- **Breezy** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-breezy/src/palettes)
- **Pulse** - choose from [`palettes/[name].css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-pulse/src/palettes)
- **Classic** - there is only one - [`palette.css`](https://github.com/fullcalendar/fullcalendar-workspace/tree/v7-dev/standard/theming/theme-classic/src/palette.css)

Feel free to fork these CSS files into your own codebase and customize their color values! For example, this original JS:

```js
import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css'
import '@fullcalendar/theme-monarch/palettes/purple.css'
```

would become this:

```js
import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/theme-monarch/theme.css'
import './my-forked-monarch-color-palette.css'
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

FullCalendar inherits all style variables from the MUI theme while also allowing choice in theme "flavor". Visit [themes.fullcalendar.io/mui](https://themes.fullcalendar.io/mui) to see the available flavors (`monarch`, `forma`, `breezy`, `pulse`, and `classic`).

Next, install the mui package, the react package, the core package, and your chosen theme:

```bash
npm install \
  @fullcalendar/mui@beta \
  @fullcalendar/react@beta \
  @fullcalendar/core@beta \
  @fullcalendar/theme-monarch@beta
  #                   ^^^^^^^ YOUR FLAVOR
```


### Standard Plugins

There are two ways to install an MUI event calendar with standard plugins:


#### Option 1: Stock Component

FullCalendar provides a stock MUI `EventCalendar` component that **REQUIRES** the following dependencies:

```bash
npm install \
  @fullcalendar/interaction@beta \
  @fullcalendar/daygrid@beta \
  @fullcalendar/timegrid@beta \
  @fullcalendar/list@beta \
  @fullcalendar/multimonth@beta
```

Initialize in the JS:

```jsx
import EventCalendar from '@fullcalendar/mui/monarch/EventCalendar' // YOUR FLAVOR

import '@fullcalendar/core/skeleton.css'
import '@fullcalendar/mui/monarch/theme.css' // YOUR FLAVOR

<EventCalendar
  // your props here
/>
```


#### Option 2: Composable Components

Alternatively, install exactly the plugins you need, customize the views, or customize the toolbar:

```jsx
import { useCalendarController } from '@fullcalendar/react'
import EventCalendarContainer from '@fullcalendar/mui/monarch/EventCalendarContainer' // YOUR FLAVOR
import EventCalendarToolbar from '@fullcalendar/mui/monarch/EventCalendarToolbar' // YOUR FLAVOR
import EventCalendarViews from '@fullcalendar/mui/monarch/EventCalendarViews' // YOUR FLAVOR
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import '@fullcalendar/core/skeleton.css'
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

There are two ways to install an MUI event calendar with premium plugins (aka "scheduler"):


#### Option 1: Stock Component

FullCalendar provides stock MUI `ResourceTimeline` and `ResourceTimeGrid` components that **REQUIRE** the following dependencies:

```bash
npm install \
  @fullcalendar/adaptive@beta \
  @fullcalendar/scrollgrid@beta \
  @fullcalendar/timeline@beta \
  @fullcalendar/resource@beta \
  @fullcalendar/resource-timeline@beta \
  @fullcalendar/resource-daygrid@beta \
  @fullcalendar/resource-timegrid@beta
```

Initialize in the JS:

```jsx
import ResourceTimeline from '@fullcalendar/mui/monarch/ResourceTimeline' // YOUR FLAVOR
import ResourceTimeGrid from '@fullcalendar/mui/monarch/ResourceTimeGrid' // YOUR FLAVOR

import '@fullcalendar/core/skeleton.css'
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

Alternatively, install exactly the plugins you need, customize the views, or customize the toolbar:

```jsx
import { useCalendarController } from '@fullcalendar/react'
import EventCalendarContainer from '@fullcalendar/mui/monarch/EventCalendarContainer' // YOUR FLAVOR
import EventCalendarToolbar from '@fullcalendar/mui/monarch/EventCalendarToolbar' // YOUR FLAVOR
import SchedulerViews from '@fullcalendar/mui/monarch/SchedulerViews' // YOUR FLAVOR
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

import '@fullcalendar/core/skeleton.css'
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
