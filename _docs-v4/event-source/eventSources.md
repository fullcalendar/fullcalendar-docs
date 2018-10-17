---
title: eventSources
---

A way to specify multiple event sources.

<div class='spec' markdown='1'>
Array
</div>

This option is used instead of the `events` option.

You can put any number of [event arrays](events-array), [functions](events-function), [JSON feed URLs](events-json-feed), or full-out [Event Source Objects](event-source-object) into the `eventSources` array.

## Dependencies

If any of the event sources is a JSON feed, please include SuperAgent's JS file.

Requesting JSON event feed relies on a third-party AJAX library called [SuperAgent](http://visionmedia.github.io/superagent/).

If you are building your project with Node/Webpack, there is no need to worry about bundling SuperAgent files. It will happen automatically.

However, if you are using `<script>` tags and browser globals, **you must include SuperAgent's JS file yourself!**

## Example

Here is an example calendar that displays two [JSON feeds](events-json-feed):

```js
var calendar = new Calendar(calendarEl, {
  eventSources: [
    '/feed1.php',
    '/feed2.php'
  ]
});
```
