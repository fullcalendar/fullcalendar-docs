
let currentStylesheetEl

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
  let stylesheetUrl = generateStylesheetUrl(settings.themeSystemName, settings.themeName)
  let stylesheetEl

  if (stylesheetUrl) {
    stylesheetEl = document.createElement('link')
    stylesheetEl.setAttribute('rel', 'stylesheet')
    stylesheetEl.setAttribute('href', stylesheetUrl)
    document.querySelector('head').appendChild(stylesheetEl)

    loadingCallback(true)

    whenStylesheetLoaded(stylesheetEl, function() {
      if (currentStylesheetEl) {
        currentStylesheetEl.parentNode.removeChild(currentStylesheetEl)
      }
      currentStylesheetEl = stylesheetEl
      loadingCallback(false)
      callback()
    })
  } else {
    if (currentStylesheetEl) {
      currentStylesheetEl.parentNode.removeChild(currentStylesheetEl)
      currentStylesheetEl = null
    }
    callback()
  }
}


function generateStylesheetUrl(themeSystemName, themeName) {
  if (themeSystemName === 'bootstrap') {
    if (themeName) {
      return 'https://bootswatch.com/4/' + themeName + '/bootstrap.min.css'
    }
    else { // the default bootstrap theme
      return 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
    }
  }
}


function whenStylesheetLoaded(linkNode, callback) {
  var isReady = false

  function ready() {
    if (!isReady) { // avoid double-call
      isReady = true
      callback()
    }
  }

  linkNode.onload = ready // does not work cross-browser
  setTimeout(ready, 2000) // max wait. also handles browsers that don't support onload
}
