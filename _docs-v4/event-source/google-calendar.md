---
title: events from Google Calendar
excerpt_separator: <!--more-->
---

FullCalendar can display events from a public [Google Calendar](http://calendar.google.com/).<!--more--> Google Calendar can serve as a backend that manages and persistently stores event data (a feature that FullCalendar currently lacks).

## Before you code...

**You must first have a Google Calendar API Key**:

1. Go to the [Google Developer Console](https://console.developers.google.com/) and create a new project (it might take a second).
2. Once in the project, go to **APIs & auth > APIs** on the sidebar.
3. Find "Calendar API" in the list and turn it ON.
4. On the sidebar, click **APIs & auth > Credentials**.
5. In the "Public API access" section, click "Create new Key".
6. Choose "Browser key".
7. If you know what domains will host your calendar, enter them into the box. Otherwise, leave it blank. You can always change it later.
8. Your new API key will appear. It might take second or two before it starts working.

**Make your Google Calendar public:**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Share this Calendar".
4. Check "Make this calendar public".
5. Make sure "Share only my free/busy information" is **unchecked**.
6. Click "Save".

**Obtain your Google Calendar's ID:**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Calendar settings".
4. In the "Calendar Address" section of the screen, you will see your Calendar ID. It will look something like "abcd1234@group.calendar.google.com".

## Dependencies

Next, you must have all the required js/css files. This includes the standard fullcalendar.js and fullcalendar.css, **in addition to gcal.js**:

```html
<script type='text/javascript' src='fullcalendar/gcal.js'></script>
```

## Writing the code

Now it's time to initialize your calendar in JavaScript. This is the most minimal example:

```html
<script type='text/javascript'>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: '<YOUR API KEY>',
      events: {
        googleCalendarId: 'abcd1234@group.calendar.google.com'
      }
    });

    calendar.render();
  });

</script>
```

If you want to specify some [Event Source](event-source-object) options, you can include them in the `events` object:

```html
<script type='text/javascript'>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: '<YOUR API KEY>',
      events: {
        googleCalendarId: 'abcd1234@group.calendar.google.com',
        className: 'gcal-event' // an option!
      }
    });

    calendar.render();
  });

</script>
```

[View a demo](google-calendar-demo) that displays US holidays from Google Calendar.


## Multiple Google Calendars

You can specify multiple Google Calendars by using the `eventSources` option:

```html
<script type='text/javascript'>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: '<YOUR API KEY>',
      eventSources: [
        {
          googleCalendarId: 'abcd1234@group.calendar.google.com'
        },
        {
          googleCalendarId: 'efgh5678@group.calendar.google.com',
          className: 'nice-event'
        }
      ]
    });

    calendar.render();
  });

</script>
```

## Advanced

If you need different API keys per calendar, you can set a `googleCalendarApiKey` option on each individual [Event Source](event-source-object) when written in extended form.

For detecting errors, use the [Event Source Object's](event-source-object) `failure` callback.
