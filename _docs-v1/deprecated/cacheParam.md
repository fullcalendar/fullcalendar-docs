---
title: cacheParam
since_version: 1.1
---

A GET parameter of this name will be inserted into each JSON feed's URL to prevent caching.

<div class='removed-notice'>
This option was removed in version 1.5.
Use the <a href='events-json-feed#caching'>JSON event source</a> jQuery.ajax cache parameter
to enable/disable caching.
</div>

<div class='spec' markdown='1'>
String, *default*: `'_'`
</div>

The value will be the current millisecond time.
