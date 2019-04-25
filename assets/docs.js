jQuery(function($) {

  // Version Chooser
  // ------------------------------------------------------------------------------------------
  // This should go before layout chooser b/c layout chooser might erase initial url hash

  var V2_WARNING_HTML =
    'Version 3 is nearly API-compatible with version 2. ' +
    '<a href="/blog/2016/09/feature-packed-releases">More Information</a>'; // TODO: use baseurl

  $('.hero-select__select').each(function(i, node) {
    var $select = $(node).on('change', function() {
      window.location.href = $select.children(':selected').data('url');
    });

    function processHash(hash) {
      if (hash === 'v2') {
        $select.val('v2');
        showV2Warning();
      }
    }

    processHash(extractUrlHash(window.location.href));

    window.addEventListener('hashchange', function(ev) {
      processHash(extractUrlHash(ev.newURL));
    });
  });

  function showV2Warning() {
    $('.hero__warning').html(V2_WARNING_HTML).show();
  }

  // Docs Index Layout Chooser
  // ------------------------------------------------------------------------------------------

  $('.docs-layout-toggler').each(function(i, node) {
    var SELECTED_CLASS = 'hero-toggler__choice--selected';
    var $items = $(node).find('.hero-toggler__choice');
    var choices = []; // array of strings
    var choicesToItems = {}; // map of strings to jquery clickable items
    var choicesToContainers = {}; // map of strings to jquery containers
    var currentChoice = 'main'; // DOM/classNames are expected to already resemble this state
    var initialChoice;
    var storedChoice;

    $items.each(function(i, node) {
      var $item = $(this);
      var choice = extractUrlHash($item.attr('href'));
      if (choice) {
        choices.push(choice);
        choicesToItems[choice] = $item;
        choicesToContainers[choice] = $('#' + choice)
          .removeAttr('id'); // prevents scrolling when url changed
      }
    });

    initialChoice = extractUrlHash(window.location.href);
    if (isValidChoice(initialChoice)) {
      select(initialChoice);
    } else {
      storedChoice = localStorage.getItem('docs-landing-view');
      if (isValidChoice(storedChoice)) {
        select(storedChoice);
        if (storedChoice !== choices[0]) {
          window.location.href = '#' + storedChoice;
        }
      } else {
        select(choices[0]);
      }
    }

    window.addEventListener('hashchange', function(ev) {
      var newChoice = extractUrlHash(ev.newURL);
      if (isValidChoice(newChoice)) {
        select(newChoice);
      }
    });

    function select(newChoice) {
      if (newChoice !== currentChoice) {
        choicesToItems[newChoice].addClass(SELECTED_CLASS);
        choicesToItems[currentChoice].removeClass(SELECTED_CLASS);
        choicesToContainers[newChoice].show();
        choicesToContainers[currentChoice].hide(); // do after .show(), as to not lose scroll position
        localStorage.setItem('docs-landing-view', newChoice);
        currentChoice = newChoice;
      }
    }

    function isValidChoice(choice) {
      return choice && choicesToContainers[choice];
    }
  });

  // Utils
  // ------------------------------------------------------------------------------------------

  function extractUrlHash(url) {
    var match = url.match(/#(.*)$/)
    if (match) {
      return match[1];
    }
  }

});
