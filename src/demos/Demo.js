import { Calendar } from '@fullcalendar/core'

export default class Demo {

  title = ''
  controlHtml = ''
  contentHtml = '<div class="demo-calendar"></div>'
  // calendar

  initSafely(controlEl, contentEl, calendarEl) {
    let calendar = this.init(controlEl, contentEl, calendarEl)

    if (calendar instanceof Calendar) {
      calendar.render()
      this.calendar = calendar
    }
  }

  init(controlEl, contentEl, calendarEl) {
    // subclasses should implement
  }

  destroy() {
    if (this.calendar) {
      this.calendar.destroy()
      this.calendar = null // cleanup for next time
    }
  }

}
