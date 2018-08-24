---
title: events from Google Calendar
excerpt_separator: <!--more-->
---

FullCalendar can display events from a public [Google Calendar](http://calendar.google.com/).<!--more--> Google Calendar can serve as a backend that manages and persistently stores event data (a feature that FullCalendar currently lacks).

<div class='warning'>
On Nov 17th 2014, Google shut down V1 and V2 of their Calendar APIs, which FullCalendar relied upon.
Please upgrade to the latest version of FullCalendar or at least replace <code>gcal.js</code> with
<strong><a href='https://github.com/fullcalendar/fullcalendar/blob/v3.7.0/dist/gcal.js'>this file</a></strong>
(will work down to FullCalendar v2.0.0).
Also, your own Google Calendar API key is now required.
</div>

## Before you code...

**You must first have a Google Calendar API Key**:

1. Go to the [Google Developer Console](https://console.developers.google.com/) and create a new project (it might take a second).
2. Once in the project, click on **Library** in the APIs & Services sidebar and search for "Google Calendar API". Click **ENABLE**.
3. Click on **Credentials** in the APIs & Services sidebar to open the credentials menu.
4. Under the **Credentials** tab, click on **Create Credentials**.
5. Select **API key** in the dropdown menu to generate an API key.
6. Your new API key will appear. It might take second or two before it starts working.

**Make your Google Calendar public:**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the 3 dots menu button.
3. A pop-up menu will appear. Click **Settings and sharing**.
4. Check "Make available to public".
5. Make sure "See all event details" is selected.

**Obtain your Google Calendar's ID:**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the 3 dots menu button.
3. A menu will appear. Click "Calendar settings".
4. In the "Integrate calendar" section of the screen, you will see your Calendar ID. It will look something like "abcd1234@group.calendar.google.com".

## Dependencies

Next, you must have all the required js/css files. This includes the standard fullcalendar.js and fullcalendar.css, **in addition to gcal.js**:

```html
<script type='text/javascript' src='fullcalendar/gcal.js'></script>
```

## Writing the code

Now it's time to initialize your calendar in JavaScript. This is the most minimal example:

```html
<script type='text/javascript'>

new Calendar({
    googleCalendarApiKey: '<YOUR API KEY>',
    events: {
      googleCalendarId: 'abcd1234@group.calendar.google.com'
    }
  });

</script>
```

If you want to specify some [Event Source](event-source-object) options, you can include them in the `events` object:

```html
<script type='text/javascript'>

new Calendar({
    googleCalendarApiKey: '<YOUR API KEY>',
    events: {
      googleCalendarId: 'abcd1234@group.calendar.google.com',
      className: 'gcal-event' // an option!
    }
  });

</script>
```

[View a demo](google-calendar-demo) that displays US holidays from Google Calendar.


## Timezones

The Google Calendar plugin respects the [timezone](timezone) parameter. If it is `false` (the default), the timezone setting of the Google Calendar will be used, as defined in Google's UI. If it is specified, this will be ignored and the timezone will be forced.

## Multiple Google Calendars

You can specify multiple Google Calendars by using the `eventSources` option:

```html
<script type='text/javascript'>

new Calendar({
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

</script>
```

## Advanced

If you need different API keys per calendar, you can set a `googleCalendarApiKey` option on each individual [Event Source](event-source-object) when written in extended form.

If you need to detect errors with the Google API, there's no way to get at this with jQuery's AJAX error handler. You'll need to use the FullCalendar's `googleCalendarError` callback, which is available as a normal option, or a per-[Event Source](event-source-object) option.
