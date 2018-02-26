---
title: refetchResourcesOnNavigate
since_scheduler_version: 1.5.0
---

Whether to refetch and rerender resources when the user navigates to a different date or changes the view.

<div class='spec' markdown='1'>
Boolean, *default*: `false`
</div>

Since v1.5.1, if `refetchResourcesOnNavigate` is set to `true`...

- A [resources function](resources-function) will receive `start`, `end`, and `timezone` parameters
- A [resources JSON feed](resources-json-feed) will be requested with `start`, `end`, and `timezone` parameters
