---
title: Content Injection
---

Custom content can be injected into FullCalendar's DOM in various places. This content can be provided in the following formats. These examples use `eventContent` from the [event render hooks](event-render-hooks):


**unescaped text**, provided as a string:

```js
eventContent: 'some text'
```


**html**, wrapped in an object:

```js
eventContent: { html: '<i>some html</i>' }
```


**an array of DOM nodes**, wrapped in an object:

```js
eventContent: { domNodes: arrayOfDomNodes }
```


**a function** that returns any of the above formats:

```js
eventContent: function(arg) {
  let italicEl = document.createElement('i')

  if (arg.event.extendedProps.isUrgent) {
    italicEl.innerHTML = 'urgent event'
  } else {
    italicEl.innerHTML = 'normal event'
  }

  let arrayOfDomNodes = [ italicEl ]
  return { domNodes: arrayOfDomNodes }
}
```


Each hook accepts different arguments. For example, `eventContent` accepts a single object argument [with a whole bunch of properties](event-render-hooks#argument).

The above usage of `eventContent` **only applies to vanilla JS**, not any of the connectors. Follow the instructions for your connector of choice:
[React](react#content-injection), [Vue](http://localhost:8788/docs/vue#slot-templates), [Angular](angular#nested-templates)


## Virtual DOM

FullCalendar internally uses a virtual DOM to do its rendering. This is normally behind the scenes, but content injection is one place in the API that allows you to use it. The second argument of any content-function is a virtual DOM node factory function. This is [Preact's h() function](https://preactjs.com/guide/v8/getting-started/#rendering-jsx):

```js
eventContent: function(arg, createElement) {
  var innerText

  if (arg.event.extendedProps.isUrgent) {
    innerText = 'urgent event'
  } else {
    innerText = 'normal event'
  }

  return createElement('i', {}, innerText)
}
```

If you install `preact` as a dependency of your project and set up JSX, you can write it like this:

```jsx
import { Calendar } from '@fullcalendar/core'
import { h } from '@fullcalendar/core/preact'

let calendar = new Calendar(calendarEl, {
  eventContent: (arg) => (
    <i>
      {arg.event.extendedProps.isUrgent ?
        'urgent event' :
        'normal event'}
    </i>
  )
})
```

If you are using the React connector, you'll be able to [return React JSX nodes](react#content-injection).
