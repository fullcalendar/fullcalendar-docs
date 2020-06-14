---
title: initialEvents
---

This is exactly like specifying [event as an array](events-array) except that if the supplied value changes, the calendar will **NOT** be updated to reflect. Only applicable to declarative front-end frameworks such as React, Vue, and Angular.

Useful for when you want to supply an initial set of events and then manipulate these events via the API. If you use `initialEvents`, when your component receives new props, your changes will not be overwritten with the original event array.
