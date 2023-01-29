---
title: Basic View
layout: docs-sublanding
demos:
  - basic-view-demo
---

A "basic" view is a view with one or more columns, each representing a day. The pre-configured basic views are **basicDay** and **basicWeek**. You can initialize a basic view like this:

```js
$('#calendar').fullCalendar({
  defaultView: 'basicWeek'
});
```

If you'd like a different interval of time, you can create a [custom view](custom-view-with-settings) with type `'basic'`.

There are numerous other options throughout the docs that affect the display of basic view, such as the [date/time display options](date-display) and [locale-related options](localization).
