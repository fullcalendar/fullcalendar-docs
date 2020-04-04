---
title: ClassName Inputs
---

ClassNames can be injected into FullCalendar's DOM. They can be in one of the following three formats:

- a string like `'myclassname'`. specify muliple classnames with spaces like `'myclassname otherclassname'`
- an array of strings like `[ 'myclassname', 'otherclassname' ]`. this is the preferred format.
- a **function** that can return either of the above two formats. this function almost always receives an argument with information about what is being styled.
