---
title: eventDisplay
---

Controls which preset rendering style events use. Possible values:

- `'auto'` (default) - When in daygrid, renders the event as a solid rectangle if it is all-day or multi-day. If a timed event, will render it with a dot. When in other views, will render normally.
- `'block'` - When in daygrid, renders the event as a solid rectangle. When in other views, will render normally.
- `'list-item'` - When in daygrid, renders the event with a dot. When in other views, will render normally.
- `'background'` - See the [background events](background-events) article.
- `'inverse-background'` - Like `'background'`, but fills the reverse space. See the [background events](background-events) article.
- `'none'` - Won't render the event at all.

The root-level `eventDisplay` setting controls the appearance of **all** events. To control the display of specific events, use the `display` property of an [Event Source](event-source-object) or [Event Object](event-parsing).
