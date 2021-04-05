---
title: selectAllow
---

Exact programmatic control over where the user can select.

<div class='spec' markdown='1'>
function(selectInfo)
</div>

This callback will be called for every new potential selection as the user is dragging.

The callback function will receive information about where the user is attempting to select (`selectInfo`) and must return either `true` or `false`.

The `selectInfo` object will have the following properties:

- `start` (a [Date](date-object))
- `end` (a [Date](date-object))
- `resource` (a [Resource](resource-object))(if you are using a [Resource View]({{ site.baseurl }}/pricing))

In line with the discussion about the [Event object](event-parsing), it is important to stress that the `end` date property is **exclusive**.
