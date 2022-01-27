import { Calendar } from '@fullcalendar/core'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import Demo from './Demo'

const INITIAL_LOCALE = 'bg'

export default class extends Demo {

  title = 'Locales'
  controlHtml = `
    <p>
      <label for='locale-select'>
        Select a new locale:
      </lable>
    </p>
    <p><select id='locale-select'></select></p>
    <p><a href='/docs/localization' class='more-link'>More info</a></p>
  `
  // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    let localeSelectorEl = controlEl.querySelector('select')

    let calendar = new Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      locales: allLocales,
      locale: INITIAL_LOCALE,
      buttonIcons: false, // show the prev/next text
      weekNumbers: true,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: '/api/demo-feeds/events.json?overload-day'
    })

    // build the locale selector's options
    calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
      let optionEl = document.createElement('option')
      optionEl.value = localeCode
      optionEl.selected = localeCode == INITIAL_LOCALE
      optionEl.innerText = localeCode
      localeSelectorEl.appendChild(optionEl)
    })

    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener('change', function() {
      if (this.value) {
        calendar.setOption('locale', this.value)
      }
    })

    return calendar
  }

}
