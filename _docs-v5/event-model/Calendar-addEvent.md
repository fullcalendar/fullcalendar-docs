---
title: Calendar::addEvent
type: method
---

Adds a new event on the calendar.

<div class='spec' markdown='1'>
calendar.addEvent( *event* [, *source* ] )
</div>

`event` is a plain object that will be [parsed into an Event Object](event-parsing).

`source` represents the Event Source you want to associate this event with. It can be a string Event Source ID or an [Event Source Object](event-source-object). When the source is refetched, it will clear the dynamically added event from the internal cache before fetching. This parameter is optional.

This method returns the proper [Event Object](event-object) that was parsed from the plain object.

[View a live demo](Calendar-addEvent-demo) of addEvent.
