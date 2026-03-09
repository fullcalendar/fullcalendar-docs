---
title: Day-Cell Render Hooks
---


Customize the day cells in daygrid and timegrid views with the following options:

`dayCellClassNames` - a [ClassName Input](classname-input) for adding classNames to the `<td>` cell

`dayCellContent` - a [Content Injection Input](content-injection). Generated content is inserted *inside* the inner-most wrapper of the day cell. It does not replace the `<td>` cell.

`dayCellDidMount` - called right after the `<td>` has been added to the DOM

`dayCellWillUnmount` - called right before the `<td>` will be removed from the DOM


## Timeline View

For customizing the day cells in [Timeline view](timeline-view), use the [Slot Render Hooks](slot-render-hooks) instead. From an API-perspective they are considered "slots," not "days," because they can be any duration.


## Argument

When the above hooks are specified as a function in the form `function(arg)`, the `arg` is an object with the following properties:

- `date` - Date object
- `dayNumberText` - The display text of the day number shown in the cell (e.g., `"9"` for the 9th).
- `isPast` - `true` if the date is before today. Useful for dimming or disabling past dates.
- `isFuture` - `true` if the date is after today. Useful for highlighting upcoming dates.
- `isToday` - `true` if the date is today. Commonly used to apply a special highlight to the current day.
- `isOther` - `true` if the date belongs to a different month than the one currently displayed (e.g., overflow days filling the calendar grid).
- `resource` - if the date cell lives under a specific resource in [vertical resource view](vertical-resource-view), this value will be the [Resource Object](resource-object)
- `el` - the `<td>` element. only available in `dayCellDidMount` and `dayCellWillUnmount`
