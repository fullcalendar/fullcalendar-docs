import { loadStylesheets } from './stylesheet-loading'

const FONT_URL = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'

/*
settings:
  themeSystemName
  themeName
  callback
  loadingCallback
*/
export function loadThemeStylesheets(settings) {
  let callback = settings.callback || function () { }
  let loadingCallback = settings.loadingCallback || function () { }
  let stylesheetUrls = [FONT_URL]
  let themeStylesheetUrl = generateThemeStylesheetUrl(settings.themeSystemName, settings.themeName)

  if (themeStylesheetUrl) {
    stylesheetUrls.push(themeStylesheetUrl)
  }

  loadingCallback(true)
  loadStylesheets(stylesheetUrls, function () {
    loadingCallback(false)
    callback()
  })
}

function generateThemeStylesheetUrl(themeSystemName, themeName) {
  if (themeSystemName === 'bootstrap5') {
    if (themeName) {
      return 'https://bootswatch.com/5/' + themeName + '/bootstrap.min.css';
    }
    else { // the default bootstrap theme
      return 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
    }
  }
}
