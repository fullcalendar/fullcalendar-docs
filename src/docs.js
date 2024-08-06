import docsearch from '@docsearch/js'
import { querySelectorAll } from './lib/util'
import '@docsearch/css'
import './styles/docs.scss'

document.addEventListener('DOMContentLoaded', function () {

  // DocSearch
  // ------------------------------------------------------------------------------------------

  querySelectorAll('.control-search-button').forEach(function (searchButtonEl) {
    var version = searchButtonEl.getAttribute('data-version')

    docsearch({
      appId: 'AGJMDAFLM6',
      apiKey: '1964b0f1d600306bcf5a02eee797c5b5',
      indexName: 'fullcalendar',

      container: searchButtonEl,
      searchParameters: {
        facetFilters: ['version:' + version],
      },
    })
  })

  // Version Chooser
  // ------------------------------------------------------------------------------------------
  // This should go before layout chooser b/c layout chooser might erase initial url hash

  var V2_WARNING_HTML =
    'Version 3 is nearly API-compatible with version 2. ' +
    '<a href="/blog/2016/09/feature-packed-releases">More Information</a>' // TODO: use baseurl

  querySelectorAll('.control-select__select').forEach(function (selectEl) {

    selectEl.addEventListener('change', function () {
      var selectedOptionEl = selectEl.options[selectEl.selectedIndex]

      window.location.href = selectedOptionEl.getAttribute('data-url')
    })

    function processHash(hash) {
      if (hash === 'v2') {
        selectEl.value = 'v2'
        showV2Warning()
      }
    }

    processHash(extractUrlHash(window.location.href))

    window.addEventListener('hashchange', function (ev) {
      processHash(
        extractUrlHash(ev.newURL || document.URL) // IE11 doesn't have newURL
      )
    })

  })

  function showV2Warning() {
    var warningEl = document.getElementById('docs-controls-warning')
    warningEl.innerHTML = V2_WARNING_HTML
    warningEl.style.display = '' // show
  }

  // Docs Index Layout Chooser
  // ------------------------------------------------------------------------------------------

  querySelectorAll('.docs-layout-toggler').forEach(function (togglerEl) {
    var SELECTED_CLASS = 'control-toggler__choice--selected'
    var itemEls = querySelectorAll('.control-toggler__choice', togglerEl)
    var choices = [] // array of strings
    var choicesToItems = {} // map of strings to jquery clickable items
    var choicesToContainers = {} // map of strings to jquery containers
    var currentChoice = 'main' // DOM/classNames are expected to already resemble this state
    var initialChoice
    var storedChoice

    itemEls.forEach(function (itemEl) {
      var choice = extractUrlHash(itemEl.getAttribute('href'))
      var choiceContainer

      if (choice) {
        choices.push(choice)
        choicesToItems[choice] = itemEl

        choiceContainer = document.getElementById(choice)
        choicesToContainers[choice] = choiceContainer
        choiceContainer.removeAttribute('id') // prevents scrolling when url changed
      }
    })

    initialChoice = extractUrlHash(window.location.href)
    if (isValidChoice(initialChoice)) {
      select(initialChoice)
    } else {
      storedChoice = localStorage.getItem('docs-landing-view')
      if (isValidChoice(storedChoice)) {
        select(storedChoice)
        if (storedChoice !== choices[0]) {
          window.location.href = '#' + storedChoice
        }
      } else {
        select(choices[0])
      }
    }

    window.addEventListener('hashchange', function (ev) {
      var newChoice = extractUrlHash(ev.newURL || document.URL) // IE11 doesn't have newURL

      if (isValidChoice(newChoice)) {
        select(newChoice)
      }
    })

    function select(newChoice) {
      if (newChoice !== currentChoice) {
        choicesToItems[newChoice].classList.add(SELECTED_CLASS)
        choicesToItems[currentChoice].classList.remove(SELECTED_CLASS)
        choicesToContainers[newChoice].style.display = '' // show
        choicesToContainers[currentChoice].style.display = 'none' // do after show, as to not lose scroll position
        localStorage.setItem('docs-landing-view', newChoice)
        currentChoice = newChoice
      }
    }

    function isValidChoice(choice) {
      return choice && choicesToContainers[choice]
    }
  })

  // Utils
  // ------------------------------------------------------------------------------------------

  function extractUrlHash(url) {
    var match = url.match(/#(.*)$/)
    if (match) {
      return match[1]
    }
  }

})
