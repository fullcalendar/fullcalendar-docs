---
title: Basic View
layout: docs-sublanding
---

A "basic" view is a view with one or more columns, each representing a day. The pre-configured basic views are **basicDay** and **basicWeek**. You can initialize a basic view like this:

```js
$('#calendar').fullCalendar({
  defaultView: 'basicWeek'
});
```

There are numerious other options throughout the docs that affect the display of basic view, such as the [local-related options](localization) and [date/time display options](date-display).
