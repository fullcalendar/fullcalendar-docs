---
title: No-Events Render Hooks
---

In list view, the “No events to display” message.


`noEventsClassNames` - a [ClassName Input](classname-input)

`noEventsContent` - a [Content Injection Input](content-injection)

`noEventsDidMount`

`noEventsWillUnmount`


## Argument

When the `noEventsDidMount` and `noEventsWillUnmount` hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `el` - the element
