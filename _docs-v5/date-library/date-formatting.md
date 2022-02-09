---
title: Date Formatting
---

The term "date formatting" means taking a Date object and converting it into a string. The string can either be a standard string format like ISO8601 (ex: `'2018-05-01'`) or it can be something more custom that you can display to users.

There are settings that define how a date is displayed, such as [eventTimeFormat](eventTimeFormat), [titleFormat](titleFormat), [dayHeaderFormat](dayHeaderFormat), and others. These settings accept "date formatting configs". These are objects that define what information will outputted into the resulting string. Example:

```js
var calendar = new Calendar(calendarEl, {
  titleFormat: { // will produce something like "Tuesday, September 18, 2018"
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    weekday: 'long'
  }
})
```

Date formatting configs have the same properties as the [native DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) like:

<table>

<tr>
<th>year</th>
<td>
<code>'numeric'</code> will produce something like <code>2018</code><br>
<code>'2-digit'</code> will produce something like <code>18</code>
</td>
</tr>

<tr>
<th>month</th>
<td>
<code>'long'</code> will produce something like <code>September</code><br>
<code>'short'</code> will produce something like <code>Sep</code><br>
<code>'narrow'</code> will produce something like <code>S</code><br>
<code>'numeric'</code> will produce something like <code>1</code><br>
<code>'2-digit'</code> will produce something like <code>01</code>
</td>
</tr>

<tr>
<th>day</th>
<td>
The day of the month. If the date were Jun 3, 2018<br>
<code>'numeric'</code> will produce something like <code>3</code><br>
<code>'2-digit'</code> will produce something like <code>03</code>
</td>
</tr>

<tr>
<th>weekday</th>
<td>
The day of the week.<br>
<code>'long'</code> will produce something like <code>Wednesday</code><br>
<code>'short'</code> will produce something like <code>Wed</code><br>
<code>'narrow'</code> will produce something like <code>W</code>
</td>
</tr>

<tr>
<th>hour</th>
<td>
If the time were 6:05<br>
<code>'numeric'</code> would produce something like <code>6</code><br>
<code>'2-digit'</code> would produce something like <code>06</code>
</td>
</tr>

<tr>
<th>minute</th>
<td>
If the time were 6:05<br>
<code>'numeric'</code> would produce something like <code>5</code><br>
<code>'2-digit'</code> would produce something like <code>05</code>
</td>
</tr>

<tr>
<th>second</th>
<td>
<code>'numeric'</code> or <code>'2-digit'</code>
</td>
</tr>

<tr>
<th>hour12</th>
<td>
<code>true</code> for a 12-hour clock, <code>false</code> for a 24-hour clock
</td>
</tr>

<tr>
<th>timeZoneName</th>
<td>
<code>'short'</code> (<code>'long'</code> is not supported by FullCalendar)
</td>
</tr>

</table>

There are additional properties you may use that are **not part of the native DateTimeFormat's API**:

<table>

<tr>
<th>week</th>
<td>
<code>'long'</code> will produce something like <code>Week 8</code><br>
<code>'short'</code> will produce something like <code>Wk 8</code><br>
<code>'narrow'</code> will produce something like <code>Wk8</code><br>
<code>'numeric'</code> will produce something like <code>8</code><br>
This flag cannot be combined with any other flags!
</td>
</tr>

<tr>
<th>meridiem</th>
<td>
Normally with a 12-hour clock the meridiem displays as <code>A.M./P.M.</code><br>
<code>'lowercase'</code> will force it to display like <code>a.m./p.m.</code><br>
<code>'short'</code> will force it to display like <code>am/pm</code><br>
<code>'narrow'</code> will force it to display like <code>a/p</code><br>
<code>false</code> will prevent it from displaying altogether
</td>
</tr>

<tr>
<th>omitZeroMinute</th>
<td>
if <code>true</code>, times like <code>6:00</code> will display as <code>6</code>
</td>
</tr>

<tr>
<th>omitCommas</th>
<td>
if <code>true</code>, all commas will be stripped from the outputted string
</td>
</tr>

</table>

None of the above properties are required. You may provide an assortment of these properties and the browser will do the best job it can to produce a string with all this information.

The biggest benefit of using this technique over others is that it is very international-friendly. It provides the flexibility to display localized formats in different locales/languages.


## Formatting Strings

Date formatting configs are great for internationalization, but if you want **more control** over the produced string, they are going to disappoint you. "Date formatting string" are essentially command strings that have placeholders for where date-related words and numbers should go. They are a concept present in many other date libraries.

Date formatting strings are **only** available if you include a plugin that provides the functionality. The two available connector plugins are:

- [Moment Plugin](moment-plugin) (for the [Moment](https://momentjs.com/) library)
- [Luxon 2 Plugin](luxon2) (for the [Luxon](https://moment.github.io/luxon/) library)
- [Luxon 1 Plugin](luxon1)

Example using the Moment plugin:

```js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, momentPlugin ],

    // because the plugin is present, you can now use formatting strings.
    // will produce something like "Tuesday, September 18, 2018"
    titleFormat: 'dddd, MMMM D, YYYY'
  });

  calendar.render();
});
```

[Read more about Moment JS formatting strings](http://momentjs.com/docs/#/displaying/).


## Formatting Functions

If you want **complete** programmatic control over how a string is produced, or you simply want to use date-formatting from a third-party date library that doesn't have a connector plugin, you can use a "formatting function". This function will receive a date instance and must return a string.

Example:

```js
var calendar = new Calendar(calendarEl, {
  // will produce something like "Tue Sep 18 2018 18:48:41 GMT-0400 (Eastern Daylight Time) !!!"
  titleFormat: function(date) {
    return date.toString() + '!!!';
  }
});
```
