import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import Demo from './Demo'

export default class extends Demo {

  title = 'Drag-n-Drop Events'
  controlHtml = `
    <p>Drag these onto the calendar:</p>
    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 1</div>
    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 2</div>
    <p><a href='/docs/external-dragging' class='more-link'>More info</a></p>
  `
  // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {

    let draggable = new Draggable(controlEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim()
        }
      }
    });

    let calendar = new Calendar(calendarEl, {
      timeZone: 'UTC',
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: '/demo-events.json?overload-day' // TODO: use BASE_URL somehow
    })

    calendar.render()

    this.draggable = draggable
    this.calendar = calendar
  }

  destroy() {
    this.draggable.destroy()
    this.calendar.destroy()
  }

}
