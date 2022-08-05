---
title: Calendar::render
---

Initially render the calendar, or rerender it after initialization.

<div class='spec' markdown='1'>
calendar.render()
</div>

You can initialize a calendar with an [ES6 Build System](initialize-es6) or [Script Tags](initialize-globals):

```js
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ]
  });

  calendar.render();
});
```

You can also use the render method to rerender a calendar *after* initialization. Once you have the `calendar` reference, simply call it again:

```js
calendar.render(); // rerender!
```

Normally you won't need to do this. The calendar's internal state will stay consistent with its rendering. But if you do need to rerender the calendar because you depend on side effects, use this method. This method will not completely wipe the DOM clean and rebuild. It will use its internal virtual DOM representation to only commit needed changes.


If you simply need to readjust the calendar's size, see [updateSize](updateSize).
