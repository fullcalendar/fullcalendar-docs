---
title: Calendar::changeView
type: method
---

Immediately switches to a different view.

<div class='spec' markdown='1'>
calendar.changeView( viewName, *dateOrRange* )
</div>

`viewName` must be the name of one of the available views (a string).

```js
$('#calendar').fullCalendar('changeView', 'agendaDay');
```

If you'd like to navigate to a new date while simultaneously switching to a new view, you can specify a date parameter:

```js
$('#calendar').fullCalendar('changeView', 'agendaDay', '2017-06-01');
```

If you are using [Custom View](custom-view-with-settings), you can change the [visibleRange](visibleRange) in the same way:

```js
$('#calendar').fullCalendar('changeView', 'agenda', {
  start: '2017-06-01',
  end: '2017-06-05'
});
```

This date/visibleRange parameter was added in version 3.3.0.
