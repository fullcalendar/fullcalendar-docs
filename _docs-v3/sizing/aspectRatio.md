---
title: aspectRatio
---

Sets the width-to-height aspect ratio of the calendar.

<div class='spec' markdown='1'>
Float, *default*: `1.35`
</div>

A calendar is a block-level element that fills its entire avaiable width. The calendar’s height, however, is determined by this ratio of width-to-height. (Hint: larger numbers make smaller heights).

The following example will initialize a calendar who's width is twice its height:

```js
calendar.option({
  aspectRatio: 2
});
```

More precisely, this is the aspect ratio of the calendar's "content" area (the area with a className of "fc-view-container").


## Setter

You can dynamically set a calendar's aspectRatio after initialization:

```js
calendar.option('aspectRatio', 1.8);
```
