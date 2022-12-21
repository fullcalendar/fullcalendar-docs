---
title: aspectRatio
---

Sets the width-to-height aspect ratio of the calendar.

<div class='spec' markdown='1'>
Float, *default*: `1.35`
</div>

A calendar is a block-level element that fills its entire available width. The calendar’s height, however, is determined by this ratio of width to height. (Hint: larger numbers make smaller heights).

The following example will initialize a calendar with a width twice its height:

```js
var calendar = new Calendar(calendarEl, {
  aspectRatio: 2,
  // other options...
});
```

More precisely, this is the aspect ratio of the calendar's "content" area (the area with a CSS class of "fc-view-container").


## Setter

You can dynamically set the `aspectRatio` of a calendar after initialization:

```js
calendar.setOption('aspectRatio', 1.8);
```

## Getter

Also, you can read the value of its `aspectRatio`:

```js
var ratio = calendar.getOption('aspectRatio');
console.log(ratio); // 1.8
```
