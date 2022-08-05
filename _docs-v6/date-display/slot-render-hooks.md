---
title: Slot Render Hooks
---

The horizontal time slots in timegrid view or the vertical datetime slots in timeline view.


## Label Hooks

Where the date/time text is displayed.

`slotLabelClassNames` - a [ClassName Input](classname-input)

`slotLabelContent` - a [Content Injection Input](content-injection)

`slotLabelDidMount`

`slotLabelWillUnmount`


## Lane Hooks

The long span of content next to the slot's date/time text. In timegrid view, this is the horizontal space that passes under all of the days. In timeline view, this is the vertical space that passes through the resources.

`slotLaneClassNames` - a [ClassName Input](classname-input)

`slotLaneContent` - a [Content Injection Input](content-injection)

`slotLaneDidMount`

`slotLaneWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `date` - Date object
- `text`
- `isPast`
- `isFuture`
- `isToday`
- `el` - the `<td>` element. only available in `slotLabelDidMount`, `slotLabelWillUnmount`, `slotLaneDidMount`, and `slotLaneWillUnmount`
- `level` - only for slot labels, and only for timeline view when [slotLabelFormat](slotLabelFormat) is specified as an array. Indicates which tier of the header is being rendered. `0` is the topmost.
