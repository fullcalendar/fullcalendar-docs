---
title: removeEventSources
type: method
since_version: 2.8.0
---

Dynamically removes all event sources, or multiple specific event sources.

<div class='spec' markdown='1'>
.removeEventSources( *optionalSourcesArray* )
</div>

If `optionalSourcesArray` is not given, **all event sources will be removed**.

The `optionalSourcesArray` parameter is an array of identifier items, which can be either an event source's id/Array/URL/Function **or** the full [Event Source Object](event-source-object).

Events from the specified sources will be immediately removed from the calendar, resulting in a single re-rendering.
