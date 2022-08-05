---
title: titleFormat
---

Determines the text that will be displayed in the headerToolbar's title.

<div class='spec' markdown='1'>
[Date Formatter](date-formatting), *default*:

```js
{ year: 'numeric', month: 'long' }                  // like 'September 2009', for month view
{ year: 'numeric', month: 'short', day: 'numeric' } // like 'Sep 13 2009', for week views
{ year: 'numeric', month: 'long', day: 'numeric' }  // like 'September 8 2009', for day views
```
</div>

As noted above, each view has a specific default. Get fine-tuned control with [View-Specific Options](view-specific-options). A single string alone will set the value for all views.

For views that display date-range text, to control the text between the two dates, customize [titleRangeSeparator](titleRangeSeparator).
