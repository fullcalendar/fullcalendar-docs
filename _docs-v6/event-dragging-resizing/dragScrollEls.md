---
title: dragScrollEls
---

Determines which elements in the DOM the [dragScroll](dragScroll) setting will auto-scroll.

NOT YET EXPOSED

<div class='spec' markdown='1'>
a CSS selector<br>
-or-<br>
an array of CSS selectors and elements<br>
<br>
*default:* `[ window, '.fc-scroller' ]`
</div>

When auto-scrolling is happening, it is too expensive to query the DOM for **every** element that might have scrollbars. Therefore, this setting determines what elements will be considered.
