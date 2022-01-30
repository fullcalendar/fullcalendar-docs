---
title: eventInteractive
since_version: 2.10.0
---

Setting to `true` will cause all events to be focusable/tabbable. By default, only events that have an `event.url` property are tabbable.

<div class='spec' markdown='1'>
Boolean, default: `false`
</div>

You can set this on a per-event basis using the `event.interactive` boolean of the [event object](event-parsing).
