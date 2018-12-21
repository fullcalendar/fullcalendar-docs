---
title: Resource Object
---

Raw resource object are eventually [parsed](resource-parsing) into proper resource objects, which are accessible via Calendar methods such as [getResources](getResources) and [getResourceById](getResourceById). You can read their properties or manipulate them via methods.

Each resource has the following properties:

- `id` - the unique string identifier for this resource
- `title` - the string title of this resource
- `extendedProps` - a hash of non-standard props that were specified during [parsing](resource-parsing)

The following essential methods are offered:

- [getParent](Resource-getParent)
- [getChildren](Resource-getChildren)
- [getEvents](Resource-getEvents)
- [remove](Resource-remove)

For more Resource methods, look for methods that start with `Resource::` in the docs.
