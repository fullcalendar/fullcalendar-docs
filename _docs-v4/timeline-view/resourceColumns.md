---
title: resourceColumns
---

Turns the resource area from a plain list of titles into a grid of data.

An array of objects can be provided, each with information about a column:

```js
var calendar = new Calendar(calendarEl, {
  resourceColumns: [
    {
      labelText: 'First Name',
      field: 'fname'
    },
    {
      labelText: 'Last Name',
      field: 'lname'
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
<th>labelText</th>
<td>what goes in the top heading of the column</td>
</tr>
<tr>
<th>field</th>
<td>the property of the <a href='resource-object'>Resource Object</a> where the data will come from. The data is displayed in the cell of the grid.</td>
</tr>
<tr>
<th>width</th>
<td>the width of the column, either in a number of pixels or a string percentage like `"50%"`</td>
</tr>
<tr>
<th>text</th>
<td>allows populating the cells programatically with a function</td>
</tr>
<tr>
<th>render</th>
<td>allows manipulation of the DOM element associated with each cell</td>
</tr>
<tr>
<th>group</th>
<td>
If specified as <code>true</code>, resources will be grouped by this column.
</td>
</tr>
</table>

[See a simple demo of resourceColumns](resourceColumns-demo).

[See a demo of resourceColumns with **grouping**](resourceColumns-grouping-demo).

The `text` function will be given the Resource Object and must return text. The `render` function will be given the Resource Object and the HTML element associated with the cell. Here is an example that incorporates both techniques:

```js
resourceColumns: [
  {
    labelText: 'My Column',

    text: function(resource) {
      var extendedProps = resource.extendedProps;
      var message = extendedProps.message;

      if (resource.isUrgent) {
        message += '!!!';
      }

      return message;
    },

    render: function(resource, el) {
      var extendedProps = resource.extendedProps;

      if (extendedProps.isUrgent) {
        el.style.backgroundColor = 'red';
      }
    }
  }
  // other columns...
]
```
