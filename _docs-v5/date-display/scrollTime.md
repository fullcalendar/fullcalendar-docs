---
title: scrollTime
---

Determines how far forward the scroll pane is initially scrolled.

<div class='spec' markdown='1'>
[Duration](duration-object), *default*: `'06:00:00'` (6am)
</div>

The user will be able to scroll back to see events before this time. If you want to prevent users from doing this, use the [slotMinTime](slotMinTime) option instead.

By default, `scrollTime` is reapplied to the view whenever the date range changes. To disable this, set [scrollTimeReset](scrollTimeReset) to `false`.
