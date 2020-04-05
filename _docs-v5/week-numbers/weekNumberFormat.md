---
title: weekNumberFormat
---

Controls the week number text.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*: `{ week: 'narrow' }`
</div>

The formatted text depends on [weekText](weekText).

If set to `{ week: 'short' }`, and `weekText` is set to `"W"`, a value like `"W 6"` will be outputted.

If set to `{ week: 'narrow' }`, and `weekText` is set to `"W"`, a value like `"W6"` will be outputted.

If set to `{ week: 'numeric' }`, a plain numeric value like `"6"` will be outputted.
