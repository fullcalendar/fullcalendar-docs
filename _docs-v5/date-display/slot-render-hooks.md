---
title: Slot Render Hooks
---


## Label Hooks

`slotLabelClassNames` - a [ClassName Input](classname-input)

`slotLabelContent` - a [Content Injection Input](content-injection)

`slotLabelDidMount`

`slotLabelWillUnmount`


## Lane Hooks

`slotLaneClassNames` - a [ClassName Input](classname-input)

`slotLaneContent` - a [Content Injection Input](content-injection)

`slotLaneDidMount`

`slotLaneWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `date` - Date object
- `text`
- `navLinkData`
- `isPast`
- `isFuture`
- `isToday`
- `el` - the `<td>` element. only available in `slotLabelDidMount`, `slotLabelWillUnmount`, `slotLaneDidMount`, and `slotLaneWillUnmount`
