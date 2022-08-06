---
title: headerToolbar
---

Defines the buttons and title at the top of the calendar.

<div class='spec' markdown='1'>
Object/`false`, *default:*

```js
{
  left: 'title', // will normally be on the left. if RTL, will be on the right
  center: '',
  right: 'today prev,next' // will normally be on the right. if RTL, will be on the left
}
```
</div>

Setting the headerToolbar options to `false` will display no header toolbar. An object can be supplied with properties `start/center/end` or `left/center/right`. These properties contain strings with comma/space separated values. Values separated by a comma will be displayed adjacently. Values separated by a space will be displayed with a small gap in between. Strings can contain any of the following values:

`title`
:   text containing the current month/week/day

`prev`
:   button for moving the calendar back one month/week/day

`next`
:   button for moving the calendar forward one month/week/day

`prevYear`
:   button for moving the calendar back on year

`nextYear`
:   button for moving the calendar forward one year

`today`
:   button for moving the calendar to the current month/week/day

*a view name*, like `dayGridMonth`
:   button that will switch the calendar to any of the available views


Specifying an empty string for a property will cause it display no text/buttons.
