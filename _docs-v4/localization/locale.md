---
title: locale
---

Customize the language and localization options for the calendar.

<div class='spec' markdown='1'>
A String locale code. *default*: `"en"`
</div>

This option affects many things such as:

- the text in buttons, as defined by [header](header)
- text that contains month or day-of-week strings
- date formatting, such as [eventTimeFormat](eventTimeFormat)
- [weekNumberCalculation](weekNumberCalculation)
- [firstDay](firstDay)


## How to use other locales

You will need to load the locale JavaScript data file in order to use it.
These files are included with the FullCalendar download in the `locale/` directory.
They must be loaded via a `<script>` tag after the main FullCalendar library is loaded.

    <script src='fullcalendar/fullcalendar.js'></script>

```html
<script src='fullcalendar/locale/es.js'></script>
<script>

  $(function() {

    $('#calendar').fullCalendar({
    });

  });

</script>
```

If you are simply loading one locale, you do *not* need to specify the `locale` option. FullCalendar will look at the most recent locale file loaded and use it.

However, if more than one locale file is loaded, or the combined `locale-all.js` file is loaded, you must explicitly specify which locale to use via the `locale` option:

```html
<script src='fullcalendar/fullcalendar.js'></script>
<script src='fullcalendar/locale-all.js'></script>
<script>

  $(function() {

    $('#calendar').fullCalendar({
      locale: 'es'
    });

  });

</script>
```

For more information, [view a live demo](locale-demo).
