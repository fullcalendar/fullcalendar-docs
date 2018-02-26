---
title: dateAlignment
since_version: 3.3.0
---

Determines the first visible day of a custom view.

<div class='spec' markdown='1'>
String
</div>

When a [Custom View](custom-view-with-settings) is being used, and you'd like to guarantee that the view begins at a certain interval, like the start-of-week or start-of-month, specify a value like `"week"` or `"month"`.

If not specified, a reasonable default will be generated based on the view's duration.

If a view's range is explicity defined with [visibleRange](visibleRange), `dateAlignment` will be ignored.
