---
title: resourcesSet
---

Called after resource data is initialized **OR** changed in any way.

<div class='spec'>
function( resources )
</div>

`resources` is an array of [Resource Objects](resource-object). It contains the same result [Calendar::getResources](getResources) would return.

This callback will be useful for syncing an external data source with all calendar resource data.
