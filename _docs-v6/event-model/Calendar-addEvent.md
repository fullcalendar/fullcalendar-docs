---
title: Calendar::addEvent
type: method
---

Adds a new event to the calendar.

<div class='spec' markdown='1'>
calendar.addEvent( *event* [, *source* ] )
</div>

`event` is a plain object that will be [parsed into an Event Object](event-parsing).

`source` represents the Event Source you want to associate this event with. When the source is refetched, it will clear the dynamically added event from the internal cache before fetching. This optional parameter can be specified as any of the following:

- an Event Source ID `string`
- an [Event Source Object](event-source-object)
- `true`, which signifies the *first* event source

This method returns the proper [Event Object](event-object) that was parsed from the plain object.

[View a live demo](Calendar-addEvent-demo) of addEvent.
