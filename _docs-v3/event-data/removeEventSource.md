---
title: removeEventSource
type: method
---

Dynamically removes an event source.

<div class='spec' markdown='1'>
.removeEventSource( *source* )
</div>

Events from the source will be immediately removed from the calendar.

The `source` parameter is rather flexible. You can provide an event source's id/Array/URL/Function **or** you can specify the full [Event Source Object](event-source-object).

To remove multiple event sources at once, resulting in a single re-render, use [removeEventSources](removeEventSources).
