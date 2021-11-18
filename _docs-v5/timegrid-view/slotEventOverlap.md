---
title: slotEventOverlap
---

Determines if timed events in TimeGrid view should visually overlap.

<div class='spec' markdown='1'>
Boolean, *default*: `true`
</div>

When set to <code>true</code> (the default), events will overlap each other.
At most *half* of each event will be obscured:

<img src='{{ site.baseurl }}/assets/docs/slotEventOverlap-true.png' alt='events overlapping' />

When set to <code>false</code>, there will be absolutely no overlapping:

<img src='{{ site.baseurl }}/assets/docs/slotEventOverlap-false.png' alt='events not overlapping' />
