---
title: resourceOrder
---

Determines the ordering of the resource list.

<div class='spec' markdown='1'>
String
</div>

Can be a single [Resource](resource-parsing) property name. The resources will be ordered ascendingly by the value of this property.

If prefixed with a minus sign like `'-propertyName'`, the ordering will be descending.

Compound ordering criteria can be specified as a single string separated by commas.

```js
var calendar = new Calendar(calendarEl, {
  resourceOrder: '-type1,type2',
  resources: [
    {
      id: 'A',
      title: 'Resource A',
      type1: 10,
      type2: 55
    },
    {
      id: 'B',
      title: 'Resource B',
      type1: 12,
      type2: 60
    },
    {
      id: 'C',
      title: 'Resource C',
      type1: 12,
      type2: 50
    }
  ]
});
```

In the above example, the resources would appear as `Resource C`, `Resource B`, `Resource A`.

If no `resourceOrder` is given (the default), resources will be ordered by their `id`, then by `title`.
