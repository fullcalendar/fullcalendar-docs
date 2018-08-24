---
title: visibleRange
since_version: 3.3.0
---

Sets the exact date range that is visible in a view.

<div class='spec' markdown='1'>
Object or Function
</div>

If your calendar has only one view, you can set the visible range explicitly:

```js
$('#calendar').fullCalendar({
  defaultView: 'agenda',
  visibleRange: {
    start: '2017-03-22',
    end: '2017-03-25'
  }
});
```

The `visibleRange` object must have `start`/`end` properties that resolve to [Moment](moment) values. The `end` moment is exclusive, just like all other places in the API.

You can also specify a function that dynamically generates a range from the current date marker. The following example renders one day before the current date, and two days after:

```js
$('#calendar').fullCalendar({
  defaultView: 'agenda',
  visibleRange: function(currentDate) {
    return {
      start: currentDate.clone().subtract(1, 'days'),
      end: currentDate.clone().add(3, 'days') // exclusive end, so 3
    };
  }
});
```

The above examples can be written as explicit [Custom Views](custom-view-with-settings) as well:

```js
$('#calendar').fullCalendar({
  defaultView: 'pastAndFutureView',
  views: {
    pastAndFutureView: {
      visibleRange: function(currentDate) {
        return {
          start: currentDate.clone().subtract(1, 'days'),
          end: currentDate.clone().add(3, 'days') // exclusive end, so 3
        };
      }
    }
  }
});
```

If you need to change the `visibleRange` after initialization, you can do that using the standard technique for [setting options dynamically](dynamic-options):

```js
$('#calendar').fullCalendar('option', 'visibleRange', {
  start: '2017-04-01',
  end: '2017-04-05'
});
```

## When it gets called

When specified as a function, `visibleRange` will be called multiple times for each view render:

1. to determine the current view's range
2. to determine if the previous view is valid
3. to determine if the next view is valid

Please generate your date range based on the received `currentDate`. Do not use the Calendar's `getDate()`.
