---
title: customButtons
since_version: 2.4.0
---

Defines custom buttons that can be used in the header/footer.

<div class='spec' markdown='1'>
Object
</div>

Specify a hash of custom buttons. Then reference them from the `header` setting. Like this:

```js
$('#calendar').fullCalendar({
  customButtons: {
    myCustomButton: {
      text: 'custom!',
      click: function() {
        alert('clicked the custom button!');
      }
    }
  },
  header: {
    left: 'prev,next today myCustomButton',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  }
});
```

Each `customButton` entry accepts the following properties:

- `text` - the text to be display on the button itself
- `click` - a callback function that is called when the button is clicked. Accepts a single argument, a [jqueryEvent](https://api.jquery.com/category/events/event-object/).
- `icon` - see [buttonIcons](buttonIcons). optional
- `themeIcon` - see [themeButtonIcons](themeButtonIcons). optional
- `bootstrapGlyphicon` - see [bootstrapGlyphicons](bootstrapGlyphicons). optional

[See an demo of customButtons](toolbar-demo).
