---
title: eventOrder
---

Determines the ordering events within the same day.

<div class='spec' markdown='1'>
String / Array / Function, *default*: `"start,-duration,allDay,title"`
</div>

For most views, this determines the vertical ordering of events within the same day. For [agenda view](agenda-view) however, it determines the *horizontal* ordering of events within the same day.

The default value puts earlier events first. If tied, it puts longer events first. If tied, it puts all-day events first. If still tied, orders events by title, alphabetically.

This setting accepts a few different arguments:

- a name of an [Event Object](event-object) property, like `"title"`.
  This can be the name of a non-standard field.
  Sorting will happen in ascending order.
  If prefixed with a minus sign like `"-title"`, sorting will happen in descending order.

- a comma-separated string of property names, like `"title,propA,-propB"`

- a *function* that accepts two arguments and returns `-1` or `1`, similar to
  [sort's compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

- an array of property names and functions
  like `[ "title", "-propA", myFunc ]`.
