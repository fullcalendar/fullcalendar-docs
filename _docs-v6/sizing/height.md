---
title: height
---

Sets the height of the entire calendar, including header and footer.

<div class='spec' markdown='1'>
Integer, `"auto"`, a CSS value like `"100%"`
</div>

By default, this option is unset and the calendar's height is calculated by [aspectRatio](aspectRatio).

If an integer is specified, the height of the calendar will be guaranteed to be that exact pixel height.
If the contents will not fit within the height, scrollbars will appear.

If `"auto"` is specified, the view's contents will assume a natural height and no scrollbars will be used.

If `"100%"` is specified, the height of the calendar will match the height of its parent container element. [See an example](full-height-demo). Any other valid CSS value is accepted as well.

Example usage of `height`:

```js
var calendar = new Calendar(calendarEl, {
  height: 650
});
```

## Setter

You can dynamically set a calendar's height after initialization:

```js
calendar.setOption('height', 700);
```
