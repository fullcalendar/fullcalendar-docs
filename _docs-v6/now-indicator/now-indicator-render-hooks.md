---
title: Now-Indicator Render Hooks
---


`nowIndicatorClassNames` - a [ClassName Input](classname-input)

`nowIndicatorContent` - a [Content Injection Input](content-injection)

`nowIndicatorDidMount`

`nowIndicatorWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `isAxis` - boolean
- `date` - Date object
- `el` - the element. only available in `nowIndicatorDidMount` and `nowIndicatorWillUnmount`
