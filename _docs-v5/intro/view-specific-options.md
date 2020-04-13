---
title: View-Specific Options
excerpt_separator: <!--more-->
---

You can specify options that apply only to *specific* calendar views.<!--more--> Provide separate options objects within the `views` option, keyed by the name of your view.

```js
var calendar = new Calendar(calendarEl, {
  headerToolbar: { center: 'dayGridMonth,timeGridWeek' }, // buttons for switching between views

  views: {
    dayGridMonth: { // name of view
      titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
      // other view-specific options here
    }
  }
});
```

You may also specify options that apply to certain types of views:

```js
var calendar = new Calendar(calendarEl, {
  views: {
    dayGrid: {
      // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
    },
    timeGrid: {
      // options apply to timeGridWeek and timeGridDay views
    },
    week: {
      // options apply to dayGridWeek and timeGridWeek views
    },
    day: {
      // options apply to dayGridDay and timeGridDay views
    }
  }
});
```

If an option is not matched by a View-Specific Option, the option value is taken from the top-level options object (whatever you passed in to `new Calendar`).
