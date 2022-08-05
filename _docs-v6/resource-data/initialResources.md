---
title: initialResources
---

This is exactly like specifying [resources as an array](resources-array) except that if the supplied value changes, the calendar will **NOT** be updated to reflect. Only applicable to declarative front-end frameworks such as React, Vue, and Angular.

Useful for when you want to supply an initial set of resources and then manipulate these resources via the API. If you use `initialResources`, when your component receives new props, your changes will not be overwritten with the original event array.
