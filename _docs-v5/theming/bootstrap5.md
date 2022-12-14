---
title: Bootstrap 5 Theming
---

In order to correctly theme your calendar with a [Bootstrap 5](https://getbootstrap.com/) theme, you must include the correct stylesheets, include the JavaScript plugin, and set [themeSystem](themeSystem) to `'bootstrap5'`.


## Using a Bundle


You can use the Bootstrap plugin with [browser globals and script tags](initialize-globals). First, the Bootstrap stylesheet must be separately loaded in its own `<link>` tag. Also, a Bootstrap Icons stylesheet must be loaded ([more info](https://icons.getbootstrap.com/#install)). Example:

```html
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'>
<link href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css' rel='stylesheet'>
```

Then, load a FullCalendar bundle and initialize the calendar:

```html
<link href='fullcalendar/main.css' rel='stylesheet' />
<script src='fullcalendar/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  themeSystem: 'bootstrap5'
});
...
</script>
```

[See a demo &raquo;](bootstrap5-demo)


## Using an ES6 Build System


Alternatively, you can load the bootstrap plugin [using an ES6 build system](initialize-es6). Install the necessary FullCalendar packages first:

```
npm install --save @fullcalendar/core @fullcalendar/bootstrap5
```

Then, install the packages for Bootstrap and Bootstrap Icons:

```
npm install --save bootstrap bootstrap-icons
```

Then, import the necessary packages and initialize your calendar:

```js
// import the third-party stylesheets directly from your JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!

import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
...
var calendar = new Calendar(calendarEl, {
  plugins: [ bootstrap5Plugin ],
  themeSystem: 'bootstrap5'
});
...
```

Using `bootstrap-icons` with webpack is a bit complicated because it relies on font files that are not present in the main stylesheet. <a href='https://github.com/fullcalendar/fullcalendar-examples/tree/v5/bootstrap5' class='more-link'>See an example project that does it</a>


## 3rd Party Bootstrap Themes

You can use the standard Bootstrap theme downloaded from [getbootstrap.com](https://getbootstrap.com/).

You can also use themes downloaded from 3rd party providers. Google ["free bootstrap themes"](https://www.google.com/search?q=free+bootstrap+themes) as a starting point.

The theme you download might already have custom CSS written to style FullCalendar. If so, all the above steps of including the plugin files and specifying `theme: 'bootstrap5'` are unnecessary. If in doubt, try both methods to see which one looks better.
