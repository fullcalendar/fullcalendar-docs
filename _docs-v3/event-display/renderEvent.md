---
title: renderEvent
type: method
---

Renders a new event on the calendar.

<div class='spec' markdown='1'>
.renderEvent( *event* [, *stick* ] )
</div>

`event` must be an [Event Object](event-object) with a `title` and `start` at the very least.

Normally, the event will disappear once the calendar refetches its event sources (example: when prev/next is clicked). However, specifying `stick` as `true` will cause the event to be permanently fixed to the calendar.

[View a live demo](renderEvent-demo) of renderEvent.
