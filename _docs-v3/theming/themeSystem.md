---
title: themeSystem
---

Renders the calendar with a given theme system.

<div class='spec' markdown='1'>
String, *default*: `'standard'`
</div>

`'standard'`
: Renders a minimal look & feel, the look in most of the [demos](/). Does not require any CSS files beyond the FullCalendar base files.

`'bootstrap3'`
: Prepares the calendar for a [Bootstrap 3](https://getbootstrap.com/docs/3.3/) theme. The Bootstrap stylesheet must be separately loaded in its own `<link>` tag. [See a demo](bootstrap3-theme-demo).

`'bootstrap4'`
: Prepares the calendar for a [Bootstrap 4](https://getbootstrap.com/) theme. The Bootstrap stylesheet must be separately loaded in its own `<link>` tag. Also, a FontAwesome stylesheet must be loaded ([more info](https://fontawesome.com/get-started)). [See a demo](bootstrap4-theme-demo). Bootstrap 4 support was added in v3.9.0.

`'jquery-ui'`
: Prepares the calendar for a [jQuery UI](https://jqueryui.com/) theme. The jQuery UI CSS file file must be separately loaded in its own `<link>` tag. [See a demo](jquery-ui-theme-demo).

[Explore themes with the theme chooser &raquo;](/releases/fullcalendar/3.10.0/demos/themes.html)


## 3rd Party Bootstrap Themes

You can use the standard Bootstrap 3 theme downloaded from [getbootstrap.com](https://getbootstrap.com/docs/3.3/).

You can also use themes downloaded from 3rd party providers. Google ["free bootstrap themes"](https://www.google.com/search?q=free+bootstrap+themes) as a starting point.

The theme you download might already have custom CSS written to style FullCalendar. If so, specifying `theme: 'bootstrap3'` is unnecessary. If in doubt, try both methods to see which one looks better.


## jQuery UI Theme Roller

Custom jQuery UI themes can be created with the [jQuery UI ThemeRoller](https://jqueryui.com/themeroller/).


## Legacy

The `themeSystem` option was introduced in version 3.5.0 with the introduction of Bootstrap theming. Prior, jQuery UI theming was available via the now-deprecated `theme: true` option.
