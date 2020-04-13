---
title: duration
---

Sets the exact duration of a custom view.

<div class='spec' markdown='1'>
[Duration](duration-object)
</div>

Example for a [Custom View](custom-view-with-settings):

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGridFourDay',
  views: {
    timeGridFourDay: {
      type: 'timeGrid',
      duration: { days: 4 }
    }
  }
});
```

Simpler example for a calendar with one view:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGrid',
  duration: { days: 4 }
});
```

## Special Case

If the duration is specified like `{weeks:1}`, then the [dateAlignment](dateAlignment) will automatically default to start-of-week. However, if it is specified as `{days:7}`, then no such alignment will happen.

## Dynamically Setting

When setting the `duration` dynamically, it is important to note that it will only affect a generic view i.e. a view without a defined initial duration. Always bear in mind that a view's `duration` takes precedence. For example:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGridFourDay',
  duration: { days: 4 }, // the dynamic setter will change this
  views: {
    timeGrid: {
      type: 'timeGrid'
    }
  }
});

calendar.setOption('duration', { weeks: 1 });
```

and:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGridFourDay',
  views: {
    timeGridFourDay: {
      type: 'timeGrid',
      duration: { days: 4 } // the dynamic setter won't change this
    }
  }
});

calendar.setOption('duration', { weeks: 1 });
```
