import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import Demo from './Demo'

export default class extends Demo {

  title = 'Year Views'
  controlHtml = `
    <p>
      Display an entire year
      <a href='/docs/scrolling-view' class='more-link'>Learn more</a>
    </p>
  ` // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    return new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, multiMonthPlugin],
      timeZone: 'UTC',
      initialView: 'multiMonthYearGrid',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'multiMonthYearGrid,multiMonthYearStack,dayGridYear'
      },
      views: {
        multiMonthYearGrid: {
          type: 'multiMonthYear',
          buttonText: 'Grid'
        },
        multiMonthYearStack: {
          type: 'multiMonthYear',
          buttonText: 'Stack',
          multiMonthMaxColumns: 1
        },
        dayGridYear: {
          buttonText: 'Continuous'
        }
      },
      editable: true,
      events: '/api/demo-feeds/events.json'
    })
  }

}
