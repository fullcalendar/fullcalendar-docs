---
title: height
since_version: 1.4.2
---

Will make the entire calendar (including header) a pixel height.

<div class='spec' markdown='1'>
Integer
</div>

By default, this option is unset and the calendar's height is calculated by [aspectRatio](aspectRatio).

Example usage of `height`:

```js
$('#calendar').fullCalendar({
  height: 650
});
```

## Setter

You can dynamically set a calendar's height after initialization:

```js
$('#calendar').fullCalendar('option', 'height', 700);
```
