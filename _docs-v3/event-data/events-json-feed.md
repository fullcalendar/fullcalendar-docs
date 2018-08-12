---
title: events (as a json feed)
---
Visiting the URL of a JSON feed is one of the ways FullCalendar fetches [Event Objects](event-object). This action occurs when the user clicks prev/next or changes calendar views. FullCalendar will determine the date-range it needs events for and will pass that information along in GET parameters.

The GET parameter names will be determined by the [startParam](startParam) and [endParam](endParam) options. (`"start"` and `"end"` by default).

The values of these parameters will be ISO8601 date strings (like `2013-12-01`). For precise behavior, see the [timezone](timezone) docs.

Here is a URL that FullCalendar might visit to fetch new data event from a JSON feed:

`/myfeed.php?start=2013-12-01&end=2014-01-12&_=1386054751381`

The `_` parameter is automatically inserted to prevent the browser from caching the result ([more below](#caching)).

If you need to access a feed that is in a different domain, you can use JSONP with a `?` in your URL (see the JSONP discussion in [$.ajax](http://api.jquery.com/jQuery.ajax/)).

## JSON Date String Formats

The following is an example of an ISO8601 date string for start and end dates in a JSON feed:

`2015-03-17`

FullCalendar will accept ISO8601 date strings written with hours, minutes, seconds, and milliseconds:

`2015-03-17T13:13:55.008`

FullCalendar also accepts ISO8601 date strings with a timezone offset (see [timezone](timezone) docs):

`2015-03-17T13:13:55+0800`

`2015-03-17T13:13:55-0400`

**NOTE**: FullCalendar will not accept the new Date() JavaScript constructor as part of a date string (ex. new Date(2010, 12, 25)), because the JSON format does not support object instantiation with the **new** operator. The date string must be written using the ISO8601 standard (YYYY-MM-DDTHH:mm:ss.sssZ).

Example script with ISO8601 date strings:

```
$('#calendar').fullCalendar({
  events: [
    {
      title: 'Event Title1',
      start: '2015-03-17T13:13:55.008',
      end: '2015-03-19T13:13:55.008'
    },
    {
      title: 'Event Title2',
      start: '2015-03-17T13:13:55-0400',
      end: '2015-03-19T13:13:55-0400'
    }
  ]
});
```

Millisecond time can also be added to JSON feeds. It is important to note that this number must be written in milliseconds, ex. 1426612435000 (“March 17, 2015 5:13:55 PM”), NOT seconds 1426612435.

Example script with Unix timestamp:

```
$('#calendar').fullCalendar({
  events: [
    {
    title: 'Event Title',
    start: 1426612435000,
    end: 1426785379000
    }
  ]
});

```

## Extended Form

You can specify [Event Source options](event-source-object#options). This often comes in handy when you are using the [eventSources](eventSources) option to specify multiple event sources and you want certain options to only apply to certain sources. However, to do this, you must write things a little differently:

```js
$('#calendar').fullCalendar({

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
<th>
startParam
</th>
<td>
Sets the <a href='startParam'>startParam</a> option, but only for this source.
</td>
</tr>
<tr>
<th>
endParam
</th>
<td>
Sets the <a href='endParam'>endParam</a> option, but only for this source.
</td>
</tr>
<tr>
<th>
timezoneParam
</th>
<td>
Sets the <a href='timezoneParam'>timezoneParam</a> option, but only for this source.
</td>
</tr>
</table>

## jQuery $.ajax options

You can also specify any of the [jQuery $.ajax](http://api.jquery.com/jQuery.ajax/) options within the same object! This allows you to easily pass additional parameters to your feed script, as well as listen to ajax callbacks:

```js
$('#calendar').fullCalendar({

  eventSources: [

    // your event source
    {
      url: '/myfeed.php',
      type: 'POST',
      data: {
        custom_param1: 'something',
        custom_param2: 'somethingelse'
      },
      error: function() {
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
$('#calendar').fullCalendar({

  events: {
    url: '/myfeed.php',
    type: 'POST',
    data: {
      custom_param1: 'something',
      custom_param2: 'somethingelse'
    },
    error: function() {
      alert('there was an error while fetching events!');
    },
    color: 'yellow',   // a non-ajax option
    textColor: 'black' // a non-ajax option
  }

});
```

## Dynamic `data` parameter

The `data` parameters, which sends information to your JSON script through either GET or POST, can also be specified as a function, in order to send dynamic values:

```js
$('#calendar').fullCalendar({

  events: {
    url: '/myfeed.php',
    data: function() { // a function that returns an object
      return {
        dynamic_value: Math.random()
      };
    }
  }

});
```

The `startParam` and `endParam` values will still automatically be included.

## Caching

By default, FullCalendar will insert a `_` parameter into the URL of the request to prevent the browser from caching the response. FullCalendar achieves this internally by setting the $.ajax parameter to `false`.

If you would like to counteract this and prevent the `_` parameter, you can set the `cache` option to `true`:

```js
$('#calendar').fullCalendar({

  events: {
    url: '/myfeed.php',
    cache: true
  }

});
```
