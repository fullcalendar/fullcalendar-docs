---
title: now
---

Explicitly sets the "today" date of the calendar. This is the day that is normally highlighted in yellow.

<div class='spec' markdown='1'>
Date, function
</div>

Normally, the local browser's current date is used.

You can override the current date by providing a [parsable Date](date-parsing), such as an ISO8601 date string like `"2013-12-01T00:00:00"`.

You can also provide a function that returns a [Date](date-object).

Overriding the current date is particularly useful when your calendar is using a custom [timeZone](timeZone) parameter. The current year/month/date in the custom timezone might be different than the local computer's current date.

You'll most likely want to calculate this with a server-side script and inject it into the settings of the calendar. Here is an example in PHP:

```php
<?php
  $datetime = new DateTime('now', 'America/Chicago');
  $datetime_string = $datetime->format('c');
?>

var calendar = new Calendar(calendarEl, {
  now: <?php echo json_encode($datetime_string) ?>
});
```

Once `now` date object was set it continually moves forward in time after being set even when navigating between the views, it can't be set dynamically after initialization.
