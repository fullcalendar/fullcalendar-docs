---
title: V6 Release Notes and Upgrade Guide
layout: text
---

**This release is currently in BETA and subject to change.**

The primary goal of V6 is to solve bugs related to the *installation* of FullCalendar's packages. Beyond npm-installing a few different packages and rewriting some `import` statements, there are no breaking API changes or changes to functionality.

To understand how v6 fits into the larger plan, view the [Roadmap &raquo;](/roadmap)

View the [V6 docs &raquo;](/docs/v6)


## Third-party Tools

FullCalendar no longer attempts to import `.css` files. Instead, FullCalendar's JS is responsible for injecting its own CSS. This solves many issues with third-party tools:

- **Webpack**: it's no longer necessary to use css-loader (see [v6 example project][webpack-css-hack])
- **Rollup**: it's no longer necessary to use a css-processing plugin (like postcss) (see [v6 example project][rollup-css-hack])
- **NextJS**: it's no longer necessary to ignore and manually import .css files (see [v6 example project][next-css-hack], [#6674])
- **Angular 14** is incompatible with FullCalendar v5 ([angular-403]). FullCalendar v6 restores support for Angular 14 and above, but does so via a completely different package. Please use the new `@fullcalendar/web-component` package (see below). Web Component are [compatible with all version of Angular][angular-web-components]. Read the docs for [integrating FullCalendar into an Angular project](angular).


## Web Component Package

The [Web Components API][web-components] provide a standardized way to make reusable custom elements. FullCalendar offers a custom element in the new  `@fullcalendar/web-component` package. [Learn how to use it &raquo;](https://github.com/fullcalendar/fullcalendar/tree/v6/packages/web-component)


## Import Statements

**NOT YET IMPLEMENTED**

The ordering of `import` statements should not matter.

- [#6371]
- [react-144]
- [vue-152]


## Package Installation

**NOT YET IMPLEMENTED**

Some FullCalendar packages should be `peerDependencies` of others.

- [#6370]
- [angular-404]


## CSS Customization

**NOT YET IMPLEMENTED**

Overriding FullCalendar's CSS variables won't [require any build system configuration](/docs/css-customization#css-variables).


## Improved Vue Support

**NOT YET IMPLEMENTED**

- [vue-169]
- [vue-141]
- [vue-126]
- [vue-128]
- [vue-122]


## IE 11 Support

**NOT YET IMPLEMENTED**

FullCalendar V6 will no longer support IE 11. This will streamline the code and reduce bundle size.

Stop using [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest),
use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead.


[webpack-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/webpack/webpack.config.js
[rollup-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/blob/v6/rollup/rollup.config.js
[next-css-hack]: https://github.com/fullcalendar/fullcalendar-example-projects/tree/v6/next
[#6674]: https://github.com/fullcalendar/fullcalendar/issues/6674
[angular-403]: https://github.com/fullcalendar/fullcalendar-angular/issues/403
[angular-web-components]: https://coryrylan.com/blog/using-web-components-in-angular
[web-components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
[#6371]: https://github.com/fullcalendar/fullcalendar/issues/6371
[react-144]: https://github.com/fullcalendar/fullcalendar-react/issues/144
[vue-152]: https://github.com/fullcalendar/fullcalendar-vue/issues/152
[#6370]: https://github.com/fullcalendar/fullcalendar/issues/6370
[angular-404]: https://github.com/fullcalendar/fullcalendar-angular/issues/404
[vue-169]: https://github.com/fullcalendar/fullcalendar-vue/issues/169
[vue-141]: https://github.com/fullcalendar/fullcalendar-vue/issues/141
[vue-126]: https://github.com/fullcalendar/fullcalendar-vue/issues/126
[vue-128]: https://github.com/fullcalendar/fullcalendar-vue/issues/128
[vue-122]: https://github.com/fullcalendar/fullcalendar-vue/issues/122
