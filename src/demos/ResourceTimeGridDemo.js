import { Calendar } from '@fullcalendar/core'
import resourceTimeGrid from '@fullcalendar/resource-timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Demo from './Demo'

export default class extends Demo {

  title = 'Resource Time Grid'
  controlHtml = `
    <span class='badge'>Premium</span>
    <p>
      Display resources as columns.
      <a href='/docs/vertical-resource-view' class='more-link'>Learn more</a>
    </p>
  ` // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    return new Calendar(calendarEl, {
      plugins: [ interactionPlugin, resourceTimeGrid ],
      timeZone: 'UTC',
      initialView: 'resourceTimeGridDay',
      resources: [
        { id: 'a', title: 'Room A' },
        { id: 'b', title: 'Room B'},
        { id: 'c', title: 'Room C' },
        { id: 'd', title: 'Room D' }
      ],
      editable: true,
      events: '/api/demo-feeds/events.json?with-resources=4&single-day'
    })
  }

}
