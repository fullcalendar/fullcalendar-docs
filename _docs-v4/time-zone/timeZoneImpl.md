---
title: timeZoneImpl
---

In order to support the browsers that FullCalendar aims to support, we need to introduce that concept of a "time zone implementation", a way to define which system is responsible for computing time zone offsets for arbitrary dates in arbitrary time zones.

The `timeZoneImpl` setting only comes into play when using named time zones for the [timeZone](timeZone) settings. If you are using the `'local'` or `'UTC'` time zones, you do not need to worry about `timeZoneImpl`.

`"UTC-coercion"` is the default setting. This requires no third party plugins. It "coerces" or "forces" the dates that it receives into native Date objects whose UTC-values are relevant. You'll need to remember to use methods like `getUTCDate()` and `toUTCString()` on these [date objects](date-object).

When parsing ISO8601 strings that have UTC offsets, like `2019-09-01T12:30:00-05:00`, the offset (`-05:00`) will essentially be ignored! For more information, visit the ["UTC-coercion" section in the main timeZone doc](timeZone#UTC-coercion).

If you'd like a more proper solution that represents dates in their true offsets, third-party plugins are available to you. Remember, these plugins require other date-libraries which will add bloat to your final bundle:

- [fullcalendar-moment-timezone](moment-plugins#fullcalendar-moment-timezone) (for the [Moment Timezone](https://momentjs.com/timezone/) library)<br />Specify `timeZoneImpl: 'moment-timezone'`
- [fullcalendar-luxon](luxon-plugin) (for the [Luxon](https://moment.github.io/luxon/) library)<br />Specify `timeZoneImpl: 'luxon'`
