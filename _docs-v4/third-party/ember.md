---
title: Ember Component
title_for_landing: Ember
---

FullCalendar works with [Ember]. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This component is built and maintained by [Mariana Tek](https://github.com/mariana-tek).

- [Browse the Github repo](https://github.com/Mariana-Tek/ember-fullcalendar)


## Installation

### 1. Install Ember Addon

```
ember install @mariana-tek/ember-fullcalendar
```

This addon includes `@fullcalendar/core` as a dependency, but does not include any fullcalendar plugins which you will need to install manually.

### 2. Install additional fullcalendar plugins

As Fullcalendar v4 has a more "a la carte" structure, you will need to install the plugins you plan to use. See the [es6 initialization](https://fullcalendar.io/docs/initialize-es6) and [plugins](https://fullcalendar.io/docs/plugin-index) sections.

### 3. Import stylesheets from plugins that have styles

```js
// ember-cli-build.js

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    // ...all your configuration

    // If you install the @fullcalendar/daygrid plugin,
    // you would import it's stylesheet like so:
    app.import('node_modules/@fullcalendar/daygrid/main.css');

    return app.toTree();
};
```


## Usage

Inspired by [`fullcalendar-react`](https://github.com/fullcalendar/fullcalendar-react) this addon is written as a very lightweight wrapper around Fullcalendar v4. With one exception (`getFullCalendarRef`) the addon simply passes attributes through to Fullcalendar. If Fullcalendar has a complimentary option it will be utilized, otherwise the attribute will simply be ignored. To use this plugin you will need to be familiar with [Fullcalendar's API](https://fullcalendar.io/docs).

{% raw %}
```html
<FullCalendar
    @defaultDate={{this.defaultDate}}
    @defaultView={{this.defaultView}}
    @events={{this.events}}
    @plugins={{this.plugins}}
/>
```
{% endraw %}

### `getFullCalendarRef`

{% raw %}
```html
<FullCalendar
    @defaultDate={{this.defaultDate}}
    @getFullCalendarRef={{action (mut this ourCalendarRef)}}
/>
```
{% endraw %}

Most attributes (e.g. [`eventClick`](https://fullcalendar.io/docs/eventClick), [`slotDuration`](https://fullcalendar.io/docs/slotDuration)) can be passed directly to the component. A few parts of Fullcalendar's API (e.g. [`changeView`](https://fullcalendar.io/docs/v3/changeView), [`gotoDate`](https://fullcalendar.io/docs/v3/gotoDate)) will require you to pass an action or function to `getFullCalendarRef` that stores the reference to fullcalendar so that you can call it directly:

```js
this.ourCalendarRef.gotoDate(new Date(1999, 1, 1))
```


[Ember]: https://emberjs.com
