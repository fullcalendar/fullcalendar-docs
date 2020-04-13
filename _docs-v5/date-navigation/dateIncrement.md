---
title: dateIncrement
---

How far into the future/past the calendar navigates when prev/next is executed.

<div class='spec' markdown='1'>
[Duration](duration-object)-ish input
</div>

Determines how far the calendar will jump when the user presses the prev/next buttons in the [headerToolbar](headerToolbar) or when the [prev](Calendar-prev) or [next](Calendar-next) methods are executed.

When using a standard view, it is unnecessary to specify `dateIncrement`.

When using a [Custom View](custom-view-with-settings) with a specified `duration`, the `duration` value will be the default for `dateIncrement`.
