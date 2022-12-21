---
title: locale
---

The `locale` and `locales` options allow you to localize certain aspects of the calendar:

- the text in buttons, as defined by [headerToolbar](headerToolbar)
- text that contains month or day-of-week strings
- date formatting, such as [eventTimeFormat](eventTimeFormat)
- [weekNumberCalculation](weekNumberCalculation)
- [firstDay](firstDay)


## Loading Locales for an ES6 build system

If you are using [an ES6 build system](initialize-es6) and want to load a specific locale, do something like this:

```js
import { Calendar } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
...
let calendar = new Calendar(calendarEl, {
  locale: esLocale
});
...
```

If you want to load multiple specific locales with the ability to switch between them after pageload, do something like this:

```js
import { Calendar } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
...
let calendar = new Calendar(calendarEl, {
  locales: [ esLocale, frLocale ],
  locale: 'fr' // the initial locale. of not specified, uses the first one
});
...
calendar.setOption('locale', 'es');
```

If you want to load ALL locales have the ability to switch between them after pageload, do something like this:

```js
import { Calendar } from '@fullcalendar/core';
import allLocales from '@fullcalendar/core/locales-all';
...
let calendar = new Calendar(calendarEl, {
  locales: allLocales,
  locale: 'fr' // the initial locale
});
...
calendar.setOption('locale', 'pt-br');
```


## Loading Locales with Script Tags and Browser Globals

If you are using [script tags and browser globals](initialize-globals) and want to load a specific locale, do something like this:

```html
<script src='fullcalendar/core/index.global.js'></script>
<script src='fullcalendar/core/locales/es.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  locale: 'es'
});
...
</script>
```

If you want to load ALL locales have the ability to switch between them after pageload, do something like this:

```html
<script src='fullcalendar/core/index.global.js'></script>
<script src='fullcalendar/core/locales-all.global.js'></script>
<script>
...
var calendar = new Calendar(calendarEl, {
  locale: 'es'
});
...
calendar.setOption('locale', 'fr');
</script>
```

For more information, [view a live demo](locale-demo).
