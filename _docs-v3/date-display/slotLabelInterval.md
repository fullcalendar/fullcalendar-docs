---
title: slotLabelInterval
---

The frequency that the time slots should be labelled with text.

<div class='spec' markdown='1'>
[Duration](moment-duration)
</div>

If not specified, a reasonable value will be automatically computed based on `slotDuration`. When specifying this option, give a [Duration](moment-duration)-ish input, like `"01:00"` or `{hours:1}`. This will cause the header labels to appear on the hour marks, even if `slotDuration` was hypothetically 15 or 30 minutes long.
