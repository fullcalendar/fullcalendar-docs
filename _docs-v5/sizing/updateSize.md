---
title: updateSize
type: method
---

Immediately forces the calendar to readjusts its size.

<div class='spec' markdown='1'>
.updateSize()
</div>

This is useful in a scenario where the calendar lives inside of an element, and that element's width has been dynamically changed. Call `updateSize` to help the calendar compensate. This method is also useful if you have [handleWindowResize](handleWindowResize) turned off.
