---
title: Resource::remove
type: method
---

Programmatically removes a resource from the calendar.

<div class='spec' markdown='1'>
resource.remove()
</div>

Example:

```js
var calendar = new Calendar(calendarEl, {
  resources: [
    { id: 'a', title: 'Resource A' },
    { id: 'b', title: 'Resource B' }
  ]
});

var resourceA = calendar.getResourceById('a');

resourceA.remove();
```

