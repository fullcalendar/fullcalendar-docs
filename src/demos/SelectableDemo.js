import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Demo from './Demo'

export default class extends Demo {

  title = 'Selectable Dates'
  controlHtml = `
    <p>
      Click and drag your pointer over some dates.
      You will be asked to create an event via the API.
      <a href='/docs/date-clicking-selecting' class='more-link'>Learn more</a>
    </p>
  `
  // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    let calendar = new Calendar(calendarEl, {
      timeZone: 'UTC',
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      navLinks: true, // can click day/week names to navigate views
      dayMaxEvents: true, // allow "more" link when too many events
      editable: true,
      selectable: true,
      selectMirror: true,
      select(arg) {
        let title = prompt(
          'Create an event from ' + arg.startStr + ' to ' + arg.endStr + ' (excl).\n' +
          'Enter a title:'
        )

        if (title || arg.view.type.match(/^timeGrid/)) { // kill the mirror
          calendar.unselect()
        }

        if (title) {
          calendar.addEvent({
            title,
            start: arg.start,
            end: arg.end
          })
        }
      }
    })

    return calendar
  }

}
