---
title: V4 Release Notes and Upgrade Guide
layout: text
---

<style>
  #summary ul, #toc ul { margin-top: 0; margin-bottom: 0 }
  #summary ul, #toc ul { margin-top: 1em; margin-bottom: 1em }
  #summary li, #toc li { margin-top: .5em; margin-bottom: .5em }
  #toc { flex-basis: 30% }
  #toc ul { margin-left: 0; list-style-position: inside  }
  .text-content table { table-layout: fixed }
  .text-content th { width: 21% }
  .text-content td { padding: 10px }
  .text-content td p { margin-top: .7em; margin-bottom: .7em }
  .text-content code { white-space: nowrap }
  .text-content pre code { margin: 0; white-space: pre }
</style>


<div class='sidenote-layout'>
<div class='sidenote-layout__main' id='summary' markdown='1'>
## Summary of Changes

Version 4 is the biggest FullCalendar release to date. It sheds a number of outdated dependencies and offers a more modern API. It is also the first time connector plugins to third-party libraries are offered.

**Major breaking changes:**

- Removal of jQuery as a dependency. Consequently:
  - Raw DOM nodes are used in place of jQuery objects
  - Calendar initialization no longer happens via a jQuery method.
- Removal of Moment JS as a dependency. Consequently:
  - Native Date objects are used in place of Moment objects.
  - Time zone support was reworked and is now more intuitive.
  - Date formatting is delegated to the native [DateTimeFormat API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat).
- A modular plugin-based API. [See the list of plugin](plugin-index).
- A more object-oriented API. There are distinct `Calendar`, `EventSource`, and `Event` classes.
- Many settings and callbacks have been renamed, reworked, or their arguments have changed.
- IE 9 & 10 support has been dropped. Only IE11 and Edge are supported.

**Major new features:**

