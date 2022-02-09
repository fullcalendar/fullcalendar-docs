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
  prevYear: 'chevrons-left', // double chevron
  nextYear: 'chevrons-right' // double chevron
}
```
</div>

A hash must be supplied that maps button names (from the [headerToolbar](headerToolbar)) to icon strings. These icon string are transformed into classNames which are styled by FullCalendar's CSS. The values supplied depend on the [themeSystem](themeSystem):

- when [themeSystem](themeSystem) is `'standard'`, the following icons are available:
  - `'chevron-left'`
  - `'chevron-right'`
  - `'chevrons-left'` (double chevron)
  - `'chevrons-right'` (double chevron)
- when [themeSystem](themeSystem) is `'bootstrap5'`, use the icon names you see on the [Bootstrap Icons directory](https://icons.getbootstrap.com/), for example:
  - `'arrow-left-square-fill'`
  - `'arrow-right-square-fill'`
- when [themeSystem](themeSystem) is `'bootstrap'` (Bootstrap 4), **do not use this setting**. Use [bootstrapFontAwesome](bootstrapFontAwesome) instead.

If a button does not have an entry, it falls back to using [buttonText](buttonText).

If you would prefer not to display any icons and would rather use `buttonText` instead, you can set the `buttonIcons` option to `false`.
