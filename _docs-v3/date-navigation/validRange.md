---
title: validRange
since_version: 3.3.0
---

Limits which dates the user can navigate to and where events can go.

<div class='spec' markdown='1'>
Object
</div>

Dates outside of the valid range will be grayed-out. The user will not be able to drag or resize events into these areas.

The prev/next buttons in the [header](header) will be grayed out to prevent the user from navigating to an invalid range.

The `validRange` property can have `start` and `end` properties. You may specify one without specifying the other to create an open-ended range.

```js
// constrain to a discrete range
new Calendar({
  defaultView: 'month',
  validRange: {
    start: '2017-05-01',
    end: '2017-06-01'
  }
});

// constrain to an open-ended range
new Calendar({
  defaultView: 'month',
  validRange: {
    start: '2017-05-01'
  }
});
```

You can also dynamically generate the range via a function. It must return an object in the same format:

```js
new Calendar({
  defaultView: 'month',
  validRange: function(nowDate) {
    return {
      start: nowDate,
      end: nowDate.clone().add(1, 'months')
    };
  }
});
```

This function receives the calendar's ["now" date](now) (aka the "today" date), which is useful for constraining navigation and events to a window of time in the future.


## When it gets called

When specified as a function, `validRange` will be called multiple times for each view render:

1. to determine the current view's range
2. to determine if the previous view is valid
3. to determine if the next view is valid

Please be prepared for repeated calls to this function.
