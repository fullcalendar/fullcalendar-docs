---
title: resourceGroupField
---

Visually groups resources by certain criteria.

The given argument must be a field name that each resource object has. Example:

```js
var calendar = new Calendar(calendarEl, {
  resourceGroupField: 'groupId',
  resources: [
    {
      id: 'A',
      groupId: '1',
      title: 'Resource A'
    },
    {
      id: 'B',
      groupdId: '1',
      title: 'Resource B'
    },
    {
      id: 'C',
      groupId: '2',
      title: 'Resource C'
    }
  ]
});
```

Resource groups will have a gray divider at the top of each group. The text at the top of each group will be determined by the `resourceGroupLabelContent` [resource group render hook](resource-group-render-hooks).

[See a demo of resourceGroupField](timeline-resourceGroupField-demo).
