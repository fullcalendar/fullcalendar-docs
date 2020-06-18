---
title: Resource Render Hooks
---


## Label Hooks

A resource "label" is anywhere the name of a resource is displayed. They exist in the header of vertical resource view and the side section of resource timeline view.

`resourceLabelClassNames` - a [ClassName Input](classname-input)

`resourceLabelContent` - a [Content Injection Input](content-injection)

`resourceLabelDidMount`

`resourceLabelWillUnmount`


## Lane Hooks

A resource "lane" is an element in resource-timeline view. It runs horizontally across the timeline slots for each resource.

`resourceLaneClassNames` - a [ClassName Input](classname-input)

`resourceLaneContent` - a [Content Injection Input](content-injection)

`resourceLaneDidMount`

`resourceLaneWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `resource` - [Resoure Object](resource-object)
- `date` - in vertical resource view, if this is a column that lives under a certain date, this will be the Date object
- `el` - the label element. only available in `resourceLabelDidMount`, `resourceLabelWillUnmount`, `resourceLaneDidMount`, and `resourceLaneWillUnmount`
