---
title: stickyFooterScrollbar
---

Whether to fix the view's horizontal scrollbar to the bottom of the viewport while scrolling.

<div class='spec' markdown='1'>
`'auto'` (the default), `true`, `false`
</div>

When a view has horizontal scrollbars, for example, `timeline` view or the `daygrid` or `timegrid` views when the ([dayMinWidth](dayMinWidth)) settings is activated, and calendar is within view but the scrollbars are below the fold of the screen, this setting will fix the scrollbar to the bottom of the viewport.

The default value of `'auto'` will look at the [height](height) setting and if it is `'auto'`, meaning the calendar has the potential to be very tall, sticky-footer-scrollbars will be activated.
