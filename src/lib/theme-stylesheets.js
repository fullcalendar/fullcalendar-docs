import { loadStylesheets } from './stylesheet-loading'

const FONT_AWESOME_URL = 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'

/*
settings:
  themeSystemName
  themeName
  callback
  loadingCallback
*/
export function loadThemeStylesheets(settings) {
  let callback = settings.callback || function() { }
  let loadingCallback = settings.loadingCallback || function() { }
  let stylesheetUrls = [ FONT_AWESOME_URL ]
  let themeStylesheetUrl = generateThemeStylesheetUrl(settings.themeSystemName, settings.themeName)

  if (themeStylesheetUrl) {
    stylesheetUrls.push(themeStylesheetUrl)
  }

  loadingCallback(true)
  loadStylesheets(stylesheetUrls, function() {
    loadingCallback(false)
    callback()
  })
}

function generateThemeStylesheetUrl(themeSystemName, themeName) {
  if (themeSystemName === 'bootstrap') {
    if (themeName) {
      return 'https://bootswatch.com/4/' + themeName + '/bootstrap.min.css'
    }
    else { // the default bootstrap theme
      return 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
    }
  }
}
