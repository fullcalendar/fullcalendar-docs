---
title: next
type: method
---

Moves the calendar one step forward (by a month or week for example).

<div class='spec' markdown='1'>
.next()
</div>

If the calendar is in `month` view, will move the calendar forward one month.

If the calendar is in `basicWeek` or `agendaWeek`, will move the calendar forward one week.

If the calendar is in `basicDay` or `agendaDay`, will move the calendar forward one day.

Example using `next` with an external button:

```js
$('#my-next-button').click(function() {
  calendar.next();
});
```

[View a demo](date-api-buttons-demo) that uses the prev and next methods.
