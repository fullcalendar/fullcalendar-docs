---
title: unselect
type: callback
---

Triggered when the current selection is cleared.

<div class='spec' markdown='1'>
function( *jsEvent*, *view* )
</div>

A selection might be cleared for a number of reasons:

1. The user clicks away from the current selection (doesn't happen when [unselectAuto](unselectAuto) is `false`).

2. The user makes a *new* selection. The `unselect` callback will be fired before the new selection occurs.

3. The user moves forward or backward in the current view, or switches to a new view.

4. The [unselect](Calendar-unselect) method is called through the API.


`jsEvent` holds the primitive JavaScript event with information such as mouse coordinates. If `unselect` has been triggered via the [unselect method](Calendar-unselect), `jsEvent` will be `undefined`.
