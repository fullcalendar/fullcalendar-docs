---
title: Event::getSource
---

Retrieves the [Event Source Object](event-source-object) that this event came from.

<div class='spec' markdown='1'>
event.getSource() -> Event Source
</div>

If the event was added dynammically via [addEvent](Calendar-addEvent), and the `source` parameter was specified, `.getSource()` will return an Event Source. Otherwise, it will return `null`.
