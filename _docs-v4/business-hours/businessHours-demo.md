---
title: Business-hours on agendaWeek view
layout: demo-v3
---
<script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      defaultView: 'agendaWeek',
      businessHours: true
    });

    calendar.render();
  });

</script>
