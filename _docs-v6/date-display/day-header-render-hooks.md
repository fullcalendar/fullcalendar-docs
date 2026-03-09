---
title: Day-Header Render Hooks
---


Customize the header elements above the day cells in daygrid and timegrid views with the following options. Also, the title elements for each day in list view. For the timeline view, see the [slot render hooks](slot-render-hooks).

`dayHeaderClassNames` - a [ClassName Input](classname-input) for adding classNames to the header `<th>` cell

`dayHeaderContent` - a [Content Injection Input](content-injection). Generated content is inserted *inside* the inner-most wrapper of the header cell. It does not replace the `<th>` cell.

`dayHeaderDidMount` - called right after the `<th>` has been added to the DOM

`dayHeaderWillUnmount` - called right before the `<th>` will be removed from the DOM


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `date` - Date object
- `text` - A pre-formatted string of the day header label (e.g., "Mon", "Mon 9", "Monday, Mar 9") based on the current view and dayHeaderFormat setting.
- `isPast` - `true` if the date is before today. Useful for dimming or disabling past dates.
- `isFuture` - `true` if the date is after today. Useful for highlighting upcoming dates.
- `isToday` - `true` if the date is today. Commonly used to apply a special highlight to the current day.
- `isOther` - `true` if the date belongs to a different month than the one currently displayed (e.g., overflow days filling the calendar grid).
- `resource` - if the date column lives under a specific resource in [vertical resource view](vertical-resource-view), this value will be the [Resource Object](resource-object)
- `el` - the `<th>` element. only available in `dayHeaderDidMount` and `dayHeaderWillUnmount`
