---
title: defaultEventMinutes
since_version: 1.4
---

Determines the length (in minutes) an event appears to be when it has an unspecified end date.

<div class='spec' markdown='1'>
Integer, *default*: `120`
</div>

By default, if an [Event Object](event-object) as no `end`, it will appear to be 2 hours.

This option only affects events that appear in the agenda slots, meaning they have `allDay` set to `true`.
