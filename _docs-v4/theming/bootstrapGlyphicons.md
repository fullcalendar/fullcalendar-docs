---
title: bootstrapGlyphicons
---

Determines which icons are displayed in buttons of the header/footer when Bootstrap 3 theming is on.

<div class='spec' markdown='1'>
Object, *default:*

```js
{
  close: 'glyphicon-remove',
  prev: 'glyphicon-chevron-left',
  next: 'glyphicon-chevron-right',
  prevYear: 'glyphicon-backward',
  nextYear: 'glyphicon-forward'
}
```
</div>

This option only applies to calendars that have [themeSystem](themeSystem) set to `'bootstrap3'`.

A hash must be supplied that maps button names (from the [header](header)) to icon strings. [See a full list of Bootstrap glyphicons](https://getbootstrap.com/docs/3.3/components/#glyphicons).

If a button does not have an entry, it falls back to using [buttonText](buttonText).

If you are using a Bootstrap theme and would prefer not to display any icons and would rather use `buttonText` instead, you can set the `bootstrapGlyphicons` option to `false`.
