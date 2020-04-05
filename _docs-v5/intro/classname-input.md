---
title: ClassName Inputs
---

CSS classNames can be injected into FullCalendar's DOM in various places. They can be provided in the following formats. These examples use `eventClassNames` from the [event render hooks](event-render-hooks):


**a string:**

```js
eventClassNames: 'myclassname'

eventClassNames: 'myclassname otherclassname' // multiple separated by spaces
```


**an array of strings** (the preferred way):

```js
eventClassNames: [ 'myclassname', 'otherclassname' ]
```


**a function** that returns either of the above formats:

```js
eventClassNames: function(arg) {
  if (arg.event.extendedProps.isUrgent) {
    return [ 'urgent' ]
  } else {
    return [ 'normal' ]
  }
}
```


Each hook accepts different arguments. For example, `eventClassNames` accepts a single object argument [with a whole bunch of properties](event-render-hooks#argument).
