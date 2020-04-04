---
title: Event Render Hooks
---


Customize the rendering of event elements with the following options:

`eventClassNames` - a [ClassName Input](classname-input) for adding classNames to the outermost event element. If supplied as a callback function, it is called every time the associated event data changes.

`eventContent` - a [Content Injection Input](content-injection). Generated content is inserted *inside* the inner-most wrapper of the event element. If supplied as a callback function, it is called every time the associated event data changes.

`eventDidMount` - called right after the element has been added to the DOM. If the event data changes, this is NOT called again.

`eventWillUnmount` - called right before the element will be removed from the DOM.


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `event` - [Event Object](event-object)
- `timeText`
- `isStart`
- `isEnd`
- `isMirror`
- `isPast`
- `isFuture`
- `isToday`
- `el` - the element. only available in `eventDidMount` and `eventWillUnmount`
