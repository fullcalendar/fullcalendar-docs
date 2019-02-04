---
title: events (as a json feed)
---

A URL of a JSON feed that the calendar will fetch [Event Objects](event-object) from.

FullCalendar will visit the URL whenever it needs new event data. This happens when the user clicks prev/next or changes views. FullCalendar will determine the date-range it needs events for and will pass that information along in GET parameters.

The GET parameter names will be determined by the [startParam](startParam) and [endParam](endParam) options. (`"start"` and `"end"` by default).

The values of these parameters will be ISO8601 date strings (like `2013-12-01T00:00:00-05:00`). For precise behavior, see the [timeZone](timeZone) docs.

Consider the following script:

```js
var calendar = new Calendar(calendarEl, {
  events: '/myfeed.php'
});
```

Here is a URL that FullCalendar might visit:

`/myfeed.php?start=2013-12-01T00:00:00-05:00&end=2014-01-12T00:00:00-05:00`


## Extended Form

You can specify [Event Source options](event-source-object#options). This often comes in handy when you are using the [eventSources](eventSources) option to specify multiple event sources and you want certain options to only apply to certain sources. However, to do this, you must write things a little differently:

```js
var calendar = new Calendar(calendarEl, {

  eventSources: [

    // your event source
    {
      url: '/myfeed.php', // use the `url` property
      color: 'yellow',    // an option!
      textColor: 'black'  // an option!
    }

    // any other sources...

  ]

});
```

A list of general Event Source options can be found [here](event-source-object#options).
<span id='options'>However, there are additional options that apply specifically to JSON feeds:</span>

<table>

<tr>
<th>startParam</th>
<td markdown='1'>
Sets the [startParam](startParam) option, but only for this source.
</td>
</tr>

<tr>
<th>endParam</th>
<td markdown='1'>
Sets the [endParam](endParam) option, but only for this source.
</td>
</tr>

<tr>
<th>timeZoneParam</th>
<td markdown='1'>
Sets the [timeZoneParam](timeZoneParam) option, but only for this source.
</td>
</tr>

<tr>
<th>method</th>
<td markdown='1'>
`'GET'` (the default), `'POST'`, or any other HTTP request type.
</td>
</tr>

<tr>
<th>extraParams</th>
<td markdown='1'>
Other GET/POST data you want to send to the server. Can be a plain object or a function that returns an object.
</td>
</tr>

</table>


Here's an example of specifying `extraParams`:

```js
var calendar = new Calendar(calendarEl, {

  eventSources: [

    // your event source
    {
      url: '/myfeed.php',
      method: 'POST',
      extraParams: {
        custom_param1: 'something',
        custom_param2: 'somethingelse'
      },
      failure: function() {
        alert('there was an error while fetching events!');
      },
      color: 'yellow',   // a non-ajax option
      textColor: 'black' // a non-ajax option
    }

    // any other sources...

  ]

});
```

Here is the same example, but using the single-source `events` option instead:

```js
var calendar = new Calendar(calendarEl, {

  events: {
    url: '/myfeed.php',
    method: 'POST',
    extraParams: {
      custom_param1: 'something',
      custom_param2: 'somethingelse'
    },
    failure: function() {
      alert('there was an error while fetching events!');
    },
    color: 'yellow',   // a non-ajax option
    textColor: 'black' // a non-ajax option
  }

});
```

## Dynamic `extraParams` parameter

The `extraParams` parameters, which sends information to your JSON script through either GET or POST, can also be specified as a function, in order to send dynamic values:

```js
var calendar = new Calendar(calendarEl, {

  events: {
    url: '/myfeed.php',
    extraParams: function() { // a function that returns an object
      return {
        dynamic_value: Math.random()
      };
    }
  }

});
```

The `startParam` and `endParam` values will still automatically be included.


## Caching

If you're having trouble with your browser caching the result of an AJAX call when it shouldn't be, the first thing you should do is check the cache-related HTTP headers that your server-side script is sending down. However, if you'd like to implement a cachebuster on the client-side, here's how you would do it:

```js
var calendar = new Calendar(calendarEl, {

  events: {
    url: '/myfeed.php',
    extraParams: function() {
      return {
        cachebuster: new Date().valueOf()
      };
    }
  }

});
```
