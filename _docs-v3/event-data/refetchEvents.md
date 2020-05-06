---
title: refetchEvents
type: method
---

Refetches events from all sources and rerenders them on the screen.

<div class='spec' markdown='1'>
.fullCalendar( 'refetchEvents' )
</div>

Note: First set the calendar object to a variable then call this function. Make that global if you will use it inside an ajax result callback. As an example:

<div class='spec' markdown='1'>
  var thisCalendar = $('#divContainsCalendar').fullCalendar({ events:[] });
  thisCalendar.fullCalendar('refetchEvents');
</div>
