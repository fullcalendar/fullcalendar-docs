---
title: Initializing with Options
description: How to initialize your first calendar with options.
---

Once you have FullCalendar and its dependencies [loaded onto the page](installation), you can write JS code that initializes a calendar. This code must be executed *after* the page has initialized. The best way to do this is with [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) like so:

```js
document.addEventListener('DOMContentLoaded', function() {

  // page is now ready, initialize the calendar...

  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    // put your options and callbacks here
  });

  calendar.render();

});
```

The above code should be in a `<script>` tag in the head of your page. The code
relies on there being an element with an id of "calendar" in the body of your page.
The calendar will be placed *inside* this div:

```html
<div id='calendar'></div>
```

An that's it, you should see a month-based calendar that has no events on it. If you want to learn how to display events, visit the [Google Calendar](google-calendar) or [Event Parsing](event-parsing) sections.


## Options

Most of FullCalendar's documentation describes options that affect the look or behavior of the calendar. Options are usually set when the calendar is initialized, like so:

```js
var calendar = new Calendar({
  weekends: false // will hide Saturdays and Sundays
});
```

An important option is [defaultView](defaultView), which determines which calendar view is first displayed upon loading your calendar. For a list of all available views, see the "Views" section of the [main docs page]({{ site.baseurl }}{{ page.version.url }}).
