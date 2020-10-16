---
title: buttonIcons
---

Icons that will be displayed in buttons of the headerToolbar/footerToolbar.

<div class='spec' markdown='1'>
Object, *default:*

```js
{
  prev: 'chevron-left',
  next: 'chevron-right',
  prevYear: 'chevrons-left',
  nextYear: 'chevrons-right'
}
```
</div>

This setting only takes affect when [themeSystem](themeSystem) is `'standard'`. If you want to change icons when [themeSystem](themeSystem) is `'bootstrap'`, use [bootstrapFontAwesome](bootstrapFontAwesome) instead.

A hash must be supplied that maps button names (from the [headerToolbar](headerToolbar)) to icon strings. These icon string are transformed into classNames which are styled by FullCalendar's CSS.

If a button does not have an entry, it falls back to using [buttonText](buttonText).

If you would prefer not to display any icons and would rather use `buttonText` instead, you can set the `buttonIcons` option to `false`.
