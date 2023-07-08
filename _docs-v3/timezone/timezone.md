---
title: timezone
title_for_landing: Timezone
layout: docs-sublanding
related:
  - timezoneParam
  - now
demos:
  - timezone-demo
---

Determines the timezone in which dates throughout the API are parsed and rendered.

<div class='spec' markdown='1'>
`false` (default), `'local'`, `'UTC'`, a timezone string (`'America/Chicago'`)
</div>

Each of these possible values has an effect on **(1)** the way event data requests are made, **(2)** the timezones that event dates are represented in, and **(3)** the timezones that other dates in the API are represented in.

For more information, [view a live demo](timezone-demo).


## `false` (no timezone, the default)

Use this mode if you don't store timezone information for your events and you want all events to render consistently across all client computers, regardless of timezone.

**1)** When events are requested, no timezone information will be sent:

```
events.php?start=2013-09-28&end=2013-11-02
```

**2)** When ISO8601 date strings are parsed, the timezone offset that was originally in the string will be preserved (via Moment's [zone](https://momentjs.com/docs/#/manipulating/timezone-offset/)). If the string has no timezone offset, the date will become [ambiguously-zoned](moment#ambiguously-zoned).

```js
{ title: "event1", start: "2013-10-20T02:00:00+09:00" }
//                                     ^        ^
//              will always display as 2:00     |
//                                              |
//         the timezone offset will always be +09:00
```

**NOTE:** Because the browser does not know the timezone offset for every time in every timezone, when an event is modified, whether through user dragging/resizing or [updateEvent](updateEvent), the dates will become [ambiguously-zoned](moment#ambiguously-zoned).

**3)** In other parts of the API, moments will be [ambiguously-zoned](moment#ambiguously-zoned).


## `"local"` (the client's timezone)

Use this mode if you store timezone information for your events and you want events displayed differently depending on the local timezone of each end-user's computer.

**1)** When events are requested, no timezone information will be sent:

```
events.php?start=2013-09-28&end=2013-11-02
```

**2)** Date strings will be parsed in the local timezone. If no timezone offset is present, it is assumed to already be in local time.

```js
{ title: "event1", start: "2013-10-20T15:00:00+02:00" }
//                                     ^        ^
// if in San Francisco, the timezone offset will become -07:00
// and the time will become 06:00:00
```

**3)** In other parts of the API, moments will be represented in the local timezone.


## `"UTC"`

Use this mode if you store timezone information for your events and you want all your events to be displayed in UTC ([Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)).

**1)** When events are requested, the [timezone parameter](timezoneParam) will be set to `UTC`:

```
events.php?start=2013-09-28&end=2013-11-02&timezone=UTC
```

**2)** Date strings will be parsed in the UTC timezone. If no timezone offset is present, it is assumed to already be in UTC.

```js
{ title: "event1", start: "2013-10-20T08:00:00+02:00" }
//                                     ^        ^
//               will be converted to 06:00:00+00:00
```

**3)** In other parts of the API, moments will be represented in UTC.


## Timezone string (like `"America/Chicago"`)

Use this mode if you store timezone information for your events and you want them displayed in a timezone that can be customized.

**1)** When events are requested, the timezone name will sent as the [timezone parameter](timezoneParam):

```
events.php?start=2013-09-28&end=2013-11-02&timezone=America/Chicago
```

**2)** **Your server-side script is then expected to use the `timezone` parameter to calculate the timezone offset of the returned ISO8601 dates!** Once the dates are parsed, they will have a forced [zone](https://momentjs.com/docs/#/manipulating/timezone-offset/):

```js
{ title: "event1", start: "2013-10-20T02:00:00+09:00" }
//                                     ^        ^
//                     will display as 2:00     |
//                                              |
//             timezone offset will always be +09:00
```

**NOTE:** Because the browser does not know the timezone offset for every time in every timezone, when an event is modified, whether through user dragging/resizing or [updateEvent](updateEvent), the dates will become [ambiguously-zoned](moment#ambiguously-zoned).

**3)** In other parts of the API, moments will be [ambiguously-zoned](moment#ambiguously-zoned).
