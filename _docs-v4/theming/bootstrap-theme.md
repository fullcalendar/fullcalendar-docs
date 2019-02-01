---
title: Bootstrap Theming
---

In order to correctly theme your calendar with a [Bootstrap 4](https://getbootstrap.com/) theme, you must include the correct stylesheets, include the JavaScript plugin, and set [themeSystem](themeSystem) to `'bootstrap'`.

The Bootstrap stylesheet must be separately loaded in its own `<link>` tag. Also, a FontAwesome stylesheet must be loaded ([more info](https://fontawesome.com/get-started)). Example:

```html
<link href='https://use.fontawesome.com/releases/v5.0.6/css/all.css' rel='stylesheet'>
<link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' />
```

Then, load the necessary FullCalendar resources and initialize the calendar:

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='fullcalendar/bootstrap/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script src='fullcalendar/bootstrap/main.js'></script>
<script>
...
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'bootstrap' ],
  themeSystem: 'bootstrap'
});
...
</script>
```

[See a demo &raquo;](bootstrap4-theme-demo)

Alternatively, you can load the bootstrap plugin [in an ES6 build system](initialize-es6):

```js
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
...
var calendar = new Calendar(calendarEl, {
  plugins: [ bootstrapPlugin ],
  themeSystem: 'bootstrap'
});
...
```

You'll still need to ensure you have the necessary FullCalendar stylesheets:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/bootstrap/main.css' rel='stylesheet' />
```

## 3rd Party Bootstrap Themes

You can use the standard Bootstrap theme downloaded from [getbootstrap.com](https://getbootstrap.com/).

You can also use themes downloaded from 3rd party providers. Google ["free bootstrap themes"](https://www.google.com/search?q=free+bootstrap+themes) as a starting point.

The theme you download might already have custom CSS written to style FullCalendar. If so, all the above steps of including the plugin files and specifying `theme: 'bootstrap'` are unnecessary. If in doubt, try both methods to see which one looks better.
