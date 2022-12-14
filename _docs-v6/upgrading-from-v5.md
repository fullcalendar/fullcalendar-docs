---
title: V6 Beta Release Notes and Upgrade Guide
layout: text
---

<style>
  #toc {
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 35px;
  }
  #toc h2 { margin-left: 20px; margin-top: 0 }
  #toc ul { margin-left: 20px; list-style-position: inside  }
</style>

<div class='sidebar-layout'>
<div class='sidebar-layout__main' id='summary' markdown='1'>

The primary goal of V6 is to solve bugs related to the *installation* of FullCalendar's packages. Beyond installing some new packages and rewriting some `import` statements, there are very few breaking API changes.

**Want the code?** [Read the instructions](initialize-es6)

**Want the full docs** in a non-changelog format? [View the docs]({{ site.baseurl }})

**Found a bug?** [Report it on the issue tracker]({{ site.baseurl }}/reporting-bugs)


## Bundlers & CSS

**DX:** FullCalendar no longer attempts to import `.css` files. Instead, FullCalendar's JS is responsible for injecting its own CSS. This solves many issues with third-party bundlers:

- **Webpack**: no longer necessary to use css-loader (see [v6 example project](https://github.com/fullcalendar/fullcalendar-examples/blob/main/webpack/webpack.config.js))
- **Rollup**: no longer necessary to use a css-processing plugin (like postcss) (see [v6 example project](https://github.com/fullcalendar/fullcalendar-examples/blob/main/rollup/rollup.config.js))
- **NextJS**: no longer necessary to ignore and manually import .css files (see [v6 example project](https://github.com/fullcalendar/fullcalendar-examples/tree/main/next), [#6674])

**DX:** Overriding FullCalendar's CSS variables no longer [requires any build system configuration]({{ site.baseurl }}/v5/css-customization#css-variables). You can simply write CSS variables anywhere you'd like:

```css
--fc-border-color: black;
--fc-daygrid-event-dot-width: 5px;
```


## Peer Dependencies

Using [peerDependencies](https://nodejs.org/es/blog/npm/peer-dependencies/) solves problems with deduplication ([#6370], [angular-404]).

**Breaking:** The `@fullcalendar/core` package is now a peer-dependency of all other packages, meaning users of **React, Angular, and Vue** must install it alongside their connector. For example, with React:

```sh
npm install \
  @fullcalendar/core \   # always install core!
  @fullcalendar/react \  # the connector (react/angular/vue)
  @fullcalendar/daygrid  # any additional plugins
```

**Breaking:** The `@fullcalendar/resource` package (previously name `@fullcalendar/resource-common`) is now a peer-dependency of all other resource-related packages, meaning it **must be installed manually**, whether using a connector or not:

```sh
npm install \
  @fullcalendar/core \
  @fullcalendar/resource \  # always install when using resources!
  @fullcalendar/resource-timeline  # a plugin that uses resources
```


## Import Statements

**Bugfix:** The `@fullcalendar/core` package no longer needs to be imported before all other packages ([#6371], [react-144], [vue-152]). Avoids the need for [Vite](https://vitejs.dev/) workarounds.

**Breaking:** Many internal-only utilities have been moved from `@fullcalendar/core` to `@fullcalendar/core/internal`, which is not meant for public consumption. If you feel one of these utilities should be publicly exposed, please file a ticket.

```diff
- import { someInternalUtil } from '@fullcalendar/core'          // no longer works!
+ import { someInternalUtil } from '@fullcalendar/core/internal' // works, but please file a ticket
```


## Content Injection

For **vanilla JS** users who write [content-injection functions](content-injection) (like `eventContent`), there are some small changes to be aware of.

**Breaking:** It is not recommended to import `preact` for supplying virtual DOM nodes. Instead, import from FullCalendar's entrypoint:

```diff
- import { h } from 'preact'
+ import { h } from '@fullcalendar/core/preact'
```

**Breaking:** Previously, a function that returned nothing would render default content. Now, an empty container will be rendered:

```js
eventContent: function(arg) {
  return // returning nothing renders nothing!
}
```


## Angular-specific Changes

**Bugfix:** Support for Angular 14 and above has been restored ([angular-403], [v6 example project](https://github.com/fullcalendar/fullcalendar-examples/tree/main/angular15))

**DX:** An Ivy library is now being published ([angular-396])

**Breaking:** The minimum supported Angular version is now Angular 12. Also, support for the legacy View Engine has been dropped.

**Breaking:** The Angular connector no longer re-exports everything from `@fullcalendar/core`. You must import utilities and types from core:

```diff
- import { CalendarOptions } from '@fullcalendar/angular'
+ import { CalendarOptions } from '@fullcalendar/core'
```

**Breaking:** Plugins are no longer registered via `FullCalendarModule.registerPlugins`:

```diff
// app.module.ts

  import { FullCalendarModule } from '@fullcalendar/angular'
- import dayGridPlugin from '@fullcalendar/daygrid'
- import interactionPlugin from '@fullcalendar/interaction'

- FullCalendarModule.registerPlugins([
-   dayGridPlugin,
-   interactionPlugin
- ]);

// ...
```

Instead, register them where you write your component code:

```diff
// app.component.ts

  import { Component } from '@angular/core'
  import { CalendarOptions } from '@fullcalendar/core'
+ import dayGridPlugin from '@fullcalendar/daygrid'
+ import interactionPlugin from '@fullcalendar/interaction'

  @Component({
    selector: 'app-root',
    template: '<full-calendar [options]="calendarOptions"></full-calendar>',
  })
  export class AppComponent {
    calendarOptions: CalendarOptions = {
+     plugins: [
+       dayGridPlugin,
+       interactionPlugin,
+     ],
      initialView: 'dayGridMonth',
    }
  }
```

**Feature:** Expose `events`, `eventSources`, and `resources` as top-level Inputs for easier binding ([angular-303](https://github.com/fullcalendar/fullcalendar-angular/issues/303)), making use of `async` easier:

```
<full-calendar
  [options]="calendarOptions"
  [events]="events$ | async"
></full-calendar>
```

**Feature:** Content-injection properties (like `eventContent`) can now be customized with `ng-template` ([angular-204](https://github.com/fullcalendar/fullcalendar-angular/issues/204)):

```
<full-calendar [options]="calendarOptions">
  <ng-template #eventContent let-arg>
    <b>{% raw %}{{{% endraw %} arg.event.title {% raw %}}}{% endraw %}</b>
  </ng-template>
</full-calendar>
```

Each template accepts a single argument ([more information](angular#nested-templates)).


## Vue-specific Changes

**Bugfix:** Custom markup given to slots (like `eventContent`) now properly supports binding, [custom global properties](https://vuejs.org/api/application.html#app-config-globalproperties), and [async components](https://vuejs.org/guide/components/async.html). Essentially, slots now behave as they should ([vue-169], [vue-141], [vue-128], [vue-122]). Fixed for both the Vue2 and Vue3 connectors.

**Performance:** Custom markup given to slots (like `eventContent`) now renders much faster ([vue-191]).

**Breaking:** The Vue connector no longer re-exports everything from `@fullcalendar/core`. You must import utilities and types from core:

```diff
- import { CalendarOptions } from '@fullcalendar/vue3'
+ import { CalendarOptions } from '@fullcalendar/core'
```


## React-specific Changes

**Breaking:** The React connector no longer re-exports everything from `@fullcalendar/core`. You must import utilities and types from core:

```diff
- import { CalendarOptions } from '@fullcalendar/react'
+ import { CalendarOptions } from '@fullcalendar/core'
```

**Internal:** The React connector no longer replaces the core package's Preact renderer with a React renderer. Thus, the React connector will ultimately use Preact. This change was necessary to circumvent a number of developer experience problems, such as [import statement ordering](#import-statements) and `StrictMode` warnings. It has the following implications (or lack thereof):

- **NO** significant performance implications
- **NO** API changes. Furthermore, React virtual dom nodes are still given to [content-injection props](react#content-injection) like `eventContent`
- **Bundle size** increase of about 3k as a result of including Preact

The codebase will likely be rearchitected in the future to once again support a dual React/Preact renderer.


## Web Component Package

**Feature:** The [Web Components API][web-components] provide a standardized way to make reusable custom elements. FullCalendar offers a custom element in the new  `@fullcalendar/web-component` package. [Learn how to use it &raquo;](https://github.com/fullcalendar/fullcalendar/tree/main/packages/web-component)


## iCalendar Package

**Breaking:** Users of the `@fullcalendar/icalendar` package must now install `ical.js` themselves. This is because `ical.js` is now a peer dependency.

```
npm install @fullcalendar/icalendar ical.js
```


## Script Tag Usage

**Breaking:** Previously, the paths to FullCalendar's [script tag globals](initialize-globals) JS files were inconsistently named as `main.min.js` or `main.global.min.js`. Now, they are always named `index.global.min.js`. Examples:

- [https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v6 }}/index.global.min.js](https://cdn.jsdelivr.net/npm/fullcalendar@{{ site.data.latest-releases.v6 }}/index.global.min.js)
- [https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@{{ site.data.latest-releases.v6 }}/index.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@{{ site.data.latest-releases.v6 }}/index.global.min.js)

**Breaking:** The `fullcalendar` and `fullcalendar-scheduler` packages no longer contain locale files. Instead, always use `@fullcalendar/core`:

- **All locales:** [https://cdn.jsdelivr.net/npm/@fullcalendar/core@{{ site.data.latest-releases.v6 }}/locales-all.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/core@{{ site.data.latest-releases.v6 }}/locales-all.global.min.js)
- **Single locale:** [https://cdn.jsdelivr.net/npm/@fullcalendar/core@{{ site.data.latest-releases.v6 }}/locales/es.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/core@{{ site.data.latest-releases.v6 }}/locales/es.global.min.js)

**Breaking:** The `fullcalendar` and `fullcalendar-scheduler` bundles that are meant to be used as [script tag globals](initialize-globals) no longer contain the following packages:

- `@fullcalendar/bootstrap5`
- `@fullcalendar/bootstrap`
- `@fullcalendar/google-calendar`

Instead, they should be included as separate script tags:

- [https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap5@{{ site.data.latest-releases.v6 }}/index.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap5@{{ site.data.latest-releases.v6 }}/index.global.min.js)
- [https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap@{{ site.data.latest-releases.v6 }}/index.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap@{{ site.data.latest-releases.v6 }}/index.global.min.js)
- [https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@{{ site.data.latest-releases.v6 }}/index.global.min.js](https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@{{ site.data.latest-releases.v6 }}/index.global.min.js)


## IE 11 Dropped

Support for IE 11 has been dropped.

FullCalendar now distributes JS with (ES6) ES2015 syntax. Thus, reliance on `tslib` as a dependency has been dropped.


## Fetch versus XHR

**Internal:** The [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) browser API is now used instead of [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to make JSON feed requests ([#6772](https://github.com/fullcalendar/fullcalendar/issues/6772))

**Breaking:** The second argument given to [`eventSourceSuccess`](eventSourceSuccess) is no longer an XHR. It is now a fetch [Response] object.

**Feature:** [`eventSourceFailure`](eventSourceFailure)'s error object will contain a `response` property when failing on a JSON feed. It is a fetch [Response] object.


## Codebase Improvements

The tooling of the codebase has been refactored to improve the contributor experience. For example, [PNPM](https://pnpm.io/) and [Turborepo](https://turbo.build/) are now used. [View the master monorepo](https://github.com/fullcalendar/fullcalendar-workspace/tree/main) on GitHub.


</div>
<div class='sidebar-layout__sidebar sidebar-layout__sidebar--bordered' id='toc' markdown='1'>

## Table of Contents

- [Bundlers & CSS](#bundlers--css)
- [Peer Dependencies](#peer-dependencies)
- [Import Statements](#import-statements)
- [Content Injection](#content-injection)
- [Angular-specific Changes](#angular-specific-changes)
- [Vue-specific Changes](#vue-specific-changes)
- [React-specific Changes](#react-specific-changes)
- [Web Component Package](#web-component-package)
- [iCalendar Package](#icalendar-package)
- [Script Tag Usage](#script-tag-usage)
- [IE 11 Dropped](#ie-11-dropped)
- [Fetch versus XHR](#fetch-versus-xhr)
- [Codebase Improvements](#codebase-improvements)

</div>
</div>


[#6674]: https://github.com/fullcalendar/fullcalendar/issues/6674
[angular-396]: https://github.com/fullcalendar/fullcalendar-angular/issues/396
[angular-403]: https://github.com/fullcalendar/fullcalendar-angular/issues/403
[angular-web-components]: https://coryrylan.com/blog/using-web-components-in-angular
[web-components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
[#6371]: https://github.com/fullcalendar/fullcalendar/issues/6371
[react-144]: https://github.com/fullcalendar/fullcalendar-react/issues/144
[#6370]: https://github.com/fullcalendar/fullcalendar/issues/6370
[angular-404]: https://github.com/fullcalendar/fullcalendar-angular/issues/404
[vue-169]: https://github.com/fullcalendar/fullcalendar-vue/issues/169
[vue-141]: https://github.com/fullcalendar/fullcalendar-vue/issues/141
[vue-126]: https://github.com/fullcalendar/fullcalendar-vue/issues/126
[vue-128]: https://github.com/fullcalendar/fullcalendar-vue/issues/128
[vue-122]: https://github.com/fullcalendar/fullcalendar-vue/issues/122
[vue-152]: https://github.com/fullcalendar/fullcalendar-vue/issues/152
[vue-191]: https://github.com/fullcalendar/fullcalendar-vue/issues/191
[Response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
