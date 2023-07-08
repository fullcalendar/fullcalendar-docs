---
title: Dragging and Resizing before v2.1.0
description: For older versions of the library, dependency requirements for drag-n-drop and resizing.
type: guide
---

For FullCalendar version 2.1.0 and above, you don't need any external dependencies for event drag-and-drop and resizing. However, in versions 2.1.0 and below, you'll need certain [jQuery UI](https://jqueryui.com/) modules:

- [Draggable](https://jqueryui.com/demos/draggable/) (the Droppable module is **not** required)
- [Resizable](https://jqueryui.com/demos/resizable/)

These modules can be conveniently bundled/compressed/downloaded at the jQuery UI [downloads page](https://jqueryui.com/download).

After you have gathered the dependencies, **you still need to enable dragging/resizing** by settings the [editable](editable) option to `true`.

## Mobile Support

Since this library utilizes jQuery UI, which doesnt support touch events, you'll have to use an external library such as [Touch Punch](https://touchpunch.furf.com/) to enable touch device support.
