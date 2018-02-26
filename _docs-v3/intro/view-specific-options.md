---
title: View-Specific Options
excerpt_separator: <!--more-->
---

You can specify options that apply only to *specific* calendar views.<!--more--> Provide separate options objects within the `views` option, keyed by the name of your view.

```js
$('#calendar').fullCalendar({
  header: { center: 'month,agendaWeek' }, // buttons for switching between views

  views: {
    month: { // name of view
      titleFormat: 'YYYY, MM, DD'
      // other view-specific options here
    }
  }
});
```

You may also specify options that apply to certain types of views:

```js
$('#calendar').fullCalendar({
  views: {
    basic: {
      // options apply to basicWeek and basicDay views
    },
    agenda: {
      // options apply to agendaWeek and agendaDay views
    },
    week: {
      // options apply to basicWeek and agendaWeek views
    },
    day: {
      // options apply to basicDay and agendaDay views
    }
  }
});
```

If an option is not matched by a View-Specific Option, the option value is taken from the top-level options object (whatever you passed in to `$('#calendar').fullCalendar({ })`).


## Legacy

Prior to version 2.2.4, View-Specific Options were not available. Use the now-deprecated [View Option Hashes](view-option-hash) instead.
