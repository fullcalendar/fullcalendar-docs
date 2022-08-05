---
title: Resource-Area Header Render Hooks
---

The "resource-area header" is above the resource data and displays the text "Resources" by default.


`resourceAreaHeaderClassNames` - a [ClassName Input](classname-input)

`resourceAreaHeaderContent` - a [Content Injection Input](content-injection)

`resourceAreaHeaderDidMount`

`resourceAreaHeaderWillUnmount`


## Argument

When the `resourceAreaHeaderDidMount` and `resourceAreaHeaderWillUnmount` hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `el` - the element
