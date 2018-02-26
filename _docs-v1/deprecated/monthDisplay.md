---
title: monthDisplay
---

Triggered once when the calendar loads and every time the calendar's month is changed.

<div class='removed-notice'>
In version 1.3, this callback was removed in favor of <a href='viewDisplay'>viewDisplay</a>.
</div>

<div class='spec' markdown='1'>
function( *year*, *month*, *monthTitle* )
</div>

`month` is **zero-based**. `monthTitle` contains the new title of the month (ex: "January 2009")
