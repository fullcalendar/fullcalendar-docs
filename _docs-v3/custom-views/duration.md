---
title: duration
since_version: 3.3.0
---

Sets the exact duration of a custom view.

<div class='spec' markdown='1'>
[Duration](moment-duration)-ish object
</div>

Example for a [Custom View](custom-view-with-settings):

```js
new Calendar({
  defaultView: 'agendaFourDay',
  views: {
    agendaFourDay: {
      type: 'agenda',
      duration: { days: 4 }
    }
  }
});
```

Simpler example for a calendar with one view:

```js
new Calendar({
  defaultView: 'agenda',
  duration: { days: 4 }
});
```

## Special Case

If the duration is specified like `{weeks:1}`, then the [dateAlignment](dateAlignment) will automatically default to start-of-week. However, if it is specified as `{days:7}`, then no such alignment will happen.
