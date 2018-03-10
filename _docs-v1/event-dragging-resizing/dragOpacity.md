---
title: dragOpacity
since_version: 1.3
---

The opacity of an event while it is being dragged.

<div class='spec' markdown='1'>
Float/[View Option Hash](view-option-hash), *default*:

```js
{
  // for agendaWeek and agendaDay
  agenda: .5,

  // for all other views
  '': 1.0
}
```
</div>

Float values range from 0.0 to 1.0.

Specify a single number to affect all views, or a [View Option Hash](view-option-hash) to target specific views (which is what the default does).

<div class='version-info' markdown='1'>
A *View Option Hash* can only be provided in versions 1.4 and later.

Prior to version 1.3, this option was known as *eventDragOpacity*.
</div>
