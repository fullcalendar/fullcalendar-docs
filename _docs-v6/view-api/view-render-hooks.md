---
title: View Render Hooks
---


## Hooks

`viewClassNames` - a [ClassName Input](classname-input) for adding classNames to the root view element. called whenever the view changes.

`viewDidMount` - called right after the view has been added to the DOM

`viewWillUnmount` - called right before the view will be removed from the DOM


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `view` - a [View Object](view-object)
- `el` - the view's root HTML element. not available in `viewClassNames`
