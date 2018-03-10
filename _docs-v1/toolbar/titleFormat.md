---
title: titleFormat
since_version: 1.1
---

Determines the text that will be displayed in the header's title.

<div class='spec' markdown='1'>
String/[View Option Hash](view-option-hash), *default*:

```js
{
  month: 'MMMM yyyy',                             // September 2009
  week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", // Sep 7 - 13 2009
  day: 'dddd, MMM d, yyyy'                  // Tuesday, Sep 8, 2009
}
```
</div>

A single string will set the title format for all views. A [View Option Hash](view-option-hash) may be provided to target specific views (this is what the default does).

Uses [formatDate](formatDate)/[formatDates](formatDates) formatting rules.
(The formatting rules were much different in versions before 1.3. [See here](formatDate-pre-13))

<div class='version-info' markdown='1'>
A *View Option Hash* can only be provided in version 1.4 and later.
</div>
