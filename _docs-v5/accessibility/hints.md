---
title: Hints
since_version: 2.10.0
---

Interactive HTML elements are annotated with `aria-label` and `title` attributes to make them more descriptive. It is possible to control the text of these attributes.

`buttonHints`
: A map of `{ [buttonName]: string }`. By default, [buttonText](buttonText) will be used. The first placeholder/function argument ([info below](#arguments)) will be the localized buttonText, the second is the button name from the [headerToolbar](headerToolbar)/[footerToolbar](footerToolbar) options. A value like `{ next: "Next $0 }` might result in `"Next month"`.

`viewHint`
: For buttons that represent calendar views, if an entry in the `buttonHints` map is not found, this `viewHint` value will be used. The first placeholder/function argument ([info below](#arguments)) will be the localized buttonText, the second is the button name from the [headerToolbar](headerToolbar)/[footerToolbar](footerToolbar) options. A value like `"$0 view"` might result in `"day view"`.

`navLinkHint`
: Describes what happens after a [navLink](date-nav-links) is clicked. The first placeholder/function argument ([info below](#arguments)) will be the localized date text, the second will be the [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). A value like `"Go to $0"` might result in `"Go to January 1, 2022"`.

`moreLinkHint`
: Describes what happens after a "+more" link opens an [event popover](event-popover). The first and only placeholder/function argument is the number of events being hidden. A value like `"Click to see $0 more events"` might result in `"Click to see 3 more events"`.

`closeHint`
: Describes the "X" icon on the [event popover](event-popover). Default: `"Close"`

`timeHint`
: For [list view](list-view)'s non-visible table header, describes the column with days and times. Default: `"Time"`

`eventHint`
: For [list view](list-view)'s non-visible table header, describes the column with event names. Default: `"Event"`


## Arguments

Certain hint options accept arguments. If the option is specified as a string, these arguments will be injected in place of `$0`, `$1`, etc. If the option is specified as a function, these will be the function arguments. Example:

```js
new Calendar(calendarEl, {
  viewHint: function(buttonText, buttonName) {
    if (buttonName.match(/^dayGrid/)) { // matches "dayGridWeek"
      return buttonText + " list view" // results in "week list view"
    } else {
      return buttonText + " view" // results in "week view"
    }
  }
})
```
