---
title: resourceAreaColumns
---

Turns the resource area from a plain list of titles into a grid of data.

An array of objects can be provided, each with information about a column:

```js
var calendar = new Calendar(calendarEl, {
  resourceAreaColumns: [
    {
      field: 'fname',
      headerContent: 'First Name'
    },
    {
      field: 'lname',
      headerContent: 'Last Name'
    }
  ]
  resources: [
    {
      id: 'a',
      fname: 'John',
      lname: 'Smith'
    },
    {
      id: 'b',
      fname: 'Jerry',
      lname: 'Garcia'
    }
  ]
});
```

Each column object can have the following properties:

<table>

<tr>
<th>field</th>
<td>the property of the <a href='resource-object'>Resource Object</a> where the data will come from. The data is displayed in the cell of the grid.</td>
</tr>

<tr>
<th>group</th>
<td>
If specified as <code>true</code>, resources will be grouped by this column.
</td>
</tr>

<tr>
<th>width</th>
<td>the width of the column, either in a number of pixels or a string percentage like `"50%"`</td>
</tr>

<tr>
<th>headerClassNames</th>
<td markdown='1'>
a [ClassName Input](classname-input) for the `<th>` at the top
</td>
</tr>

<tr>
<th>headerContent</th>
<td markdown='1'>
a [Content Injection Input](content-injection) for the `<th>` at the top
</td>
</tr>

<tr>
<th>headerDidMount</th>
<td markdown='1'>
called right after the `<th>` was added to the DOM
</td>
</tr>

<tr>
<th>headerWillUnmount</th>
<td markdown='1'>
called right before the `<th>` will be removed from the DOM
</td>
</tr>

<tr>
<th>cellClassNames</th>
<td markdown='1'>
a [ClassName Input](classname-input) for the `<td>` in the body
</td>
</tr>

<tr>
<th>cellContent</th>
<td markdown='1'>
a [Content Injection Input](content-injection) for the `<td>` in the body
</td>
</tr>

<tr>
<th>cellDidMount</th>
<td markdown='1'>
called right after the `<td>` was added to the DOM
</td>
</tr>

<tr>
<th>cellWillUnmount</th>
<td markdown='1'>
called right before the `<td>` will be removed from the DOM
</td>
</tr>

</table>


[See a simple demo of resourceAreaColumns](resourceAreaColumns-demo).

[See a demo of resourceAreaColumns with **grouping**](resourceAreaColumns-grouping-demo).


Here is an example that incorporates `cellClassNames` and `cellContent`:

```js
resourceAreaColumns: [
  {
    headerContent: 'My Column',

    cellClassNames: function(arg) {
      var extendedProps = arg.resource.extendedProps;

      if (extendedProps.isUrgent) {
        return [ 'urgent-resource' ]
      }
    },

    cellContent: function(arg) {
      var extendedProps = resource.extendedProps;
      var message = extendedProps.message;

      if (extendedProps.isUrgent) {
        message += '!!!';
      }

      return message;
    }
  }
  // other columns...
]
```
