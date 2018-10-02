---
title: contentHeight
---

Sets the height of the *view* area of the calendar.

<div class='spec' markdown='1'>
Integer, Function, `"auto"`
</div>

By default, this option is unset and the calendar's height is calculated by [aspectRatio](aspectRatio).

If an integer is specified, the height of the view will be guaranteed to be that exact pixel height.
If the contents will not fit within the height, scrollbars will appear.

If a function is specified, this function will be called every time a height update is requested. This function should return a pixel value.

If `"auto"` is specified, the view's contents will assume a natural height and no scrollbars will be used.

Example usage of `contentHeight`:

```js
var calendar = new Calendar(calendarEl, {
  contentHeight: 600
});
```

## Setter

You can dynamically set a calendar's contentHeight after initialization:

```js
calendar.option('contentHeight', 650);
```
