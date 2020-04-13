---
title: Custom Views via Settings
type: guide
---

It is possible to customize an existing available view by tweaking settings.

If you'd like to take one of the existing view types, like [dayGrid](daygrid-view) or [timeGrid](timegrid-view), but display it with a custom duration, like **4-days** instead of the stock 1-week or 1-day, do something like the following:

```js
var calendar = new Calendar(calendarEl, {
  headerToolbar: {
    center: 'dayGridMonth,timeGridFourDay' // buttons for switching between views
  },
  views: {
    timeGridFourDay: {
      type: 'timeGrid',
      duration: { days: 4 },
      buttonText: '4 day'
    }
  }
});
```

We use the `views` option similar to how [View-Specific Options](view-specific-options) work but with the very important addition of the `type` property. Also, a date-range parameter is required, whether is be [duration](duration), [visibleRange](visibleRange), or [dayCount](dayCount).

We have chosen `"timeGridFourDay"` to be the name of our new custom view.

Also, in the above example, `buttonText` has been used to customize the header button's text. Notice how it has been specified as a single string, as opposed to an object hash, the way it is done in the global options.


## A Simpler Approach for One View

When your calendar needs to display a *single* view with custom date range logic, you can use this simplified approach instead. No need to define entries in the `view` object.

```js
var calendar = new Calendar(calendarEl, {
  initialView: 'timeline', // the name of a generic view
  duration: { days: 3 }
});
```
