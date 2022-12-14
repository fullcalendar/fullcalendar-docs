---
title: Bootstrap 4 Theming
---

In order to correctly theme your calendar with a [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) theme, you must include the correct stylesheets, include the JavaScript plugin, and set [themeSystem](themeSystem) to `'bootstrap'`.


## Using a Bundle


You can use the Bootstrap plugin with [browser globals and script tags](initialize-globals). First, the Bootstrap stylesheet must be separately loaded in its own `<link>` tag. Also, a FontAwesome stylesheet must be loaded ([more info](https://fontawesome.com/get-started)). Example:

```html
<link href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.css' rel='stylesheet'>
<link href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.css' rel='stylesheet'>
```

Then, load a FullCalendar bundle and initialize the calendar:

```html
<script src='fullcalendar/dist/index.global.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  themeSystem: 'bootstrap'
});
...
</script>
```


## Using an ES6 Build System


Alternatively, you can load the bootstrap plugin [using an ES6 build system](initialize-es6). Install the necessary FullCalendar packages first:

```
npm install --save \
  @fullcalendar/core \
  @fullcalendar/bootstrap
```

Then, install the packages for Bootstrap and FontAwesome:

```
npm install --save bootstrap@4 @fortawesome/fontawesome-free
```

Then, import the necessary packages and initialize your calendar:

```js
// import the third-party stylesheets directly from your JS
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!

import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
...
var calendar = new Calendar(calendarEl, {
  plugins: [ bootstrapPlugin ],
  themeSystem: 'bootstrap'
});
...
```

Using `fontawesome-free` with webpack is a bit complicated because it relies on font files that are not present in the main stylesheet. <a href='https://github.com/fullcalendar/fullcalendar-examples/tree/main/bootstrap4' class='more-link'>See an example project that does it</a>


## 3rd Party Bootstrap Themes

You can use the standard Bootstrap theme downloaded from [getbootstrap.com](https://getbootstrap.com/).

You can also use themes downloaded from 3rd party providers. Google ["free bootstrap themes"](https://www.google.com/search?q=free+bootstrap+themes) as a starting point.

The theme you download might already have custom CSS written to style FullCalendar. If so, all the above steps of including the plugin files and specifying `theme: 'bootstrap'` are unnecessary. If in doubt, try both methods to see which one looks better.
