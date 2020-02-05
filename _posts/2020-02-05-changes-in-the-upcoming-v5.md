---
title: Changes in the Upcoming v5
date: 2020-02-05T00:00:00+00:00
---

We've been hard at work on the next major release of FullCalendar, **version 5**. But first we'd like to apologize for the radio silence. We've been heads down in development the past few months and neglected to give a status update for a while.

The v5 code is still in-development (see the [branch]) and the exact featureset is still evolving (see the [milestone]) but you can expect more info around March 2nd, when we'll be releasing a beta. Here are the main areas of focus:


## Better Performance, with Preact

We've been leveraging a framework called [Preact]. It's a nearly-API-compatible implementation of React that's only 3k. It sounds too good to be true, but I promise you, it's real. It's meant to be fast, small, and embedded into other products. The powerful abstractions it provides are simplifying our code to more than compensate for the 3k dependency bump. We'll likely break even in filesize.

Preact has allowed us to create a hierarchy of self-contained components that only rerender when necessary. If you're curious, we're relying heavily on [PureComponents][PureComponent] and secondarily, virtual DOM reconciliation. The end result is that DOM updates and reflows are minimized and performance increased.

This will cause individual events to rerender **only** when their own data has changed ([#3003]) and also pave the way for deeper event rendering integration for our React, Vue, and Angular connectors ([react#12], [vue#14]) as well as a potential pure-React implementation instead of a mere connector.


## CSS Refactor

FullCalendar's CSS is being rewritten and DOM structure reduced and simplified, allowing for easier restyling. This is thanks to CSS3 advancements like [flexbox]. Also, we're employing a flatter [BEM]-like classname pattern.

It will also be possible to override certain CSS "variables" such as the padding within cells, background colors, and borders. You'll be able to apply a [PostCSS] transform to achieve this (more info to come).

As part of this refactor, horizontal scrolling in daygrid and timegrid views (both resource and non-resource variations) will be possible ([#3022]), a highly requested feature. Also, better height-expanding will be possible ([#265], [#4897], [#4650]).

Our technique for printer-friendly rendering is also being overhauled. Instead of sharing the same DOM structure for print and screen, the cause of lots of gnarly wrappers and whatnot, we're able to conditionally render when listening to the [onbeforeprint] browser event. This allows for a printer-friendly timeline view ([#4813]).


## Packaging and Distribution

Consuming FullCalendar's CSS packages will get simpler in some ways and more complicated in others. Packages that come with CSS files will now `import` them themselves. This means you'll need a build system solution for handling CSS. For example, [css-loader] for Webpack, which you likely already use.

The win here is that you'll no longer need to import each package's CSS file manually. This is especially important for packages like `@fullcalendar/timegrid` which depends on `@fullcalendar/daygrid`, whose CSS file needs to be included as well. You won't be forced to understand the dependency graph to know which CSS files to include.

For those who avoid using a build system altogether, things will get even easier. We'll provide pre-built "bundles" for both fullcalendar and fullcalendar-scheduler that include all plugins preloaded. You'll just need to write one `<script>` tag instead of multiple ([#4566]).


## What is Breaking?

How will you need to adjust your v4 code to work with v5?

1. If you use a build system like Webpack, you'll need to make it CSS-capable if it isn't already.
2. If you've written CSS customizing a calendar, you'll need to rewrite it to target different classnames.
3. A few settings will simply be renamed. A few others will be removed in favor of more modern techniques.

Overall, there will be *waaay* less breaking changes than from [v3 -> v4]({{ site.baseurl }}/docs/upgrading-from-v3).

Stay tuned for future developments!


[branch]: https://github.com/fullcalendar/fullcalendar/tree/v5
[milestone]: https://github.com/fullcalendar/fullcalendar/issues?q=is%3Aopen+is%3Aissue+milestone%3Av5
[Preact]: https://preactjs.com/
[PureComponent]: https://reactjs.org/docs/react-api.html#reactpurecomponent
[#3003]: https://github.com/fullcalendar/fullcalendar/issues/3003
[react#12]: https://github.com/fullcalendar/fullcalendar-react/issues/12
[vue#14]: https://github.com/fullcalendar/fullcalendar-vue/issues/14
[flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[BEM]: https://css-tricks.com/bem-101/
[PostCSS]: https://postcss.org/
[#3022]: https://github.com/fullcalendar/fullcalendar/issues/3022
[onbeforeprint]: https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint
[#4813]: https://github.com/fullcalendar/fullcalendar/issues/4813
[css-loader]: https://webpack.js.org/loaders/css-loader/
[#4566]: https://github.com/fullcalendar/fullcalendar/issues/4566
[#265]: https://github.com/fullcalendar/fullcalendar/issues/265
[#4897]: https://github.com/fullcalendar/fullcalendar/issues/4897
[#4650]: https://github.com/fullcalendar/fullcalendar/issues/4650
