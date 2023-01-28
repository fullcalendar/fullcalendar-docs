import { Accordion } from 'accordion'
import 'accordion/src/accordion.css'
import './styles/demos.scss'
import { htmlEscape, querySelectorAll } from './lib/util'
import DragAndDropDemo from './demos/DragAndDropDemo'
import SelectableDemo from './demos/SelectableDemo'
import BgEventDemo from './demos/BgEventDemo'
import ThemingDemo from './demos/ThemingDemo'
import TimeZoneDemo from './demos/TimeZoneDemo'
import LocaleDemo from './demos/LocaleDemo'
import ResourceTimelineDemo from './demos/ResourceTimelineDemo'
import ResourceTimeGridDemo from './demos/ResourceTimeGridDemo'
import YearDemo from './demos/YearDemo'
import { renderCalendarTheme } from './lib/calendar-theme-render'

const EXPAND_FIRST_PANEL = true
const DEMO_CLASSES = [
  DragAndDropDemo,
  ResourceTimelineDemo,
  ResourceTimeGridDemo,
  YearDemo,
  SelectableDemo,
  BgEventDemo,
  ThemingDemo,
  LocaleDemo,
  TimeZoneDemo
]


/*
The "main" execution changes based on the presence of a global flag.
This allows us to bundle multiple related bundles together.
*/
if (window.isCalendarThemeRender) {
  window.renderCalendarTheme = renderCalendarTheme // expose global util
} else {
  document.addEventListener('DOMContentLoaded', function () {
    let accordionEl = document.getElementById('demo-accordion')
    let contentEl = document.getElementById('demo-content')

    new DemoRunner(accordionEl, contentEl)

    // hack
    document.getElementById('demos-nav-item').classList.add('topbar__nav-item--selected')
  })
}


class DemoRunner {

  /*
  accordionEl
  contentEl
  demos
  demoIndex
  panelEls
  */

  constructor(accordionEl, contentEl) {
    this.accordionEl = accordionEl
    this.contentEl = contentEl
    this.demos = DEMO_CLASSES.map(demoClass => new demoClass())
    this.renderAccordion()
  }

  runDemo(n) {
    if (n !== this.demoIndex) {

      if (this.demoIndex != null) {
        this.destroyDemo(this.demoIndex)
      }

      this.demoIndex = n
      this.initDemo(n)
    }
  }

  initDemo(n) {
    let demo = this.demos[n]
    let panelEl = this.panelEls[n]
    let controlEl = panelEl.querySelector('.accordion__panel-content')
    let { contentEl } = this

    contentEl.innerHTML = demo.contentHtml
    let calendarEl = contentEl.querySelector('.demo-calendar')

    demo.initSafely(controlEl, contentEl, calendarEl)
  }

  destroyDemo(n) {
    let demo = this.demos[n]
    let panelEl = this.panelEls[n]
    let controlEl = panelEl.querySelector('.accordion__panel-content')

    demo.destroy()

    controlEl.innerHTML = demo.controlHtml // fresh controls for next time
  }

  renderAccordion() {
    let { accordionEl } = this

    accordionEl.innerHTML = this.renderAccordionHtml()
    this.panelEls = querySelectorAll('.accordion__panel', accordionEl)

    accordionEl.classList.add('snap')

    if (EXPAND_FIRST_PANEL) {
      this.panelEls[0].classList.add('accordion__panel--open')
    }

    new Accordion(accordionEl, {
      openClass: 'accordion__panel--open',
      closeClass: 'accordion__panel--closed',
      modal: true,
      onToggle: (panelInfo, isOpen) => {
        if (isOpen) {
          this.runDemo(panelInfo.index)
        }
      }
    })

    setTimeout(() => {
      accordionEl.classList.remove('snap')
    }, 0)

    this.runDemo(0)
  }

  renderAccordionHtml() {
    let html = '';

    for (let demo of this.demos) {
      html +=
        '<div class="accordion__panel">' +
        '<div class="accordion__panel-title">' +
        '<span class="fc-icon"></span>' + // CSS will give it content
        htmlEscape(demo.title) +
        '</div>' +
        '<div class="accordion__panel-content">' +
        demo.controlHtml +
        '</div>' +
        '</div>'
    }

    return html
  }

}
