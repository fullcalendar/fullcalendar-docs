import { Calendar, requestJson } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import Demo from './Demo'

const INITIAL_TIME_ZONE = 'Europe/Luxembourg'

export default class extends Demo {

  title = 'Time Zones'
  controlHtml = `
    <p>
      <label for='time-zone-select'>
        Select a different time zone:
      </label>
    </p>
    <p>
      <select>
        <option value='UTC'>UTC</option>
      </select>
    </p>
    <p><a href='/docs/timeZone' class='more-link'>More info</a></p>
  `
  // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    let timeZoneSelectorEl = controlEl.querySelector('select')
    // let loadingEl = document.createElement('div') // TODO: make part of the UI!!!

    let calendar = new Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      initialView: 'timeGridWeek',
      timeZone: INITIAL_TIME_ZONE,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      selectable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: '/api/demo-feeds/events.json',
      loading: function(bool) {
        // if (bool) {
        //   loadingEl.style.display = 'inline' // show
        // } else {
        //   loadingEl.style.display = 'none' // hide
        // }
      },
      eventTimeFormat: { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }
    })

    // load the list of available timezones, build the <select> options
    // it's highly encouraged to use your own AJAX lib instead of using FullCalendar's internal util
    requestJson('GET', '/api/demo-feeds/timezones.json', {}, function(timeZones) {
      timeZones.forEach(function(timeZone) {
        if (timeZone !== 'UTC') { // UTC is already in the list
          let optionEl = document.createElement('option')
          optionEl.value = timeZone
          optionEl.innerText = timeZone
          timeZoneSelectorEl.appendChild(optionEl)
          timeZoneSelectorEl.value = INITIAL_TIME_ZONE
        }
      })
    }, function() {
      // failure
    })

    // when the timezone selector changes, dynamically change the calendar option
    timeZoneSelectorEl.addEventListener('change', function() {
      calendar.setOption('timeZone', this.value)
    });

    return calendar
  }

}
