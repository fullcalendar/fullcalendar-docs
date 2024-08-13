---
title: eventMaxStack
---

For **timeline** view, the maximum number of events that stack top-to-bottom. For **timeGrid** view, the maximum number of events that stack left-to-right.

<div class='spec' markdown='1'>
Number or `null`, *default*: `null`
</div>

For **dayGrid** view, see [dayMaxEventRows](dayMaxEventRows) and [dayMaxEvents](dayMaxEvents).

A value of `null` means there is no maximum and all events are displayed.

When the number of events exceeds `eventMaxStack`, a rectangle is drawn that represents the hidden events. It is rendered via the [more-link render hooks](more-link-render-hooks) and executes [moreLinkClick](moreLinkClick) when clicked. The default click action is to show a popover with the hidden events.

Example of a more-link in timeGrid view:

<div class='split-image'>
  <div style='flex-grow:0'>
    <img
      src='timegrid-more-link-closed.png'
      alt='Screenshot before more-link has been clicked in timegrid view'
      class='bordered-image'
      width='266'
      height='230'
      style='max-width:none !important'
    >
    <div class='image-caption'>
      Default state
    </div>
  </div>
  <div style='flex-grow:0'>
    <img
      src='timegrid-more-link-open.png'
      alt='Screenshot of more-popover open in timegrid view'
      class='bordered-image'
      width='395'
      height='230'
      style='max-width:none !important'
    >
    <div class='image-caption'>
      With the more-popover open
    </div>
  </div>
</div>

Example of a more-link in timeline view:

<div class='split-image'>
  <div style='flex-grow:0'>
    <img
      src='timeline-more-link-closed.png'
      alt='Screenshot before more-link has been clicked in timeline view'
      class='bordered-image'
      width='360'
      height='164'
      style='max-width:none !important'
    >
    <div class='image-caption'>
      Default state
    </div>
  </div>
  <div style='flex-grow:0'>
    <img
      src='timeline-more-link-open.png'
      alt='Screenshot of more-popover open in timeline view'
      class='bordered-image'
      width='360'
      height='164'
      style='max-width:none !important'
    >
    <div class='image-caption'>
      With the more-popover open
    </div>
  </div>
</div>
