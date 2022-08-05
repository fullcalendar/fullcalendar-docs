---
title: fixedMirrorParent
---

The parent element that [fixed-positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position) event mirror elements are attached to while dragging.

By default, dragged mirror elements are attached to the main calendar `<div>`.

This setting is useful for when you have complex CSS transforms on the main calendar `<div>` that can distort fixed-positioned elements within. You should then set the element to an outer to avoid this distortion. Example:

```js
var calendar = new Calendar(calendarEl, {
  fixedMirrorParent: document.body
});
```
