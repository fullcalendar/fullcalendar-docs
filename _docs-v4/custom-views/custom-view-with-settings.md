---
title: Custom Views via Settings
type: guide
since_version: 2.2.5
---

It is possible to customize an existing available view by tweaking settings.

If you'd like to take one of the existing view types, like "basic" or "agenda", but display it with a custom duration, like **4-days** instead of the stock 1-week or 1-day, do something like the following:

```js
var calendar = new Calendar(calendarEl, {
  header: {
    center: 'month,agendaFourDay' // buttons for switching between views
  },
  views: {
    agendaFourDay: {
      type: 'agenda',
      duration: { days: 4 },
      buttonText: '4 day'
    }
  }
});
```

We use the `views` option similar to how [View-Specific Options](view-specific-options) work but with the very important addition of the `type` property. Also, a date-range parameter is required, whether is be [duration](duration), [visibleRange](visibleRange), or [dayCount](dayCount).

We have chosen `"agendaFourDay"` to be the name of our new custom view. It is advised to choose view names with the numbers spelled out like "four" instead of "4" because JavaScript disallows identifiers beginning with numbers, like "4day".

Also, in the above example, `buttonText` has been used to customize the header button's text. Notice how it has been specified as a single string, as opposed to an object hash, the way it is done in the global options.


## A Simpler Approach for One View

When your calendar needs to display a *single* view with custom date range logic, you can use this simplified approach instead. No need to define entries in the `view` object.

```js
var calendar = new Calendar(calendarEl, {
  defaultView: 'timeline', // the name of a generic view
  duration: { days: 3 }
});
```
