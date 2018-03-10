---
title: columnFormat
since_version: 1.3
---

Determines the text that will be displayed on the calendar's column headings.

<div class='spec' markdown='1'>
String/[View Option Hash](view-option-hash), *default*:

```js
{
  month: 'ddd',    // Mon
  week: 'ddd M/d', // Mon 9/7
  day: 'dddd M/d'  // Monday 9/7
}
```
</div>

A single string will set the title format for all views. A [View Option Hash](view-option-hash) may be provided to target specific views (this is what the default does).

Uses [formatDate](formatDate)/[formatDates](formatDates) formatting rules.
(The formatting rules were much different in versions before 1.3. [See here](formatDate-pre-13))

<div class='version-info' markdown='1'>
A *View Option Hash* can only be provided in version 1.4 and later.
</div>
