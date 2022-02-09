import { querySelectorAll } from '../lib/util'
import Demo from './Demo'

const FOREIGN_URL_RE = /^\w+:\/\//

export default class extends Demo {

  title = 'Theming'
  controlHtml = `
    <p><label for='theme-select'>Change the theme:</label></p>
    <p>
    <select id='theme-select' name='theme'>
      <option value='fullcalendar'>Default FullCalendar Theme</option>
      <option value='bootstrap5' selected>Default Bootstrap Theme</option>
      <option value='cerulean'>Cerulean</option>
      <option value='cosmo'>Cosmo</option>
      <option value='cyborg'>Cyborg</option>
      <option value='darkly'>Darkly</option>
      <option value='flatly'>Flatly</option>
      <option value='journal'>Journal</option>
      <option value='litera'>Litera</option>
      <option value='lumen'>Lumen</option>
      <option value='lux'>Lux</option>
      <option value='materia'>Materia</option>
      <option value='minty'>Minty</option>
      <option value='pulse'>Pulse</option>
      <option value='sandstone'>Sandstone</option>
      <option value='simplex'>Simplex</option>
      <option value='sketchy'>Sketchy</option>
      <option value='slate'>Slate</option>
      <option value='solar'>Solar</option>
      <option value='spacelab'>Spacelab</option>
      <option value='superhero'>Superhero</option>
      <option value='united'>United</option>
      <option value='yeti'>Yeti</option>
    </select>
    </p>
    <p><a href='/docs/theming' class='more-link'>More info</a></p>
  `
  // TODO: BASE_URL in href

  contentHtml = `
    <iframe src='about:blank' class='demos__main-iframe'></iframe>
  `

  init(controlEl, contentEl) {
    let iframe = contentEl.querySelector('iframe')
    let iframeDocument = iframe.contentWindow.document

    iframeDocument.open()
    iframeDocument.write(generateHtml())
    iframeDocument.close()
    iframeDocument.addEventListener('DOMContentLoaded', update)

    let themeSelectEl = controlEl.querySelector('select[name="theme"]')
    themeSelectEl.addEventListener('change', update)

    function update() {
      let val = themeSelectEl.value
      let themeSystem
      let theme

      if (val === 'fullcalendar') {
        themeSystem = 'standard'
        theme = ''
      } else {
        themeSystem = 'bootstrap5'
        theme = val === 'bootstrap5' ? '' : val
      }

      iframe.contentWindow.renderCalendarTheme(themeSystem, theme)
    }
  }

}

function generateHtml() {
  return `
<!DOCTYPE html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<script>isCalendarThemeRender = true</script>
${generateStylesheetHtml()}
${generateJsHtml()}
<style>
body, html { margin: 0; padding: 0; overflow: hidden }
</style>
</head>
<body>
<div id='calendar' class='demo-calendar'></div>
</body>
</html>
`
}

function generateStylesheetHtml() {
  return getStylesheetUrls().map(function(url) {
    return `<link rel="stylesheet" href="${url}" />`
  }).join('\n')
}

function generateJsHtml() {
  return getScriptUrls().map(function(url) {
    return `<script src="${url}"></script>`
  }).join('\n')
}

function getStylesheetUrls() {
  return querySelectorAll('link[rel="stylesheet"]').map(function(node) {
    return node.getAttribute('href')
  }) // don't want to filter local because we want external font
}

function getScriptUrls() {
  return querySelectorAll('script[src]').map(function(node) {
    return node.getAttribute('src')
  }).filter(isLocalUrl)
}

function isLocalUrl(url) {
  return !FOREIGN_URL_RE.test(url)
}
