---
title: groupByDateAndResource
---

Determines if multi-day agenda or basic views should display resource columns. If so, renders date headings above resource headings.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

Beware this will affect *all* multi-day basic/agenda views, which might look bad for views that have many days. If you'd like to target a specific view, use [View-Specific Options](view-specific-options).

Setting this value to `true` will override [groupByResource](groupByResource).


## Screenshot:

<img src='groupByDateAndResource.png' width='600' height='476' style='margin-left:-2px' alt='dates above resources' />
