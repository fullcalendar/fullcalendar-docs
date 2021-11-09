import { Calendar } from '@fullcalendar/core'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import Demo from './Demo'

export default class extends Demo {

  title = 'Resource Timeline'
  controlHtml = `
    <span class='badge'>Premium</span>
    <p>
      Display resources as rows.
      The exact time interval is configurable.
      <a href='/docs/timeline-view' class='more-link'>Learn more</a>
    </p>
  ` // TODO: BASE_URL in href

  init(controlEl, contentEl, calendarEl) {
    return new Calendar(calendarEl, {
      plugins: [ interactionPlugin, resourceTimelinePlugin ],
      timeZone: 'UTC',
      initialView: 'resourceTimelineDay',
      aspectRatio: 1.5,
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
      },
      editable: true,
      resourceLabelText: 'Rooms',
      resources: '/api/demo-feeds/resources.json?with-nesting&with-colors', // TODO: use BASE_URL
      events: '/api/demo-feeds/events.json?single-day&for-resource-timeline' // TODO: use BASE_URL
    })
  }

}
