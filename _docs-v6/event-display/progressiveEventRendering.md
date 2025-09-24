---
title: progressiveEventRendering
---

When to render multiple asynchronous [event sources](event-source-object) in an individual or batched manner.

<div class='spec' markdown='1'>
Boolean. `true` or `false` (the default)
</div>

`true` renders each event source as it is received. Will result in more renders.

`false` waits until all event sources have been received and renders them all at once. Results in fewer renders.
