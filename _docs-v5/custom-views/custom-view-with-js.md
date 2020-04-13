---
title: Custom Views via JS
type: guide
---

For advanced developers, FullCalendar provides an API for building custom views with the unlimited flexibility of JavaScript code.


## Config Object

You can define an "config object" with functions that execute rendering. Example:

```js
import { sliceEvents, createPlugin } from '@fullcalendar/core';

const CustomViewConfig = {

  classNames: [ 'custom-view' ],

  content: function(props) {
    let segs = sliceEvents(props, true); // allDay=true

    let html =
      '<div class="view-title">' +
        props.dateProfile.currentRange.start.toUTCString() +
      '</div>' +
      '<div class="view-events">' +
        segs.length + ' events' +
      '</div>'

    return { html: html }
  }

}

export default createPlugin({
  views: {
    custom: CustomViewConfig
  }
});
```

The `classNames` property is a [ClassName Input](classname-input) and the `content` property is a [Content Injection Input](content-injection).

Then, in another file:

```js
import customViewPlugin from './custom-view-file.js';

let calendarEl = document.getElementById('calendar');
let calendar = new Calendar(calendarEl, {
  plugins: [ customViewPlugin ],
  initialView: 'custom'
});
```


## Component

It is also possible to specify a [Preact Component](https://preactjs.com/guide/v10/components/). In the future it will be possible to specify a React component when using the FullCalendar React connector. Here's an example that uses [JSX](https://reactjs.org/docs/introducing-jsx.html):

```jsx
import { Component, Fragment } from 'preact';
import { sliceEvents, createPlugin } from '@fullcalendar/core';

class CustomView extends Component {

  render(props) {
    let segs = sliceEvents(props, true); // allDay=true

    return (
      <Fragment>
        <div class='view-title'>
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div class='view-events'>
          {segs.length} events
        </div>
      </Fragment>
    );
  }

}

export default createPlugin({
  views: {
    custom: CustomView
  }
});
```


## Props

Both the config and component techniques receive "props", an object with information about the current view. You'll need to look at the [FullCalendar v5 source code](https://github.com/fullcalendar/fullcalendar/blob/v5/packages/core/src/View.ts) to see exactly what's in `props`.


## Other Considerations

The above documentation is helpful for building a barebones view, but making it full-featured and interactive is a further challenge. A robust view should be right-to-left compatible, locale-customizable, allow event dragging and resizing, allow user selections, and more...

Making a full-featured view is beyond the scope of this document. Further documentation should be written and further APIs should be formalized, but for now, it would be best to browse FullCalendar's [source on GitHub]({{ site.fullcalendar_repo }}).
