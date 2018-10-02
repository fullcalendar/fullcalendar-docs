---
title: resourceText
type: callback
---

Determines the displayed text on each resource.

<div class='spec' markdown='1'>
function( resource )
</div>

This function accepts a [Resource Object](resource-object) and should return a string to be displayed.

If not specified, the resource object's `title` field will be used. Otherwise, its `id` will be displayed.
