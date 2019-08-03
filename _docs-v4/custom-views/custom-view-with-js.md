---
title: Custom Views via JS classes
type: guide
excerpt_separator: <!--more-->
---

For advanced developers, FullCalendar provides an API for building custom views with the unlimited flexibility of JavaScript code.<!--more--> Using [OOP programming principals](http://en.wikipedia.org/wiki/Object-oriented_programming), one can *subclass* the base `View` class, implementing or overriding each specific behavior as methods, demonstrated below.

Create a new file to contain your custom view. In this example, this file will be named NameOfMyCustomViewHere.js

```js
import { View, createPlugin } from '@fullcalendar/core';

class NameOfMyCustomViewHere extends View {

  initialize() {
    // called once when the view is instantiated, when the user switches to the view.
    // initialize member variables or do other setup tasks.
    console.log('NameOfMyCustomViewHere custom view has been initialized');
  }

  renderSkeleton() {
    // responsible for displaying the skeleton of the view within the already-defined
    // this.el, an HTML element
  }

  unrenderSkeleton() {
    // should undo what renderSkeleton did
  }

  renderDates(dateProfile) {
    // responsible for rendering the given dates
  }

  unrenderDates() {
    // should undo whatever renderDates does
  }

  renderEvents(eventStore, eventUiHash) {
    // responsible for rendering events
  }

  unrenderEvents() {
    // should undo whatever renderEvents does
  }

}

export default createPlugin({
  views: {
    NameOfMyCustomViewHere: NameOfMyCustomViewHere
  }
});
```


Then, in another file that holds the main calendar instantiation logic, import your new custom view from NameOfMyCustomViewHere.js:

```js
import NameOfMyCustomViewHere from './NameOfMyCustomViewHere.js';
...
let calendar = new Calendar(calendarEl, {
  plugins: [ NameOfMyCustomViewHere ],
  defaultView: 'NameOfMyCustomViewHere'
})
...
```

The View class provides many other methods that can be overridden or leveraged. See the [View class' source](https://github.com/fullcalendar/fullcalendar/blob/master/src/View.ts) for more insight. It might be wise to *watch* the project on GitHub in case the API for any of the more advanced non-standard methods changes.

The above documentation is helpful for building a barebones view, but making it full-featured and interactive is a further challenging. A robust view should be right-to-left compatible, locale-customizable, allow event dragging and resizing, allow user selections, and more...

Making a full-featured view is beyond the scope of this document. Further documentation should be written and further APIs should be formalized, but for now, it would be best to browse FullCalendar's [source on GitHub]({{ site.fullcalendar_repo }}).
