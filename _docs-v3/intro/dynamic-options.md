---
title: Set/Get Options Dynamically
---

You can get/set calendar options after a calendar has already been initialized.

## Getting

You can query for the current value of a calendar option:

```js
var locale = $('#calendar').fullCalendar('option', 'locale');
```

This will only return options that are global to the calendar. This method will *not* return [View-Specific Options](view-specific-options).


## Setting

Since version 2.9.0, it is possible to dynamically set options after initalization. These option modifications will be applied to all views. It is not currently possible to set [View-Specific Options](view-specific-options) in this manner.

Can you dynamically set a single option:

```js
$('#calendar').fullCalendar('option', 'locale', 'fr');
```

Or if you would like to set multiple options at once, limiting the calendar to at most one repaint, pass in an option hash:

```js
$('#calendar').fullCalendar('option', {
  locale: 'fr',
  isRTL: true
});
```

## Exceptions

Some options need to be **manipulated through methods**:

- defaultDate - use [gotoDate](gotoDate) instead
- defaultView - use [changeView](changeView) instead

Event Sources should be dynamically manipulated through methods like [addEventSource](addEventSource) and [removeEventSource](removeEventSource). Thusly, dynamic setting of the following options is **not applicable**:

- events
- eventSources

Some options affect processing of event data. Dynamically setting them will *not* change current event data, but *will* take effect for **future event fetches**:

- defaultAllDayEventDuration
- defaultTimedEventDuration
- allDayDefault
- forceEventDuration
- eventDataTransform
- startParam
- endParam
- timezoneParam

Dynamic setting of some options is simply **not yet implemented**:

- handleWindowResize
- views
