document.addEventListener('DOMContentLoaded', function(event) {
  var settings = {
    collapseHtml: true,
    collapseCss: true,
    filterJsUrl: function(url) {
      return !url.match(/\/demo-to-codepen\.js$/);
    },
    filterCssUrl: function(url) {
      return !url.match(/\/demo-topbar\.css$/);
    },
    filterJs: function(js) {
      return js;
    },
    filterCss: function(css) {
      return css.replace(/\.demo-topbar[^{]*\{[^}]*?\}/g, '');
    },
    filterHtml: function(html) {
      return html
        .replace(/<div[^>]+class\s*=\s*['"]demo-topbar['"][\s\S]*?<\/\s*div\s*>/ig, '')
        .replace(/<(a|button)[^>]+data-codepen[^>]*>[\s\S]*?<\/\s*\1\s*>/ig, '');
    }
  };

  document.querySelectorAll('a[data-codepen], button[data-codepen]').forEach(function(el) {
    el.addEventListener('click', function() {
      var url = el.getAttribute('data-codepen');
      openEditor(
        url ?
          normalizeUrl(url, window.location.href) :
          window.location.href
      );
    });
  });

  function openEditor(url) {
    var newWindow = window.open('', '_blank');

    getUrlContent(url, function(content) {
      var codepenData = buildCodepenData(
        content,
        url // all relative refs within the content will be relative to this baseUrl
      );

      newWindow.document.open();
      newWindow.document.write(
        '<html><body>' +
        '<form action="https://codepen.io/pen/define" method="POST">' +
        '<input type="hidden" name="data" value="' + escapeHtml(JSON.stringify(codepenData)) + '" />' +
        '</form>' +
        '<script>document.forms[0].submit()</script>' +
        '</body></html>'
      );
      newWindow.document.close();
    });
  }

  function buildCodepenData(html, baseUrl) {
    var BODY_RE = /<body([^>]*)>([\s\S]*)<\/body>/;
    var SCRIPT_RE = /<script([^>]*)>([\s\S]*?)<\/script>/g;
    var LINK_RE = /<link([^>]*)>/g;
    var STYLE_RE = /<style([^>]*)>([\s\S]*?)<\/style>/g;
    var bodyHtml = '';
    var inlineJsBlocks = [];
    var inlineCssBlocks = [];
    var jsUrls = [];
    var cssUrls = [];
    var match;
    var url;
    var code;

    if ((match = BODY_RE.exec(html))) {
      bodyHtml = normalizeCode(
        absolutizeHtmlRefs(
          settings.filterHtml(match[2], baseUrl),
          baseUrl
        )
      );
    }

    while ((match = SCRIPT_RE.exec(html))) {
      url = parseAttribute(match[1], 'src');

      if (url) {
        jsUrls.push(normalizeUrl(url, baseUrl));
      } else if ((code = normalizeCode(match[2]))) {
        code = settings.filterJs(code, baseUrl);
        inlineJsBlocks.push(code);
      }
    }

    while (match = LINK_RE.exec(html)) {
      if (
        parseAttribute(match[1], 'rel') === 'stylesheet' &&
        parseAttribute(match[1], 'media') !== 'print' && // exclude print-only stylesheets
        (url = parseAttribute(match[1], 'href'))
      ) {
        cssUrls.push(normalizeUrl(url, baseUrl));
      }
    }

    while ((match = STYLE_RE.exec(html))) {
      code = match[2];
      code = settings.filterCss(code, baseUrl);
      code = normalizeCode(code);

      if (code) {
        inlineCssBlocks.push(code);
      }
    }

    return {
      css: inlineCssBlocks.join('\n\n'),
      js: inlineJsBlocks.join('\n\n'),
      html: bodyHtml,
      js_external: jsUrls.filter(settings.filterJsUrl).join(';'),
      css_external: cssUrls.filter(settings.filterCssUrl).join(';'),
      editors:
        ((!settings.collapseHtml && bodyHtml) ? '1' : '0') +
        ((!settings.collapseCss && inlineCssBlocks.length) ? '1' : '0') +
        ((!settings.collapseJs && inlineJsBlocks.length) ? '1' : '0')
    };
  }

  function absolutizeHtmlRefs(html, baseUrl) {
    return html.replace(
      /(src|href)(\s*=\s*['"])([^'"]*)(['"])/g,
      function(m0, m1, m2, m3, m4) {
        return m1 + m2 + normalizeUrl(m3, baseUrl) + m4;
      }
    )
  }

  function normalizeCode(code) {
    var commonIndent;

    code = code.replace(/[\t ]+$/mg, ''); // strip trailing whitespace
    code = code.replace(/\n{2,}/g, '\n\n'); // strip consecutive blank lines

    commonIndent = computeCommonIndent(code);

    // remove the common indent from all lines
    if (commonIndent) {
      code = code.replace(new RegExp('^' + commonIndent, 'mg'), '');
    }

    code = code.trim();
    return code;
  }

  function computeCommonIndent(s) {
    var RE = /^[\t ]+/mg; // specifically test for spaces/tabs to avoid matching newlines
    var indents = [];
    var match;
    var smallestIndentLen = 1000;
    var i;
    var indent;

    while ((match = RE.exec(s))) {
      indent = match[0];

      if (indent) {
        indents.push(indent);
        smallestIndentLen = Math.min(smallestIndentLen, indent.length);
      }
    }

    if (indents.length) {
      indent = indents[0].substr(0, smallestIndentLen);

      for (i = 1; i < indents.length; i++) {
        if (indents[i].substr(0, smallestIndentLen) !== indent) {
          return '';
        }
      }

      return indent;
    }

    return '';
  }

  function normalizeUrl(href, baseUrl) {
    var HOST_RE = /^(\w+:\/\/([^\/]+))(.*)$/; // also matches the protocol like https://
    var baseHostMatch;
    var parts;
    var stack;
    var i;

    if (href.match(HOST_RE)) { // already a fully-formed absolute URL
      return href;
    }

    baseHostMatch = baseUrl.match(HOST_RE);

    if (href.charAt(0) === '/') { // a URL with a starting slash
      return baseHostMatch[1] + href;
    }

    // derived from https://stackoverflow.com/a/14780463/96342
    stack = baseHostMatch[2].split('/');
    parts = href.split('/');
    stack.pop();
    for (i = 0; i < parts.length; i++) {
      if (parts[i] === '.')
        continue;
      if (parts[i] === '..')
        stack.pop();
      else
        stack.push(parts[i]);
    }

    return baseHostMatch[1] + stack.join('/');
  }

  function parseAttribute(attrStr, attrName) {
    var re = new RegExp(attrName + '\s*=\s*[\\\'"]([^\\\'"]+)[\\\'"]');
    var match = re.exec(attrStr);
    if (match) {
      return match[1];
    }
  }

  function getUrlContent(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#039;')
      .replace(/"/g, '&quot;');
  }

});
