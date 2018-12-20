---
title: Resource Object
type: guide
---

This is the data structure that is accepted and emitted for resources.

<table>
<tr>
<th>id</th>
<td>
Uniquely identifies this resource. <a href='event-object'>Event Objects</a> with a corresponding <code>resourceId</code> field will be linked to this event.
Will be coerced into a string.
</td>
</tr>
<tr>
<th>eventColor</th>
<td>
Events associated with this resources will have their backgrounds and borders colored. Any CSS string color format can be specified, like <code>"#f00"</code> or <code>"rgb(255,0,0)"</code>. This value will take precedence over the global <a href='eventColor'>eventColor</a> option and the <a href='event-source-object'>Event Source Object</a> <code>color</code> option, but it will not take precedence over the <a href='event-object'>Event Object</a> <code>color</code> option.
</td>
</tr>
<tr>
<th>eventBackgroundColor</th>
<td>
Like <code>eventBackgroundColor</code> but only for the background color
</td>
</tr>
<tr>
<th>eventBorderColor</th>
<td>
Like <code>eventBorderColor</code> but only for the border color
</td>
</tr>
<tr>
<th>eventTextColor</th>
<td>
Like <code>eventTextColor</code> but only for the text color
</td>
</tr>
<tr>
<th>eventClassNames</th>
<td>
className(s) that will apply to events
</td>
</tr>
<tr>
<th>businessHours</th>
<td>
A <a href='businessHours'>businessHours</a> declaration
that will only apply to this resource.
<a href='businessHours-per-resource'>See example</a>.
</td>
</tr>
<tr>
<th>children</th>
<td>
See below
</td>
</tr>
<tr>
<th>parentId</th>
<td>
See below
</td>
</tr>
</table>

For the color-related properties, even when an event is rendered on a non-resource view (views other than Timeline), these properties will still take effect.

Resources can be nested within each other. This will be displayed as an expander arrow in the UI which expands and contracts the child resources. Specifying nested resources can be done via one of two possible techniques...


## Nested resources with a nested array

Child resources can be specified directly within the parent resource via the `children` property. This technique is often more pleasant when hardcoding an array because it is visually easier to understand the code.

```js
resources: [
  {
    id: 'a',
    title: 'Room A',
    children: [
      {
        id: 'a1',
        title: 'Room A1'
      },
      {
        id: 'a2',
        title: 'Room A2'
      }
    ]
  }
]
```

## Nested resources with a flat array

An alternative method for specify child resources is via linking them together with the `parentId` property. This is often more pleasant when dealing with resource data that originates from a database.

```js
resources: [
  {
    id: 'a',
    title: 'Room A'
  },
  {
    id: 'a1',
    parentId: 'a',
    title: 'Room A1'
  },
  {
    id: 'a2',
    parentId: 'a',
    title: 'Room A2'
  }
]
```

## Retrieving the parent and children

The `parentId` and `children` properties will only be available when you are initially specifying a resource as a raw object. After the resource has been parsed and is emitted in other parts of the API like [getResourceById](getResourceById), you must use the following methods to retrieve the parent/children of that resource:

- [getParent](Resource::getParent)
- [getChildren](Resource::getChildren)
