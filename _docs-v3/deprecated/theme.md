---
title: theme
---

Enables/disables use of jQuery UI theming.

<div class='removed-notice'>
This setting has been deprecated. To use jQuery UI theming, set the <a href='themeSystem'>themeSystem</a> setting to <code>'jquery-ui'</code> instead.
</div>

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

Once you enable theming with `true`, you still need to include the CSS file for the
theme you want. For example, if you just downloaded a theme from the
[jQuery UI Themeroller](https://jqueryui.com/themeroller/), you need to put a `<link>`
tag in your page's `<head>`.
