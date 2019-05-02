
let stylesheetEls = {}
let stylesheetLoaded = {} // map of flags
let loadId = 0


export function loadStylesheets(urls, callback) {
  let currentLoadId = ++loadId
  let loadCnt = 0

  // load new stylesheets
  for (let url of urls) {
    loadStylesheet(url, loaded)
  }

  function loaded() {
    loadCnt++

    if (
      loadCnt === urls.length && // all URLs loaded?
      currentLoadId === loadId // still the same request?
    ) {
      // remove stylesheets we won't need
      for (let url in stylesheetEls) {
        if (urls.indexOf(url) === -1) {
          detachStylesheet(url)
        }
      }

      callback()
    }
  }
}


function loadStylesheet(url, callback) { // must not already be in DOM
  if (stylesheetLoaded[url]) {
    callback()
  } else {
    let el = document.querySelector(`link[href="${url}"]`)

    if (el) { // already in DOM at pageload? assumed to be loaded
      stylesheetEls[url] = el
      stylesheetLoaded[url] = true
      callback()

    } else {
      el = document.createElement('link')
      el.setAttribute('rel', 'stylesheet')
      el.setAttribute('href', url)
      document.querySelector('head').appendChild(el)

      stylesheetEls[url] = el
      whenStylesheetLoaded(el, function() {
        stylesheetLoaded[url] = true
        callback()
      })
    }
  }
}


function detachStylesheet(url) {
  let el = stylesheetEls[url]

  if (el) {
    el.parentNode.removeChild(el)

    delete stylesheetEls[url]
    delete stylesheetLoaded[url]
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
