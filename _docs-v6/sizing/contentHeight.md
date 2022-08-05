---
title: contentHeight
---

Sets the height of the *view* area of the calendar.

<div class='spec' markdown='1'>
Integer, `"auto"`
</div>

By default, this option is unset and the calendar's height is calculated by [aspectRatio](aspectRatio).

If an integer is specified, the height of the view will be guaranteed to be that exact pixel height.
If the contents will not fit within the height, scrollbars will appear.

If `"auto"` is specified, the view's contents will assume a natural height and no scrollbars will be used.

Example usage of `contentHeight`:

```js
var calendar = new FullCalendar.Calendar(calendarEl, {
  contentHeight: 600
});
```

## Setter

You can dynamically set a calendar's contentHeight after initialization:

```js
calendar.setOption('contentHeight', 650);
```
