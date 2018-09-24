---
title: Get/Set Options Dynamically
---

You can get/set calendar options after a calendar has already been initialized.

## Getting

You can query for the current value of a calendar option:

```js
calendar.getOption('locale');
```

This will only return options that are global to the calendar. This method will *not* return [View-Specific Options](view-specific-options).


## Setting

It is possible to dynamically set options after initalization. These option modifications will be applied to all views. It is not currently possible to set [View-Specific Options](view-specific-options) in this manner.

Can you dynamically set a single option:

```js
calendar.setOption('locale', 'fr');
```

## Exceptions

Some options need to be **manipulated through methods**:

- defaultDate - use [gotoDate](Calendar-gotoDate) instead
- defaultView - use [changeView](Calendar-changeView) instead

Event Sources should be dynamically manipulated through methods like [addEventSource](Calendar-addEventSource) and [remove](EventSource-remove). Thusly, dynamic setting of the following options is **not applicable**:

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
- timeZoneParam

Dynamic setting of some options is simply **not yet implemented**:

- handleWindowResize
- views