- Recurring events (a ["simple" implementation](recurring-events) and an [RRule plugin](rrule-plugin))
- Event drag & drop between two calendars. [Demo](other-calendar-dragging-demo)
- Built-in draggable API for external elements/events. Consequently, jQuery UI is no longer needed for this. [Demo](external-dragging-demo)
- Connector plugins for [Moment JS](moment-plugins), [Moment Timezone](moment-plugins#moment-timezone), and [Luxon](luxon-plugin)
- A new default skin. Button and event styling are more flat. View [any of the demos](timegrid-standard-view-demo) to see.
- Smoother auto-scrolling during dragging/resizing/selecting. Also, multiple containers can now be auto-scrolled. [Issue 2761](https://github.com/fullcalendar/fullcalendar/issues/2761)
- Touch scrolling works better with event and date unselecting. [Issue 3530](https://github.com/fullcalendar/fullcalendar/issues/3530)
- For sticky text while scrolling, Timeline view leverages the native CSS prop `position:sticky` when possible. Much more performant.

<br />

**Want the full docs** in a non-changelog format? [View the docs]({{ site.baseurl }}/docs)

**Found a bug?** [Report it on the issue tracker]({{ site.baseurl }}/reporting-bugs)

**Have a comment?** [Comment on the blog post](https://fullcalendar.io/blog/2019/03/v4-officially-released)

</div>
<div class='sidenote-layout__sidenote' id='toc' markdown='1'>
## Table of Contents

- [Initialization](#initialization)
- [Scheduler](#scheduler)
- [Core Changes](#core-changes)
- [Date Library](#date-library)
- [Time Zone](#time-zone)
- [Locales](#locales)
- [Event Model](#event-model)
- [Event Source](#event-source)
- [Event Source Function](#event-source-function)
- [Event JSON Feed](#event-json-feed)
- [Google Calendar Event Source](#google-calendar-event-source)
- [View API](#view-api)
- [View Rendering](#view-rendering)
- [Date Rendering](#date-rendering)
- [Date Navigation](#date-navigation)
- [Date Clicking & Selecting](#date-clicking--selecting)
- [Event Rendering](#event-rendering)
- [Event Clicking & Hovering](#event-clicking--hovering)
- [Event Dragging & Resizing](#event-dragging--resizing)
- [Dragging External Elements & Events](#dragging-external-elements--events)
- [Week Numbers](#week-numbers)
- [Event Popover](#event-popover)
- [Business Hours](#business-hours)
- [Toolbar](#toolbar)
- [Theming](#theming)
- [Month View](#month-view)
- [Agenda View](#agenda-view)
- [List View](#list-view)
- [Timeline View](#timeline-view)
- [Vertical Resource View](#vertical-resource-view)
- [Resource Fetching](#resource-fetching)
- [Resource Model](#resource-model)
- [Resource Rendering](#resource-rendering)
- [Versioning Scheme](#versioning-scheme)
- [Package Managers](#package-managers)

</div>
</div>


## Initialization

Previously, a calendar was initialized by calling the `$().fullCalendar()` jQuery method. FullCalendar resided in a single JavaScript file that needed to be included on the page before pageload.

Now, a calendar is initialized by instantiating a `Calendar` object and then calling its `render` method. Also, **all functionality has been broken into plugins**. You'll need to use the plugin system for any and all views in addition to drag-n-drop functionality. [See a full list of plugins &raquo;](plugin-index)

If you want to use [script tags and browser globals](initialize-globals) you can do something like this:

```html
<link href='fullcalendar/core/main.css' rel='stylesheet' />
<link href='fullcalendar/daygrid/main.css' rel='stylesheet' />

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/daygrid/main.js'></script>
<script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      defaultView: 'dayGridMonth'
    });

    calendar.render();
  });

</script>
```

Or if you want to use [an ES6 build environment](initialize-es6) install the necessary dependencies:

```
npm install --save @fullcalendar/core @fullcalendar/daygrid
```

And then write your JS:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ],
    defaultView: 'dayGridMonth'
  });

  calendar.render();
});
```

You'll need to manually include the necessary CSS files on your page like so:

```html
<link href='node_modules/@fullcalendar/core/main.css' rel='stylesheet' />
<link href='node_modules/@fullcalendar/daygrid/main.css' rel='stylesheet' />
```

Also, many of the views have been renamed:

- <del><strong>month</strong></del> renamed to **dayGridMonth** (requires the [daygrid](daygrid-view) plugin, but has [its own article](month-view))
- <del><strong>basicWeek</strong></del> renamed to **dayGridWeek** (requires the [daygrid](daygrid-view) plugin)
- <del><strong>basicDay</strong></del> renamed to **dayGridDay** (requires the [daygrid](daygrid-view) plugin)
- <del><strong>agendaWeek</strong></del> renamed to **timeGridWeek** (requires the [timegrid](timegrid-view) plugin)
- <del><strong>agendaDay</strong></del> renamed to **timeGridDay** (requires the [timegrid](timegrid-view) plugin)


## Scheduler

The [premium Scheduler product]({{ site.baseurl }}/purchase) has been broken into a number of separate plugins. Also, the names and meanings of each view have changed.

Previously, to display a resource view, you would specify the `resources` option, and if working with vertical resource view, you might specify `groupByResource` or `groupByDateAndResource` as well. In v4, things are much more explicit. To display a resource view, you must choose one of the following views:

- **resourceTimeGridWeek** - use instead of <del><strong>agendaWeek</strong></del> for resources (requires the [resource-timegrid](vertical-resource-view) plugin)
- **resourceTimeGridDay** - use instead of <del><strong>agendaDay</strong></del> for resources (requires the [resource-timegrid](vertical-resource-view) plugin)
- **resourceDayGridWeek** - use instead of <del><strong>basicWeek</strong></del> for resources (requires the [resource-daygrid](resource-daygrid-view) plugin)
- **resourceDayGridDay** - use instead of <del><strong>basicDay</strong></del> for resources (requires the [resource-daygrid](resource-daygrid-view) plugin)
- **resourceTimelineYear** - use instead of <strong>timelineYear</strong> for resources (requires the [resource-timeline](timeline-view) plugin)
- **resourceTimelineMonth** - use instead of <strong>timelineMonth</strong> for resources (requires the [resource-timeline](timeline-view) plugin)
- **resourceTimelineWeek** - use instead of <strong>timelineWeek</strong> for resources (requires the [resource-timeline](timeline-view) plugin)
- **resourceTimelineDay** - use instead of <strong>timelineDay</strong> for resources (requires the [resource-timeline](timeline-view) plugin)

The following views previouly might have displayed resources, but in v4, they are guaranteed to **NOT** display resources:

- **timelineYear** - will **NOT** display resources (requires the [timeline](timeline-view-no-resources) plugin)
- **timelineMonth** - will **NOT** display resources (requires the [timeline](timeline-view-no-resources) plugin)
- **timelineWeek** - will **NOT** display resources (requires the [timeline](timeline-view-no-resources) plugin)
- **timelineDay** - will **NOT** display resources (requires the [timeline](timeline-view-no-resources) plugin)


## Core Changes

<table>

<tr>
<th>print stylesheet</th>
<td markdown='1'>
No need to use a separate `<link>` tag for a print-only stylesheet. It will be automatically included within the normal `core/main.css`, by use of media queries. [Issue 3594](https://github.com/fullcalendar/fullcalendar/issues/3594)
</td>
</tr>

<tr>
<th><a href='methods'>calling methods</a></th>
<td markdown='1'>
Instead of using jQuery like `$().fullCalendar('next')`, do something like this:

```js
calendar.next();
```
</td>
</tr>

<tr>
<th>util functions</th>
<td markdown='1'>
Top-level utility functions that were called like `$.fullCalendar.formatDate()` must now be accessed like `import { formatDate } from '@fullcalendar/core'` or via the global like `FullCalendar.formatDate`.
</td>
</tr>

<tr>
<th><a href='handlers'>handlers</a></th>
<td markdown='1'>
The `this` context will always be the `Calendar` object, as opposed to something arbitrary. [Issue 2463](https://github.com/fullcalendar/fullcalendar/issues/2463) and [2699](https://github.com/fullcalendar/fullcalendar/issues/2699)

```js
var calendar = new Calendar(calendarEl, {
  select: function() {
    console.log(this === calendar); // true
  }
});
```
</td>
</tr>

<tr>
<th><a href='handlers'>dynamic handlers</a></th>
<td markdown='1'>
The `on` and `off` methods no longer accept namespaced event names like `eventClick.namespace1.namespace2`
</td>
</tr>

<tr>
<th><a href='dynamic-options'>dynamic options</a></th>
<td markdown='1'>
Instead of using jQuery to get options like `$().fullCalendar('option', 'optionName')`, use `getOption`:

```js
var optionValue = calendar.getOption('optionName');
```

And instead of using jQuery to set options like `$().fullCalendar('option', 'optionName', 'optionValue')`, use `setOption`:

```js
calendar.setOption('optionName', 'optionValue');
```
</td>
</tr>

<tr>
<th><del>getView method</del></th>
<td markdown='1'>
To get the current [View Object](view-object), access the Calendar's `view` property instead. The `getView()` method has been removed.
</td>
</tr>

<tr>
<th><a href='render'>render method</a></th>
<td markdown='1'>
When called after initialization, will rerender **everything**, not just merely adjust the calendar's size. For that, use [updateSize](updateSize). [Issue 2709](https://github.com/fullcalendar/fullcalendar/issues/2709)
</td>
</tr>

<tr>
<th><a href='loading'>loading method</a></th>
<td markdown='1'>
No longer receives a [view](view-object) as its second parameter.
</td>
</tr>

</table>

New things:

<table>

<tr>
<th><a href='updateSize'>updateSize</a></th>
<td markdown='1'>
Will readjust a calendar's sizing (what the `render` method used to do).
</td>
</tr>

<tr>
<th><a href='Calendar-batchRendering'>batchRendering</a></th>
<td markdown='1'>
Will group operations and consolidate them into a single rerender. Solves [issue 3262](https://github.com/fullcalendar/fullcalendar/issues/3262)
</td>
</tr>

<tr>
<th><a href='rerenderDelay'>rerenderDelay</a></th>
<td markdown='1'>
The amount of milliseconds to wait before rerendering *anything* on a calendar.
</td>
</tr>

</table>


## Date Library

Breaking changes:

<table>

<tr>
<th>Moment JS removal</th>
<td markdown='1'>
Moment JS has been removed as a dependency and thus there is no need to include `moment(.min).js`. The API now deals in [native Date objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) as opposed to Moment objects. Related to [issue 3937](https://github.com/fullcalendar/fullcalendar/issues/3937), [3672](https://github.com/fullcalendar/fullcalendar/issues/3672), [3672](https://github.com/fullcalendar/fullcalendar/issues/3274).
</td>
</tr>

<tr>
<th>Ambiguously-timed Moments</th>
<td markdown='1'>
Will now be `Date` objects with a time of `00:00:00`. Callbacks nearly always provide an `allDay` boolean in addition. [Issue 2981](https://github.com/fullcalendar/fullcalendar/issues/2981)
</td>
</tr>

<tr>
<th><a href='date-formatting'>date formatting strings</a></th>
<td markdown='1'>
Instead of specifying date formats as command strings like `MMMM d, YYYY`, you specify them as objects like `{ month: 'long', day: 'numeric', year: 'numeric' }`. This technique leverages the native [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) which results in greater flexibility across locales and smaller locale files.

Also, you can use functions to programmatically generate date string text. [Issue 3664](https://github.com/fullcalendar/fullcalendar/issues/3664)

You can still use command strings, but you'll need to use the [moment](moment-plugins) or [luxon](luxon-plugin) plugins.
</td>
</tr>

<tr>
<th><a href='formatRange'>formatRange method</a></th>
<td markdown='1'>
Signature has been changed from `formatRange( moment1, moment2, formatString [, separator, isRTL ] )` to `formatRange( date1, date2, settings )`. Both `date1` and `date2` are [Date object inputs](date-parsing) and `settings` accepts [formatting](date-formatting) keys and other stuff too.
</td>
</tr>

<tr>
<th><a href='duration'>duration objects</a></th>
<td markdown='1'>
Instead of Moment Duration objects, these objects are plain objects in the form `{ years, months, days, milliseconds }`.

You can use the [moment](moment-plugins) or [luxon](luxon-plugin) plugins to convert them to something more powerful.
</td>
</tr>

<tr>
<th><a href='weekNumberCalculation'>weekNumberCalculation</a></th>
<td markdown='1'>
When specifying a function, the function will receive a single [Date object](date-object), not a Moment.
</td>
</tr>

</table>

New things:

<table>

<tr>
<th><a href='defaultRangeSeparator'>defaultRangeSeparator</a></th>
<td markdown='1'>
Determines the separator text used for [date-formatting](date-formatting) ranges throughout the API, except for the toolbar title text, which is affected by [titleRangeSeparator](titleRangeSeparator).
</td>
</tr>

<tr>
<th><a href='formatDate'>formatDate util func</a></th>
<td markdown='1'>
Formats a date into a string.
</td>
</tr>

<tr>
<th><a href='Calendar-formatDate'>formatDate method</a></th>
<td markdown='1'>
Formats a date into a string. Inherits the locale and time zone settings of the calendar it’s called on.
</td>
</tr>

<tr>
<th><a href='Calendar-formatIso'>formatIso method</a></th>
<td markdown='1'>
Formats a date into an ISO8601 string. Outputs a UTC offset appropriate to the calendar it’s called on.
</td>
</tr>

<tr>
<th><a href='Calendar-formatRange'>formatRange method</a></th>
<td markdown='1'>
Formats two dates, a start and an end, into a string. Inherits settings from the calendar it's called on.
</td>
</tr>

</table>


## Time Zone

<table>

<tr>
<th><del>timezone</del> setting</th>
<td markdown='1'>
Renamed to [timeZone](timeZone) (to be more consistent with native naming conventions)
</td>
</tr>

<tr>
<th>Date objects</th>
<td markdown='1'>
The current [timeZone](timeZone) will affect how you will interpret the [Date objects](date-object) emitted from the API. Whether you will use local methods like `getHours()` or UTC methods like `getUTCHours()`.
</td>
</tr>

<tr>
<th>Ambiguously-zoned Moments</th>
<td markdown='1'>
Will now be `Date` objects in UTC. [Issue 2981](https://github.com/fullcalendar/fullcalendar/issues/2981)
</td>
</tr>

<tr>
<th>the default time zone</th>
<td markdown='1'>
**The default timezone is now `local`.** It used to be `false`, a technique that forced all dates into UTC, which has been removed...
</td>
</tr>

<tr>
<th markdown='1'>a `false` time zone</th>
<td markdown='1'>
The `timezone: false` technique is no longer available. Instead, use a named time zone like `America/Chicago` without any time zone plugins. Addresses [2981](https://github.com/fullcalendar/fullcalendar/issues/2981), [2780](https://github.com/fullcalendar/fullcalendar/issues/2780), [3951](https://github.com/fullcalendar/fullcalendar/issues/3951)
</td>
</tr>

<tr>
<th>Plugins</th>
<td markdown='1'>
Browsers have a tough time supporting time zones other than local and UTC, which is why the default named time zone implementation essentially shoehorns everything into UTC Date objects. However you can use third-party adapter plugins like [moment-timezone](moment-plugins#moment-timezone) or [luxon](luxon-plugin) for more authentic time zone implementations, though browser support will vary. [Issue 3188](https://github.com/fullcalendar/fullcalendar/issues/3188)
</td>
</tr>

</table>


## Locales

Breaking changes:

<table>

<tr>
<th>paths to locale files</th>
<td markdown='1'>
`locale/*.js` files have been moved to `locales/*.js` (added an `s`)

`locale-all.js` files has been moved to `locales-all.js` (added an `s`)
</td>
</tr>

<tr>
<th><del>isRTL</del></th>
<td markdown='1'>
Use the [dir](dir) settings instead.

`isRTL: true` becomes `dir: 'rtl'`
</td>
</tr>

<tr>
<th><del>dayNames</del></th>
<td markdown='1'>
Removed. Use a [date-formatting](date-formatting) plugin or function instead.
</td>
</tr>

<tr>
<th><del>dayNamesShort</del></th>
<td markdown='1'>
Removed. Use a [date-formatting](date-formatting) plugin or function instead.
</td>
</tr>

<tr>
<th><del>monthNames</del></th>
<td markdown='1'>
Removed. Use a [date-formatting](date-formatting) plugin or function instead.
</td>
</tr>

<tr>
<th><del>monthNamesShort</del></th>
<td markdown='1'>
Removed. Use a [date-formatting](date-formatting) plugin or function instead.
</td>
</tr>

<tr>
<th>jQuery UI Datepicker</th>
<td markdown='1'>
Previously, FullCalendar was kind enough to populate locales for jQuery UI Datepicker. This is no longer the case.
</td>
</tr>

</table>

Enhancements:

If you need a locale that does not have a matching `locales/*.js` file you may still set the `locale` setting. You will get partial support: most date-related strings within the calendar will correctly translate, but those in the buttons of the header/footer will not.


## Event Model

Previously, event objects would be specified as plain objects, and then when accessing those same events in other parts of the API, they would be slightly-massaged versions of the same plain objects. Now, you still specify plain objects (though some properties have changed), but when you retrieve them in other parts of the API, they are **instances of the Event class** with methods for manipulation.

The plain-object's input properties have changed a bit:

<table>

<tr>
<th><del>_id</del></th>
<td markdown='1'>
`_id` can no longer be specified.
</td>
</tr>

<tr>
<th>id</th>
<td markdown='1'>
Was previously used to group related events together, so that they could be dragged/resized together. That is now done with `groupId`. The `id` properties should now be unique across all events in a calendar!
</td>
</tr>

<tr>
<th>recurring props<br />(start/end/dow)</th>
<td markdown='1'>
These props were never officially supported. Use `startTime`, `endTime`, and `daysOfWeek` instead. See [simple event recurrence](recurring-events).
</td>
</tr>

</table>

The outputted object, which is now an instance if the `Event` class, has properties that differ from the previously-available massaged plain-object:

<table>

<tr>
<th><del>_id</del></th>
<td markdown='1'>
`_id` is no longer available. If you need a unique ID for each event, generate it yourself and put it in the `id`.
</td>
</tr>

<tr>
<th>groupId</th>
<td markdown='1'>
All events with the same groupId will be dragged, resized, and mutated together. [Issue 4147](https://github.com/fullcalendar/fullcalendar/issues/4147)
</td>
</tr>

<tr>
<th>start</th>
<td markdown='1'>
A [Date object](date-object). No longer a moment.
</td>
</tr>

<tr>
<th>end</th>
<td markdown='1'>
A [Date object](date-object). No longer a moment.
</td>
</tr>

<tr>
<th><del>color</del></th>
<td markdown='1'>
Access `backgroundColor` and `borderColor` instead. Color is an alias for setting both of these at the same time.
</td>
</tr>

<tr>
<th>extendedProps</th>
<td markdown='1'>
Previously, any non-standard properties would be preserved as top-level keys. Now, they are moved into the `extendedProps` hash.

It is also possible to specify an explicit `extendedProps` hash in the plain object. [Issue 3228](https://github.com/fullcalendar/fullcalendar/issues/3228)
</td>
</tr>

<tr>
<th><del>resourceId</del></th>
<td markdown='1'>
Removed. Use [getResources](Event-getResources) instead, like `event.getResources()[0].id`
</td>
</tr>

<tr>
<th><del>resourceIds</del></th>
<td markdown='1'>
Removed. Use [getResources](Event-getResources) instead, like `event.getResources().map((resource) => resource.id)`
</td>
</tr>

</table>

Various methods of the `Calendar` object that manipulate events have been converted to `Event` methods:

<table>

<tr>
<th><del>clientEvents</del></th>
<td markdown='1'>
Removed. For retrieving a single event, use [getEventById](Calendar-getEventById). For retrieving all events, use [getEvents](Calendar-getEvents). For retrieving a subset of events, filter the returned array:

```js
var someEvents = calendar.getEvents().filter(function(event) {
  return event.title === 'My Event';
});
```
</td>
</tr>

<tr>
<th><del>updateEvent</del></th>
<td markdown='1'>
Removed. Instead, retrieve an [Event object](event-object) and then call a method that performs manipulation:

```js
var event = calendar.getEventById('a');
event.setProp('title', 'new title');
```

Manipulation methods: [setProp](Event-setProp), [setExtendedProp](Event-setExtendedProp), [setStart](Event-setStart), [setEnd](Event-setEnd), [setDates](Event-setDates), [setAllDay](Event-setAllDay), [moveStart](Event-moveStart), [moveEnd](Event-moveEnd), [moveDates](Event-moveDates)
</td>
</tr>

<tr>
<th><del>removeEvent</del></th>
<td markdown='1'>
Removed. Instead, retrieve an [Event object](event-object) and then call its [remove method](Event-remove):

```js
var event = calendar.getEventById('a');
event.remove();
```
</td>
</tr>

<tr>
<th><del>removeEvents</del></th>
<td markdown='1'>
Removed. Instead, use multiple [Event::remove](Event-remove) calls. Group together for performance with [batchRendering](Calendar-batchRendering).
</td>
</tr>

</table>

The following settings have changed:

<table>

<tr>
<th><a href='defaultTimedEventDuration'>defaultTimedEventDuration</a></th>
<td markdown='1'>
The default has changed from 2 hours to 1 hour.
</td>
</tr>

</table>

Also, recurring events is now a built-in feature! You can use [simple event recurrence](recurring-events) or use the [RRule adapater](rrule-plugin). [Issue 387](https://github.com/fullcalendar/fullcalendar/issues/387)


## Event Source

Just as before, event sources can be specified in their "extended form", a plain object with properties. [The format for this plain object](event-source-object) has changed slightly:

<table>

<tr>
<th>overlap</th>
<td markdown='1'>
Can longer specify a function. Use the calendar-wide [eventOverlap](eventOverlap) instead.
</td>
</tr>

<tr>
<th>allow (new)</th>
<td markdown='1'>
Like the calendar-wide [eventAllow](eventAllow) but for this event source only.
</td>
</tr>

<tr>
<th>success (new)</th>
<td markdown='1'>
A function that gets called when fetching succeeds. Will receive two arguments, the raw event array and an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) if applicable. Can massage the response by returning an event source array to use instead.
</td>
</tr>

<tr>
<th>failure (new)</th>
<td markdown='1'>
A function that gets called when fetching failed. Probably because [an AJAX request](events-json-feed) failed. Receives one argument, an error object.
</td>
</tr>

<tr>
<th>eventDataTransform</th>
<td markdown='1'>
Can now return `false` to exclude an event from being included. The calendar-wide [eventDataTransform](eventDataTransform) can do this too.
</td>
</tr>

</table>

This plain object is then parsed and becomes available in places like [getEventSourceById](Calendar-getEventSourceById) and the [event object's](event-object) `source` property. Previously, these event source references would be slighly massaged version of the original plain object. Now, they are instances of the `EventSource` class and have methods that allow manipulation.

**In v4, this new `EventSource` object is rather limited, offering only two properties:** `id` and `url`. [More info](event-source-object#after-parsing)

Also, the `EventSource` object offers methods that replace the following `Calendar` methods:

<table>

<tr>
<th><del>refetchEventSources</del></th>
<td markdown='1'>
Removed. Instead, retreive an [Event Source object](event-source-object) and then calls its [refetch method](EventSource-refetch):

```js
var eventSource = calendar.getEventSourceById('a');
eventSource.refetch();
```
</td>
</tr>

<tr>
<th><del>removeEventSource</del></th>
<td markdown='1'>
Removed. Instead, retreive an [Event Source object](event-source-object) and then calls its [remove method](EventSource-remove):

```js
var eventSource = calendar.getEventSourceById('a');
eventSource.remove();
```
</td>
</tr>

<tr>
<th><del>removeEventSources</del></th>
<td markdown='1'>
Removed. Instead, use multiple [EventSource::remove](EventSource-remove) calls. Group together for performance with [batchRendering](Calendar-batchRendering).
</td>
</tr>

</table>

There are two new calendar-wide callbacks:

<table>

<tr>
<th><a href='eventSourceSuccess'>eventSourceSuccess</a></th>
<td markdown='1'>
A function that gets called when fetching succeeds. Will receive two arguments, the raw event array and an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) if applicable. Can massage the response by returning an event source array to use instead. [Issue 2431](https://github.com/fullcalendar/fullcalendar/issues/2431)
</td>
</tr>

<tr>
<th><a href='eventSourceFailure'>eventSourceFailure</a></th>
<td markdown='1'>
A function that gets called when fetching failed. Probably because [an AJAX request](events-json-feed) failed. Receives one argument, an error object.
</td>
</tr>

</table>


## Event Source Function

An [event-fetching function](events-function) **previously** accepted the following arguments:

```js
function( startMoment, endMoment, timeZoneStr, callback )
```

**Now**, it accepts the following arguments:

```js
function( fetchInfo, successCallback, failureCallback )
```

It must call `successCallback`, `failureCallback`, or return a Promise. `fetchInfo` is an object that has a bunch of other properties. [See the full article](events-function). A stubbed example of how to use the new signature:

```js
var calendar = new Calendar(calendarEl, {
  events: function(fetchInfo, successCallback, failureCallback) {
    console.log(fetchInfo.startStr); // '2018-08-26T00:00:00-05:00'
    console.log(fetchInfo.endStr); // '2018-10-07T00:00:00-05:00'
    console.log(fetchInfo.timeZone); // 'local'
    successCallback([]);
  }
})
```

Solves [issue 3593](https://github.com/fullcalendar/fullcalendar/issues/3593)


## Event JSON Feed

The following FullCalendar functionality has been affected:

<table>

<tr>
<th>JSONP requesting</th>
<td markdown='1'>
It is no longer possible to request events via JSONP. CORS will be used instead. Make sure your server is set up to do CORS.
</td>
</tr>

<tr>
<th>jQuery.ajax settings</th>
<td markdown='1'>
The full range of [jQuery.ajax](http://api.jquery.com/jquery.ajax/) settings are **no longer accepted**. However, can use the following new settings:

- `method` - something like `'GET'` (the default) or `'POST'`
- `extraParams` - will send GET/POST data to the server. the `data` property was previously used
- `success` - Will receive two arguments, the raw event array and an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- `failure` - Receives one argument, an error object
</td>
</tr>

<tr>
<th>cachebusting</th>
<td markdown='1'>
The `cache: false` property is no longer available. Instead, adjust your script's headers or use `extraParams` to insert your own cachebuster:

```js
var calendar = new Calendar(calendarEl, {
  events: {
    url: '/myfeed.php',
    extraParams: function() {
      return {
        cachebuster: new Date().valueOf()
      };
    }
  }
});
```
</td>
</tr>

</table>

The following request parameters have been affected:

<table>

<tr>
<th><a href='startParam'>startParam</a></th>
<td markdown='1'>
Would previously generate strings like `2019-09-01` which did not have time parts or UTC offsets. Now, the string is guaranteed to have a time part (most likely `00:00:00`) and will have a UTC offset that is dependant on the current [timeZone](timeZone). If the timeZone is set to `'local'` and the user is localed in New York, the string might be `2019-09-01T00:00:00-05:00`. [Issue 3593](https://github.com/fullcalendar/fullcalendar/issues/3593)
</td>
</tr>

<tr>
<th><a href='startParam'>endParam</a></th>
<td markdown='1'>
Same comments as `startParam`
</td>
</tr>

<tr>
<th><del>timezoneParam</del></th>
<td markdown='1'>
Renamed to [timeZoneParam](timeZoneParam). Defaults to `"timeZone"` instead of `"timezone"`.

**If your server-side scripts previously relied on a `timezone=` GET/POST parameter, change it to `timeZone` instead!**
</td>
</tr>

</table>


## Google Calendar Event Source

The [Google Calendar Event Source](google-calendar) has been affected:

<table>

<tr>
<th><del>googleCalendarError</del></th>
<td markdown='1'>
Removed. Use [eventSourceFailure](eventSourceFailure) instead. [Issue 3982](https://github.com/fullcalendar/fullcalendar/issues/3982)
</td>
</tr>

<tr>
<th>timeZone</th>
<td markdown='1'>
Previously, it was possible to specify timeZones with spaces such as "America/New York". Now, you must use underscores like "America/New_York".
</td>
</tr>

</table>


## View API

The way Views are customized and defined has been affected:

<table>

<tr>
<th><a href='view-specific-options'>view-specific options</a></th>
<td markdown='1'>
In parity with how view names have been renamed, instead of specifying `agenda` and `basic` to affect views of a certain type, use `timeGrid` and `dayGrid` respectively.
</td>
</tr>

<tr>
<th><a href='custom-view-with-js'>custom views written in JS</a></th>
<td markdown='1'>
When subclassing the `View` class, the methods that must be implemented have changed quite a bit. [More info](custom-view-with-js).
</td>
</tr>

<tr>
<th>registering a custom view</th>
<td markdown='1'>
Previously, to globally define a new type of view, you would use this technique:

```js
$.fullCalendar.views.specialView = {
  type: 'theViewType',
  defaults: { slotLabalInterval: '06:00' }
};

$.fullCalendar.views.customView = {
  'class': CustomViewClass
};
```

This must rewritten as a plugin:

```js
import { createPlugin } from '@fullcalendar/core';

export default createPlugin({
  views: {
    specialView: {
      type: 'theViewType',
      slotLabalInterval: '06:00' // top-level property!
    },
    customView: CustomViewClass // can pass-in the class directly!
  }
})
```

Solves [issue 3657](https://github.com/fullcalendar/fullcalendar/issues/3657).
</td>
</tr>

</table>

The [View object's](view-object) properties have changed a bit:

<table>

<tr>
<th><del>name</del></th>
<td markdown='1'>
Renamed to `type`
</td>
</tr>

<tr>
<th>
<del>intervalStart</del> /
<del>intervalEnd</del>
</th>
<td markdown='1'>
Renamed to `currentStart` / `currentEnd`. The current month/week/day/etc.
</td>
</tr>

<tr>
<th>
<del>start</del> /
<del>end</del>
</th>
<td markdown='1'>
Renamed to `activeStart` / `activeEnd`. The date range that can be selected and accept events.
</td>
</tr>

</table>


## View Rendering

The following view-rendering-related callbacks have been affected:

<table>

<tr>
<th><del>viewRender</del></th>
<td markdown='1'>
Renamed to [datesRender](datesRender). Parameters have changed.
</td>
</tr>

<tr>
<th><del>viewDestroy</del></th>
<td markdown='1'>
Renamed to [datesDestroy](datesDestroy). Parameters have changed.
</td>
</tr>

<tr>
<th><a href='viewSkeletonRender'>viewSkeletonRender</a> (new)</th>
<td markdown='1'>
Triggered after a view’s non-date-related DOM structure has been rendered.
</td>
</tr>

<tr>
<th><a href='viewSkeletonDestroy'>viewSkeletonDestroy</a> (new)</th>
<td markdown='1'>
Triggered before a view’s DOM skeleton is removed from the DOM.
</td>
</tr>

</table>


## Date Rendering

The following settings have been affected:

<table>

<tr>
<th><a href='columnHeaderFormat'>columnHeaderFormat</a></th>
<td markdown='1'>
No longer accepts a format-string out of the box. [Use a date-formatting object instead](date-formatting).
</td>
</tr>

<tr>
<th><del>columnFormat</del></th>
<td markdown='1'>
This deprecated alias of [columnHeaderFormat](columnHeaderFormat) has been removed. Use [columnHeaderFormat](columnHeaderFormat) instead.
</td>
</tr>

<tr>
<th><a href='slotLabelFormat'>slotLabelFormat</a></th>
<td markdown='1'>
No longer accepts a format-string out of the box. [Use a date-formatting object instead](date-formatting).
</td>
</tr>

<tr>
<th><a href='columnHeaderText'>columnHeaderText</a></th>
<td markdown='1'>
Accepts a normal [Date object](date-object) now.
</td>
</tr>

<tr>
<th><a href='dayRender'>dayRender</a></th>
<td markdown='1'>
Instead of receiving `( date, el )`, it now accepts an object. Stub example:

```js
var calendar = new Calendar(calendarEl, {
  dayRender: function(info) {
    console.log(info.date.toISOString());
    console.log(info.el);
    console.log(info.view.type);
  }
});
```
</td>
</tr>

</table>


## Date Navigation

The [getDate](Calendar-getDate) method will return a [Date object](date-object) not a Moment.


## Date Clicking & Selecting

The [interaction plugin is now required](selectable#loading-the-interaction-plugin) to detect date clicking and selecting:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin ],
  selectable: true,
  select: function(info) { },
  dateClick: function(info) { }
});
```

Other breaking changes:

<table>

<tr>
<th><del>dayClick</del></th>
<td markdown='1'>
Renamed to [dateClick](dateClick). Instead of ordered arguments, receives on object argument. Stub example:

```js
var calendar = new Calendar(calendarEl, {
  dateClick: function(info) {
    console.log(info.date.toISOString());
    console.log(info.dateStr);
    console.log(info.allDay);
    console.log(info.dayEl);
    console.log(info.jsEvent);
  }
});
```

`info.date` is a [Date object](date-object), not a Moment.

Also, this is now triggered when the user clicks on top of a background event. [Issue 2843](https://github.com/fullcalendar/fullcalendar/issues/2843)
</td>
</tr>

<tr>
<th><a href='select-callback'>select callback</a></th>
<td markdown='1'>
Instead of ordered arguments, receives on object argument. Stub example:

```js
var calendar = new Calendar(calendarEl, {
  select: function(info) {
    console.log(info.start.toISOString());
    console.log(info.end.toISOString());
    console.log(info.startStr + ' - ' + info.endStr);
    console.log(info.allDay);
  }
});
```

`info.start` and `info.end` are [Date objects](date-object), not Moments.
</td>
</tr>

<tr>
<th><a href='Calendar-select'>select method</a></th>
<td markdown='1'>
Removed the ordered argument signature: `( start, end, resourceId )`. Instead, pass in a single object `{ start, end, resourceId }`. The ordered argument signature `( start, end )` is still supported.
</td>
</tr>

<tr>
<th><del>selectHelper</del></th>
<td markdown='1'>
Renamed to [selectMirror](selectMirror).
</td>
</tr>

<tr>
<th><a href='selectConstraint'>selectConstraint</a></th>
<td markdown='1'>
A string that represents an event ID is no longer accepted. Instead, a string represents an **event group ID**. The simplest migration tactic is to assign `groupId`'s to your events with the same values as their `id`'s.
</td>
</tr>

</table>

Also, a bug related to an unwanted unselect on touch devices has been fixed. [Issue 4062](https://github.com/fullcalendar/fullcalendar/issues/4062)


## Event Rendering

The following settings have been affected:

<table>

<tr>
<th><a href='nextDayThreshold'>nextDayThreshold</a></th>
<td markdown='1'>
Default has been changed to `00:00:00`. The previous default of `09:00:00` didn't make a lot of sense. [Issue 2902](https://github.com/fullcalendar/fullcalendar/issues/2902)

Also, a bug with events that begin before the view's start date has been fixed. [Issue 3943](https://github.com/fullcalendar/fullcalendar/issues/3943)
</td>
</tr>

<tr>
<th><a href='eventOrder'>eventOrder</a></th>
<td markdown='1'>
This value how has complete control over ordering events within a day, as opposed to before when events were always ordered by time first. The default is now `'start,-duration,allDay,title'`. [Issue 2907](https://github.com/fullcalendar/fullcalendar/issues/2907)

If your old value for this setting was something like `'-duration,title'`, you'll want to include the start time in the value now. So, convert it to `'start,-duration,title'`.
</td>
</tr>

<tr>
<th><a href='eventRender'>eventRender</a></th>
<td markdown='1'>
Instead of accepting `( event, el, view )`, it now accepts an object. Stub example:

```js
var calendar = new Calendar(calendarEl, {
  eventRender: function(info) {
    console.log(info.event.title);
    console.log(info.el);
    console.log(info.view);
    console.log(info.isStart);
    console.log(info.isEnd);
    console.log(info.isMirror);
  }
});
```

Addresses [issue 3674](https://github.com/fullcalendar/fullcalendar/issues/3674), [3956](https://github.com/fullcalendar/fullcalendar/issues/3956), [2616](https://github.com/fullcalendar/fullcalendar/issues/2616), [3952](https://github.com/fullcalendar/fullcalendar/pull/3952), and [3311](https://github.com/fullcalendar/fullcalendar/issues/3311)
</td>
</tr>

<tr>
<th><a href='eventDestroy'>eventDestroy</a></th>
<td markdown='1'>
Instead of accepting `( event, el, view )`, it now accepts an object. Stub example:

```js
var calendar = new Calendar(calendarEl, {
  eventDestroy: function(info) {
    console.log(info.event.title);
    console.log(info.el);
    console.log(info.view);
  }
});
```
</td>
</tr>

<tr>
<th><del>timeFormat</del></th>
<td markdown='1'>
Renamed to [eventTimeFormat](eventTimeFormat). Accepts [a date-formatting object](date-formatting) instead. [Issue 1019](https://github.com/fullcalendar/fullcalendar/issues/1019)
</td>
</tr>

<tr>
<th><del>eventAfterRender</del></th>
<td markdown='1'>
Renamed to [eventPositioned](eventPositioned). Instead of accepting `( event, el, view )`, it now accepts an object.
</td>
</tr>

<tr>
<th><del>eventAfterAllRender</del></th>
<td markdown='1'>
Removed. The concecpt of event rendering being fully complete is flawed (such as when events are revealed in a +more popup). You should operate on individual events instead, via [eventPositioned](eventPositioned) or use some other callback.
</td>
</tr>

<tr>
<th><del>eventRenderWait</del></th>
<td markdown='1'>
Removed. Use [rerenderDelay](rerenderDelay) instead, which waits before rerendering *anything*.
</td>
</tr>

<tr>
<th><a href='progressiveEventRendering'>progressiveEventRendering</a> (new)</th>
<td markdown='1'>
When to render multiple asynchronous event sources in an individual or batched manner. [Issue 1672](https://github.com/fullcalendar/fullcalendar/issues/1672) and [4072](https://github.com/fullcalendar/fullcalendar/issues/4072)
</td>
</tr>

</table>

The following `Calendar` methods have been affected:

<table>

<tr>
<th><del>renderEvent</del></th>
<td markdown='1'>
Renamed to [addEvent](Calendar-addEvent). The `stick` parameter has been removed in favor of a `source` parameter. When this source is fetched going forward, the dynamic event will be removed. Not specifying a source is equivalent to setting `stick` to `true`. **So, by default, events will stick!**
</td>
</tr>

<tr>
<th><del>renderEvents</del></th>
<td markdown='1'>
Removed. Use multiple [addEvent](Calendar-addEvent) calls instead. Group together for performance with [batchRendering](Calendar-batchRendering).
</td>
</tr>

</table>

Visual changes:

In a `timeGrid` view (previously called "<del>agenda view</del>", when an event is all-day, it would previously **only** render in the all-day area at the top. Now, it will render in both the all-day area **and** the time slots. [See this illustration](all-day-bg-event.png).


## Event Clicking & Hovering

The following callbacks have been affected:

<table>

<tr>
<th><a href='eventClick'>eventClick</a></th>
<td markdown='1'>
Where previously received ordered arguments `( event, jsEvent, view )`, will now receive a single object argument `{ event, el, jsEvent, view }`. Now fires for background events. [Issue 2808](https://github.com/fullcalendar/fullcalendar/issues/2808)

You can no longer return `false` to cancel the browser's navigation to the [Event object's](event-object) URL. Instead, use the `jsEvent`:

```js
var calendar = new Calendar(calendarEl, {
  eventClick: function(info) {
    info.jsEvent.preventDefault();
  }
});
```
</td>
</tr>

<tr>
<th><del>eventMouseover</del></th>
<td markdown='1'>
Renamed to [eventMouseEnter](eventMouseEnter). Where previously received ordered arguments `( event, jsEvent, view )`, will now receive a single object argument `{ event, el, jsEvent, view }`. Now fires for background events. [Issue 3005](https://github.com/fullcalendar/fullcalendar/issues/3005)
</td>
</tr>

<tr>
<th><del>eventMouseout</del></th>
<td markdown='1'>
Renamed to [eventMouseLeave](eventMouseLeave). Where previously received ordered arguments `( event, jsEvent, view )`, will now receive a single object argument `{ event, el, jsEvent, view }`. Now fires for background events. [Issue 3005](https://github.com/fullcalendar/fullcalendar/issues/3005)
</td>
</tr>

</table>


## Event Dragging & Resizing

The [interaction plugin is now required](editable#required-plugin) to do event drag-n-drop and resizing:

```js
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin ],
  editable: true
});
```

Other breaking changes:

<table>

<tr>
<th><a href='eventDragStart'>eventDragStart</a></th>
<td markdown='1'>
Where previously received ordered arguments `( event, jsEvent, ui, view )`, now receives a single object `{ event, jsEvent, view }`.
</td>
</tr>

<tr>
<th><a href='eventDragStop'>eventDragStop</a></th>
<td markdown='1'>
Where previously received ordered arguments `( event, jsEvent, ui, view )`, now receives a single object `{ event, jsEvent, view }`.
</td>
</tr>

<tr>
<th><a href='eventDrop'>eventDrop</a></th>
<td markdown='1'>
Previously accepted ordered arguments `( event, delta, revertFunc, jsEvent, ui, view )`. Now accepts an object:

```js
var calendar = new Calendar(calendarEl, {
  eventDrop: function(info) {
    console.log(info.event);
    console.log(info.oldEvent); // data before the drop
    console.log(info.delta); // how far it was moved
    console.log(info.jsEvent);
    console.log(info.newResource); // if using a resource view
    console.log(info.oldResource); // if using a resource view

    if (confirm('revert change?')) {
      info.revert();
    }
  }
})
```

The `delta` property is a [Duration object](duration-object), no longer a Moment Duration. The `oldEvent` property is a new feature that allows you to inspect the event's values prior to the mutation.
</td>
</tr>

<tr>
<th><a href='eventResizeStart'>eventResizeStart</a></th>
<td markdown='1'>
Where previously received ordered arguments `( event, jsEvent, ui, view )`, now receives a single object `{ event, jsEvent, view }`.
</td>
</tr>

<tr>
<th><a href='eventResizeStop'>eventResizeStop</a></th>
<td markdown='1'>
Where previously received ordered arguments `( event, jsEvent, ui, view )`, now receives a single object `{ event, jsEvent, view }`.
</td>
</tr>

<tr>
<th><a href='eventResize'>eventResize</a></th>
<td markdown='1'>
Previously accepted ordered arguments `( event, delta, revertFunc, jsEvent, ui, view )`. Now accepts an object:

```js
var calendar = new Calendar(calendarEl, {
  eventResize: function(info) {
    console.log(info.event);
    console.log(info.prevEvent); // data before the drop
    console.log(info.startDelta); // how far start was moved
    console.log(info.endDelta); // how far end was moved
    console.log(info.jsEvent);

    if (confirm('revert change?')) {
      info.revert();
    }
  }
})
```

The `startDelta` is for resizing from start edge (with `eventResizableFromStart`). `endDelta` is for resizing from ending edge. Both are [Duration objects](duration-object), no longer Moment Durations. The `prevEvent` property is a new feature that allows you to inspect the event's values prior to the mutation. [Issue 4148](https://github.com/fullcalendar/fullcalendar/issues/4148)
</td>
</tr>

<tr>
<th><a href='eventResizableFromStart'>eventResizableFromStart</a> (new)</th>
<td markdown='1'>
Whether the event can be resized from its starting edge. Defaults to `false`. [Issue 374](https://github.com/fullcalendar/fullcalendar/issues/374)
</td>
</tr>

<tr>
<th><a href='eventDragMinDistance'>eventDragMinDistance</a> (new)</th>
<td markdown='1'>
How many pixels the user’s mouse/touch must move before an event drag or resize activates.
</td>
</tr>

<tr>
<th><a href='allDayMaintainDuration'>allDayMaintainDuration</a> (new)</th>
<td markdown='1'>
Determines how an event’s duration should be mutated when it is dragged from a timed section to an all-day section and vice versa. [Issue 2764](https://github.com/fullcalendar/fullcalendar/issues/2764)
</td>
</tr>

<tr>
<th><a href='dragScroll'>dragScroll</a></th>
<td markdown='1'>
Does auto-scrolling not just for event dragging, but also for **event resizing**, **external element dragging**, and **date selecting**. [Issue 242](https://github.com/fullcalendar/fullcalendar/issues/242)
</td>
</tr>

<tr>
<th><del>dragOpacity</del></th>
<td markdown='1'>
Removed. Use the following CSS instead:

```css
.fc-event.fc-dragging:not(.fc-selected) {
  opacity: .75;
}
```

You can tweak this CSS to get different opacity values for different scenarios.
</td>
</tr>

<tr>
<th markdown='1'>
[eventConstraint](eventConstraint)<br>
[EventSource](event-source-object)::constraint<br>
[Event](event-object)::constraint
</th>
<td markdown='1'>
Can no longer specify a single string event ID, but rather a single string `groupId` that will match [Event objects](event-object).

The recurring properties `dow`/`start`/`end` have been renamed to `daysOfWeek`/`startTime`/`endTime`.

Can accept an *array* of objects. Useful if you want to specify multiple date ranges.
</td>
</tr>

</table>


## Dragging External Elements & Events

Version 4 offers the following new features:

<table>

<tr>
<th>no third-party dependencies</th>
<td markdown='1'>
You no longer need jQuery UI to be able to drag elements into a calendar. You can use the built-in `Draggable` API. [More information](external-dragging). [Issue 3902](https://github.com/fullcalendar/fullcalendar/issues/3902)
</td>
</tr>

<tr>
<th>plugins</th>
<td markdown='1'>
If you'd like to use a third-party library for dragging such as [Dragula](https://github.com/bevacqua/dragula), you can use the `ThirdPartyDraggable` API. [More information](third-party-dragging). Will work for any other third party library.
</td>
</tr>

<tr>
<th>dragging between calendars</th>
<td markdown='1'>
It's possible to drag events between two separate Calendar instances. [More information](other-calendar-dragging). [Issue 820](https://github.com/fullcalendar/fullcalendar/issues/820)
</td>
</tr>

</table>

The following existing functionality has been affected:

<table>

<tr>
<th markdown='1'>`data-event-*` attributes</th>
<td markdown='1'>
When [associating event data with an element](external-dragging#associating-event-data), you can no longer specify properties as separate HTML attributes. Instead, bundle them all together under one JSON string in the `data-event` attribute. Or better yet, just use the `Draggable` JS API.
</td>
</tr>

<tr>
<th markdown='1'>`data-event="1"` attribute</th>
<td markdown='1'>
You would previously specify a `data-event="1"` HTML attribute if you wanted to create an event upon drop, but did not have any other event-creation data to specify. This is now unnecessary because event creation happens by default.
</td>
</tr>

<tr>
<th markdown='1'><del>start</del> and <del>time</del> properties</th>
<td markdown='1'>
External events that are dropped on all-day areas can be given a default time. This was previously done with the `time`/`start` properties. The proprty has been rename to `startTime` to be more consistent with naming elsewhere in the API. See [External Event Dragging](external-dragging) for more info.
</td>
</tr>

<tr>
<th>event creation and<br><a href='eventReceive'>eventReceive callback</a></th>
<td markdown='1'>
Event creation upon drop and firing of the [eventReceive](eventReceive) callback will happen by default. To prevent this from happening, specify `{ create: false }` in your event data. [More information](external-dragging#other-draggable-settings).

The [eventReceive](eventReceive) callback previously received a single [Event object](event-object) argument. It now receives an object `{ event, draggedEl, view }`. Also, it will now also be called when an [event from another calendar has been dropped](other-calendar-dragging).
</td>
</tr>

<tr>
<th><a href='drop'>drop callback</a></th>
<td markdown='1'>
Instead of ordered arguments `( date, jsEvent, ui, resourceId )` it will receive a single object `{ draggedEl, date, resource, allDay, jsEvent, view }`. The `date` property is a [Date object](date-object) not a Moment. `allDay` is a boolean. `resource` is a [Resource object](resource-object) if applicable.

If dropped on an all-day slot, the `date` property will always have a `00:00:00` time, regardless of the `startTime` in the event data, whereas previously the `startTime` would have been added.
</td>
</tr>

</table>


## Week Numbers

<table>

<tr>
<th><del>weekNumberTitle</del></th>
<td markdown='1'>
Renamed to [weekLabel](weekLabel). Will now affect week text in date formatting.
</td>
</tr>

</table>


## Event Popover

The following settings related to the [event popover](event-popover) have been affected:

<table>

<tr>
<th><a href='dayPopoverFormat'>dayPopoverFormat</a></th>
<td markdown='1'>
Does not accept date-formatting string by default. Use a [date-formatting object](date-formatting).
</td>
</tr>

<tr>
<th><a href='navLinkDayClick'>navLinkDayClick</a></th>
<td markdown='1'>
When specifying a function, accepts a [Date object](date-object) not a Moment.
</td>
</tr>

</table>


## Business Hours

When [specifying business hours](businessHours), the recurring properties `dow` / `start` / `end` have been renamed to `daysOfWeek` / `startTime` / `endTime`.


## Toolbar

The following settings related to [toolbars](toolbar) (aka, the [header](header) and [footer](footer)) have been affected:

<table>

<tr>
<th><a href='titleFormat'>titleFormat</a></th>
<td markdown='1'>
Does not accept date-formatting string by default. Use a [date-formatting object](date-formatting).
</td>
</tr>

<tr>
<th><a href='titleRangeSeparator'>titleRangeSeparator</a> (new)</th>
<td markdown='1'>
Determines the separator text when formatting the date range in the toolbar title. Default to an elongated dash.
</td>
</tr>

</table>


## Theming

<table>

<tr>
<th><del>theme</del> setting</th>
<td markdown='1'>
This previously-deprecated setting has been removed. Use [themeSystem](themeSystem) instead.
</td>
</tr>

<tr>
<th markdown='1'>`themeSystem` set to `'bootstrap4'`</th>
<td markdown='1'>
Now, simply specify `'bootstrap'`. Also, [initializing a Bootstrap 4 theme requires additional steps](bootstrap-theme).
</td>
</tr>

<tr>
<th>Bootstrap 3 support</th>
<td markdown='1'>
Removed. Consequently, the `bootstrapGlyphicons` option has been removed. Bootstrap 4 support remains however. Going forward, FullCalendar will only support the newest officially released version of Boostrap.
</td>
</tr>

<tr>
<th>jQuery UI theme support</th>
<td markdown='1'>
Removed. Consequently, the `themeButtonIcons` option has been removed.
</td>
</tr>

</table>


## Month View

The `MonthView` class is no longer exposed. Internally, the functionality has been rolled into `DayGridView`, which **is** exposed.


## Agenda View

As mentioned above, the "<del>agenda views</del>" have been renamed to the `timeGrid` views. The following settings have been affected:

<table>

<tr>
<th><del>agendaEventMinHeight</del></th>
<td markdown='1'>
Renamed to [timeGridEventMinHeight](timeGridEventMinHeight)
</td>
</tr>

<tr>
<th><del>AgendaView</del> class</th>
<td markdown='1'>
Renamed to `TimeGridView`. Use this for programmatically extending functionality via a subclass.
</td>
</tr>

</table>


## List View

The following settings related to [List View](list-view) have been affected:

<table>

<tr>
<th><a href='listDayFormat'>listDayFormat</a></th>
<td markdown='1'>
Does not accept date-formatting string by default. Use a [date-formatting object](date-formatting).
</td>
</tr>

<tr>
<th><a href='listDayAltFormat'>listDayAltFormat</a></th>
<td markdown='1'>
Does not accept date-formatting string by default. Use a [date-formatting object](date-formatting).
</td>
</tr>

</table>


## Timeline View

Breaking changes:

<table>

<tr>
<th><a href='resourceColumns'>resourceColumns</a></th>
<td markdown='1'>
The `render` function's first argument is **always** a [Resource object](resource-object). Previously, it would vary depending on whether there was a `field` specified or not.
</td>
</tr>

<tr>
<th>User-resizable columns and resource-area</th>
<td markdown='1'>
The user is able to resize the [resourceAreaWidth](resourceAreaWidth) as well as the columns created by [resourceColumns](resourceColumns). Previously it "just worked," but <strong>now you'll need to load the [interaction plugin](editable#required-plugin)</strong>.
</td>
</tr>

</table>


## Vertical Resource View

Previously, the <del>groupByResource</del> and <del>groupByDateAndResource</del> settings would do two things. They would "active" a vertical resource view (as opposed to rendering the non-resource version of the view) as well as control the headers at the top of the view.

Now, explicitly specifying a resource view such as `resourceTimeGridDay` is how you "active" a vertical resource. Additionally, these two settings have been collapsed into one:

```js
datesAboveResources: false // the default. instead of groupByResource:true
datesAboveResources: true // instead of groupByDateAndResource:true
```


## Resource Fetching

A [resource-fetching function](resources-function) **previously** accepted the following arguments:

```js
function( callback, startMoment, endMoment, timeZone )
```

**Now**, it acceps the following arguments:

```js
function( fetchInfo, successCallback, failureCallback )
```

It must call `successCallback`, `failureCallback`, or return a Promise. `fetchInfo` is an object that contains the date-related properties. [See the full article](resources-function).

**Other resource-fetching changes:**

The following `Calendar` triggers have been affected:

<table>

<tr>
<th><del>resourcesSet</del></th>
<td markdown='1'>
Removed. Was never officially supported.
</td>
</tr>

</table>


## Resource Model

Previously, resource objects would be specified as plain objects, and then when accessing those same events in other parts of the API, they would be slightly-massaged versions of the same plain objects. Now, you still specify plain objects, but when you retrieve them in other parts of the API, they are **instances of the Resource class** with methods for manipulation.

The following properties are now accepted in the raw object:

<table>

<tr>
<th>eventOverlap</th>
<td>
The <a href='eventOverlap'>eventOverlap</a> setting for associated events. Does not accept a function.
</td>
</tr>

<tr>
<th>eventConstraint</th>
<td>
The <a href='eventConstraint'>eventConstraint</a> setting for associated events.
</td>
</tr>

<tr>
<th>eventAllow</th>
<td>
The <a href='eventAllow'>eventAllow</a> setting for associated events.
</td>
</tr>

</table>

The plain object will eventually be parsed into a proper [Resource object](resource-object), which has a number of differences from v3:

<table>

<tr>
<th markdown='1'><del>parent</del></th>
<td markdown='1'>
Removed. Use [getParent](Resource-getParent) instead.
</td>
</tr>

<tr>
<th markdown='1'><del>children</del></th>
<td markdown='1'>
Removed. Use [getChildren](Resource-getChildren) instead.
</td>
</tr>

<tr>
<th markdown='1'>`extendedProps`</th>
<td markdown='1'>
Where all non-standard properties are stored. Previously, non-standard properties would be stored in the top-level object.
</td>
</tr>

</table>

The following resource-related methods/properties in the `Calendar` object have been affected:

<table>

<tr>
<th markdown='1'><del>eventResourceField</del></th>
<td markdown='1'>
Removed. Use [eventDataTransform](eventDataTransform) instead.
</td>
</tr>

<tr>
<th markdown='1'>[addResource](addResource)</th>
<td markdown='1'>
The `scrollTo` argument is now `true` by default.
</td>
</tr>

<tr>
<th markdown='1'>[getResources](getResources)</th>
<td markdown='1'>
Now retrieves *all* resources, including nested child resources, in one flat array.
</td>
</tr>

<tr>
<th markdown='1'>[getTopLevelResources](getTopLevelResources) (new)</th>
<td markdown='1'>
Retrieves only top-level resource (resources that don't have a specified parent).
</td>
</tr>

<tr>
<th markdown='1'><del>getResourceEvents</del></th>
<td markdown='1'>
Removed. Use the `Resource` [getEvents](Resource-getEvents) method instead.
</td>
</tr>

<tr>
<th markdown='1'><del>removeResource</del></th>
<td markdown='1'>
Removed. Use the `Resource` [remove](Resource-remove) method instead.
</td>
</tr>

</table>


## Resource Rendering

<table>

<tr>
<th markdown='1'>[resourceRender](resourceRender) trigger</th>
<td markdown='1'>
Used to accept ordered arguments `( resourceObj, labelTds, bodyTds )`. Now accepts a single `renderInfo` object. The `labelTds` elements are now present in the `renderInfo.el` property as a single `<td>` element. If multiple elements are available for a single resource, `resourceRender` will be fired multiple times.

There is currently no way to retrieve the element(s) that were previously available in `bodyTds`. [Issue 481](https://github.com/fullcalendar/fullcalendar-scheduler/issues/481)
</td>
</tr>

<tr>
<th markdown='1'>[rerenderResources](rerenderResources) method</th>
<td markdown='1'>
Previously rerendered all resources **AND** events. Now only renders the areas of the view where explicit resource data is displayed, such as the left cells in [Timeline View](timeline-view) and the top header in [Vertical Resource View](vertical-resource-view).
</td>
</tr>

</table>


## Versioning Scheme

Previously, the Core package was at version `3.x.x` and the Scheduler package was at `1.x.x`. There was no rhyme or reason as to which versions were compatible.

Now, all of v4's plugins will be at `4.x.x` including Scheduler functionality. All plugins with the same minor version (like `4.1.x`) are implied to be compatible.


## Package Managers

Support for NPM (and Yarn) is strong, but here's what happened to support for other package managers:

<table>

<tr>
<th>Bower</th>
<td markdown='1'>
Support has been dropped.
</td>
</tr>

<tr>
<th>Composer</th>
<td markdown='1'>
Support has been dropped. [More info](https://github.com/fullcalendar/fullcalendar/issues/4489).
</td>
</tr>

</table>
