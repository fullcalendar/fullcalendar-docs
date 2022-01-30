---
title: scrollTimeReset
since_version: 5.7.0
---

Whether the view should scroll to [scrollTime](scrollTime) every time the date range changes.

<div class='spec' markdown='1'>
Boolean, *default*: `true`
</div>

By default, whenever the date range changes either via the API or the end-user clicking prev/next, the scroll is reset. Set `scrollTimeReset` to `false` to disable this behavior.
