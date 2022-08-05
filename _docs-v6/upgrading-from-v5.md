---
title: V6 Release Notes and Upgrade Guide
layout: text
---

What's new in v6?

How to upgrade from v5?

FullCalendar no longer attempts to import .css files. Instead, FullCalendar's JS is responsible for
injecting its own CSS. This solves many issues with third party libraries:

- *Webpack*: no longer necessary to use css-loader
  (see [example project][webpack-css-hack])
- *Rollup*: no longer necessary to use a css-processing plugin (like postcss)
  (see [example project][rollup-css-hack])
- *NextJS*: no longer necessary to ignore and manually import .css files
  (see [example project][next-css-hack], [#6674])
- *Angular 14* is incompatible with FullCalendar v5 ([see ticket][angular-css-bug]). FullCalendar v6
  restores support for Angular 14 and above, but does so via a completely different package. Please
  use the new FullCalendar Web Component package (`@fullcalendar/web-component`), which can
  integrate with Angular via the [method described here][angular-web-components]...
  [Full documentation](angular).

[webpack-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/webpack/webpack.config.js
[rollup-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/rollup/rollup.config.js
[next-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/next
[#6674]: https://github.com/fullcalendar/fullcalendar/issues/6674
[angular-css-bug]: https://github.com/fullcalendar/fullcalendar-angular/issues/403
[angular-web-components]: https://coryrylan.com/blog/using-web-components-in-angular
