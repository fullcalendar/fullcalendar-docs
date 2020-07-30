---
title: View Render Hooks
---


## Hooks

`viewClassNames` - a [ClassName Input](classname-input) for adding classNames to the root view element. called whenever the view changes.

`viewDidMount` - called right after the view has been added to the DOM or in specific [view changes](#view-changes).

`viewWillUnmount` - called right before the view will be removed from the DOM or in specific [view changes](#view-changes).


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `view` - a [View Object](view-object)
- `el` - the view's root HTML element. not available in `viewClassNames`


## View Changes

There are 2 general rules that drives the call fo the above mentioned hooks:
- `viewDidMount` and `viewWillUnmount` hooks are only called when changing [views of different types](view-object#view-types)
- `viewClassNames` hook however is called no mather what the view change occurs

A couple of example of view type changes and their outcomes:
- `timeGridWeek -> dayGridWeek` or `dayGridMonth -> listDay`: `viewDidMount`, `viewWillUnmount` and `viewClassNames` are called since `timeGrid` and `dayGrid` are 2 different view types
- `timeGridWeek -> timeGridDay`: `viewClassNames` hook is called only since both views are of the same `timeGrid` viewType
