---
title: dateIncrement
since_version: 3.3.0
---

How far into the future/past the calendar navigates when prev/next is executed.

<div class='spec' markdown='1'>
[Duration](moment-duration)-ish object
</div>

Determines how far the calendar will jump when the user presses the prev/next buttons in the [header](header) or when the [prev](prev) or [next](next) methods are executed.

When using a standard view, it is unnecessary to specify `dateIncrement`.

When using a [Custom View](custom-view-with-settings) with a specified `duration`, the `duration` value will be the default for `dateIncrement`.
