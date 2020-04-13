---
title: visibleRange
---

Sets the exact date range that is visible in a view.

<div class='spec' markdown='1'>
Object or Function
</div>

If your calendar has only one view, you can set the visible range explicitly:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGrid',
  visibleRange: {
    start: '2020-03-22',
    end: '2020-03-25'
  }
});
```

The `visibleRange` object must have `start` and `end` properties that [parse into dates](date-parsing). In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date property is **exclusive**, just like all other places in the API.

You can also specify a function that dynamically generates a range from the current date marker. The following example renders one day before the current view date, and two days after:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeGrid',
  visibleRange: function(currentDate) {
    // Generate a new date for manipulating in the next step
    var startDate = new Date(currentDate.valueOf());
    var endDate = new Date(currentDate.valueOf());

    // Adjust the start & end dates, respectively
    startDate.setDate(startDate.getDate() - 1); // One day in the past
    endDate.setDate(endDate.getDate() + 2); // Two days into the future

    return { start: startDate, end: endDate };
  }
});
```

The above examples can be written as explicit [Custom Views](custom-view-with-settings) as well:

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'pastAndFutureView',
  views: {
    pastAndFutureView: {
      visibleRange: function(currentDate) {
        // Generate a new date for manipulating in the next step
        var startDate = new Date(currentDate.valueOf());
        var endDate = new Date(currentDate.valueOf());

        // Adjust the start & end dates, respectively
        startDate.setDate(startDate.getDate() - 1); // One day in the past
        endDate.setDate(endDate.getDate() + 2); // Two days into the future

        return { start: startDate, end: endDate };
      }
    }
  }
});
```

If you need to change the `visibleRange` after initialization, you can do that using the standard technique for [setting options dynamically](dynamic-options):

```js
calendar.setOption('visibleRange', {
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
