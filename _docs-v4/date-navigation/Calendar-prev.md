---
title: Calendar::prev
type: method
---

Moves the calendar one step back (by a month or week for example).

<div class='spec' markdown='1'>
calendar.prev()
</div>

If the calendar is in `month` view, will move the calendar back one month.

If the calendar is in `basicWeek` or `agendaWeek`, will move the calendar back one week.

If the calendar is in `basicDay` or `agendaDay`, will move the calendar back one day.

Example using `prev` with an external button:

```js
$('#my-prev-button').click(function() {
  calendar.prev();
});
```

[View a demo](date-api-buttons-demo) that uses the prev and next methods.
