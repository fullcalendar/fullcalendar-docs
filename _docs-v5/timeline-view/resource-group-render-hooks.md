---
title: Resource Group Render Hooks
---


## Label Hooks

In resource timeline view, a resource group "label" is where a group's name is displayed.

`resourceGroupLabelClassNames` - a [ClassName Input](classname-input)

`resourceGroupLabelContent` - a [Content Injection Input](content-injection)

`resourceGroupLabelDidMount`

`resourceGroupLabelWillUnmount`


## Lane Hooks

In resource timeline view, a resource group "lane" is the horizontal area running along the time slots.

`resourceGroupLaneClassNames` - a [ClassName Input](classname-input)

`resourceGroupLaneContent` - a [Content Injection Input](content-injection)

`resourceGroupLaneDidMount`

`resourceGroupLaneWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `groupValue`
- `el` - the element. only available in `resourceGroupLabelDidMount`, `resourceGroupLabelWillUnmount`, `resourceGroupLaneDidMount`, and `resourceGroupLaneWillUnmount`
