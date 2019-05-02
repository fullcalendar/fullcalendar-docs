import { querySelectorAll } from './lib/util'
import { loadThemeStylesheets } from './lib/theme-stylesheets'

window.initThemeChooser = function(settings) {
  var isInitialized = false
  var currentThemeSystemName // don't set this directly. use setThemeSystem
  var loadingEl = document.getElementById('loading')
  var systemSelectEl = document.querySelector('#theme-system-selector select')
  var themeSelectWrapEls = Array.prototype.slice.call( // convert to real array
    document.querySelectorAll('.selector[data-theme-system]')
  )

  systemSelectEl.addEventListener('change', function() {
    setThemeSystem(this.value)
  })

  setThemeSystem(systemSelectEl.value)

  themeSelectWrapEls.forEach(function(themeSelectWrapEl) {
    var themeSelectEl = themeSelectWrapEl.querySelector('select')

    themeSelectWrapEl.addEventListener('change', function() {
      setTheme(
        currentThemeSystemName,
        themeSelectEl.options[themeSelectEl.selectedIndex].value
      )
    })
  })


  function setThemeSystem(themeSystemName) {
    var selectedTheme

    currentThemeSystemName = themeSystemName

    themeSelectWrapEls.forEach(function(themeSelectWrapEl) {
      var themeSelectEl = themeSelectWrapEl.querySelector('select')

      if (themeSelectWrapEl.getAttribute('data-theme-system') === themeSystemName) {
        selectedTheme = themeSelectEl.options[themeSelectEl.selectedIndex].value
        themeSelectWrapEl.style.display = 'inline-block'
      } else {
        themeSelectWrapEl.style.display = 'none'
      }
    })

    setTheme(themeSystemName, selectedTheme)
  }


  function setTheme(themeSystemName, themeName) {
    loadThemeStylesheets({
      themeSystemName,
      themeName,
      loadingCallback(bool) {
        loadingEl.style.display = bool ? 'inline' : 'none'
      },
      callback() {
        if (!isInitialized) {
          isInitialized = true
          settings.init(themeSystemName)
        }
        else {
          settings.change(themeSystemName)
        }
        showCredits(themeSystemName, themeName)
      }
    })
  }


  function showCredits(themeSystemName, themeName) {
    var creditId

    if (themeSystemName.match('bootstrap')) {
      if (themeName) {
        creditId = 'bootstrap-custom'
      }
      else {
        creditId = 'bootstrap-standard'
      }
    }

    querySelectorAll('.credits').forEach(function(creditEl) {
      if (creditEl.getAttribute('data-credit-id') === creditId) {
        creditEl.style.display = 'block'
      } else {
        creditEl.style.display = 'none'
      }
    })
  }

}
