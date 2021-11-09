import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { loadThemeStylesheets } from './theme-stylesheets'

let calendar

export function renderCalendarTheme(themeSystemName, themeName, renderedCallback) {
  loadThemeStylesheets({
    themeSystemName,
    themeName,
    callback() {
      if (calendar) {
        calendar.setOption('themeSystem', themeSystemName)
      } else {
        calendar = initCalendar()
        calendar.render()
      }

      if (renderedCallback) {
        renderedCallback()
      }
    }
  })
}

function initCalendar() {
  let calendarEl = document.getElementById('calendar')

  // NOTE: don't do drag-n-drop because it's in an iframe
  return new Calendar(calendarEl, {
    timeZone: 'UTC',
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    navLinks: true, // can click day/week names to navigate views
    dayMaxEvents: true, // allow "more" link when too many events
    events: '/demo-events.json?overload-day' // TODO: use BASE_URL somehow
  })
}
