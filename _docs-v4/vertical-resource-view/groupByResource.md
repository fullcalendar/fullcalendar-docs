---
title: groupByResource
---

Determines if multi-day agenda or basic views should display resource columns. If so, renders resource headings above date headings.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

Beware this will affect *all* multi-day basic/agenda views, which might look bad for views that have many days. If you'd like to target a specific view, use [View-Specific Options](view-specific-options).


## Screenshot:

<img src='groupByResource.png' width='600' height='474' style='margin-left:-3px' alt='resources above dates' />
