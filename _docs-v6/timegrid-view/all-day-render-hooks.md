---
title: All-Day Render Hooks
---

Customize parts of the UI that typically display the text "all-day".


`allDayClassNames` - a [ClassName Input](classname-input)

`allDayContent` - a [Content Injection Input](content-injection)

`allDayDidMount`

`allDayWillUnmount`


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `text`
- `view`
- `el` - the `<td>` element. only available in `allDayDidMount` and `allDayWillUnmount`
