---
title: refetchEventSources
type: method
---

Refetches one or more specific event sources.

<div class='spec' markdown='1'>
.fullCalendar( 'refetchEventSources', sources )
</div>

The `sources` parameter can be a single identifier item, or an array of identifier items. An identifier item can be either an event source's id/Array/URL/Function **or** the full [Event Source Object](event-source-object).

Will result in a single re-rendering of events when all event sources are refetched.
