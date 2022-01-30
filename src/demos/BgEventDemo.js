import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Demo from './Demo'

export default class extends Demo {

  title = 'Background Events'
  controlHtml = `
    <p>
      Display <a href='/docs/background-events'>background events</a>.
    </p>
    <p>
      Also, control where events are
      <a href='/docs/eventOverlap'>allowed to go</a>
      (the <span style='color:#83ef70'>green areas</span> are prohibited).
    </p>
  `
  // TODO: BASE_URL in the hrefs

  init(controlEl, contentEl, calendarEl) {
    let ym = new Date().toISOString().match(/^\d\d\d\d-\d\d/)[0]

    return new Calendar(calendarEl, {
      plugins: [ interactionPlugin, timeGridPlugin, dayGridPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      initialView: 'dayGridMonth',
      initialDate: ym + '-12',
      businessHours: true, // display business hours
      editable: true,
      events: [
        {
          title: 'Meeting',
          start: ym + '-03T16:00:00',
          constraint: 'businessHours'
        },
        {
          title: 'Meeting',
          start: ym + '-16T09:00:00'
        },
        {
          title: 'Conference Call',
          start: ym + '-20T08:00:00'
        },
        {
          title: 'Party',
          start: ym + '-29T20:00:00'
        },

        // BG events

        {
          start: ym + '-24',
          end: ym + '-28',
          overlap: false,
          display: 'background'
        },
        {
          start: ym + '-06',
          end: ym + '-08',
          overlap: false,
          display: 'background'
        },
        {
          daysOfWeek: [ 3, 4 ],
          startTime: '10:00',
          endTime: '16:00',
          overlap: false,
          display: 'background'
        }
      ]
    })
  }

}
