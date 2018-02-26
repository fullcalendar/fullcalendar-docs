---
title: navLinks
since_version: 3.0
---

Determines if day names and week names are clickable.

<div class='spec' markdown='1'>
boolean. *default*: `false`
</div>

When `true`, day headings and [weekNumbers](weekNumbers) will become clickable. When clicked, these links will bring the user to a view that represents the day/week. [View a simple demo](navLinks-demo).

The destination views are automatically determined by the views that are in the [header](header). However, they can be explicity defined using [navLinkDayClick](navLinkDayClick) and [navLinkWeekClick](navLinkWeekClick).
