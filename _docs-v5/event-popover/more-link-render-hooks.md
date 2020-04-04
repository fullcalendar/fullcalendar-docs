---
title: More Link Render Hooks
---


`moreLinkClassNames` - a [ClassName Input](classname-input) for adding classNames

`moreLinkContent` - a [Content Injection Input](content-injection)

`moreLinkDidMount` - called right after the link has been added to the DOM

`moreLinkWillUnmount` - called right before the link will be removed from the DOM


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `num` - the number of hidden events
- `text` - the localized text that would appear in the link by default
