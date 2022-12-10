---
title: Plugin Index
layout: docs-sublanding
---

FullCalendar offers the following packages:

<style>
  .plugin-table td:first-child strong { display: block; white-space: nowrap }
</style>

<table class='plugin-table'>
<thead>
  <tr>
    <th>Name</th>
    <th>Functionality / Views</th>
    <th>Yarn</th>
    <th>jsDelivr</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <strong>@fullcalendar/core</strong>
    </td>
    <td>
      Offers the <code>Calendar</code> class among other things
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/core'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/core?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/interaction</strong>
    </td>
    <td>
      Required to detect <a href='dateClick'>dateClick</a> actions,
      <a href='selectable'>selectable</a> actions, and
      <a href='editable'>event drag-n-drop &amp; resizing</a>.<br />
      <em>Not needed</em> for
      <a href='eventClick'>eventClick</a> or
      <a href='eventMouseEnter'>eventMouseEnter</a>/<a href='eventMouseLeave'>eventMouseLeave</a>.
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/interaction'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/interaction?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/daygrid</strong>
    </td>
    <td>
      Offers <a href='month-view'>Month</a> and <a href='daygrid-view'>DayGrid</a> views:<br />
      <code>dayGridMonth</code>,
      <code>dayGridWeek</code>,
      <code>dayGridDay</code>,
      <code>dayGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/daygrid'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/daygrid?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/timegrid</strong>
    </td>
    <td>
      Offers <a href='timegrid-view'>TimeGrid</a> views:<br />
      <code>timeGridWeek</code>,
      <code>timeGridDay</code>,
      <code>timeGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/timegrid'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/timegrid?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/list</strong>
    </td>
    <td>
      Offers <a href='list-view'>Lists</a> views:<br />
      <code>listYear</code>,
      <code>listMonth</code>,
      <code>listWeek</code>,
      <code>listDay</code>,
      <code>list</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/list'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/list?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/scrollgrid</strong>
    </td>
    <td>
      Provides advanced scrolling features such as horizontal scrolling to certain views
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/scrollgrid'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/scrollgrid?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/timeline</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers <a href='timeline-view-no-resources'>Timeline views with <strong>no resource support</strong></a>:<br />
      <code>timelineYear</code>,
      <code>timelineMonth</code>,
      <code>timelineWeek</code>,
      <code>timelineDay</code>,
      <code>timeline</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/timeline'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/timeline?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/adaptive</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers <a href='print'>improved printing support</a>.
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/adaptive'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/adaptive?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-common</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers base support for resources. Required for all resource-related plugins.
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-common'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/resource-common?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-daygrid</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers <a href='resource-daygrid-view'>resource-enabled DayGrid</a> views:
      <code>resourceDayGridMonth</code>,
      <code>resourceDayGridWeek</code>,
      <code>resourceDayGridDay</code>,
      <code>resourceDayGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-daygrid'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/resource-daygrid?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-timegrid</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers <a href='vertical-resource-view'>resource-enabled TimeGrid</a> views:
      <code>resourceTimeGridWeek</code>,
      <code>resourceTimeGridDay</code>,
      <code>resourceTimeGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-timegrid'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/resource-timegrid?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-timeline</strong>
      <a href='/pricing' class='badge'>Premium</a>
    </td>
    <td>
      Offers <a href='timeline-view'>resource-enabled Timeline</a> views:
      <code>resourceTimelineYear</code>,
      <code>resourceTimelineMonth</code>,
      <code>resourceTimelineWeek</code>,
      <code>resourceTimelineDay</code>,
      <code>resourceTimeline</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-timeline'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/resource-timeline?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/bootstrap5</strong>
    </td>
    <td>
      Offers <a href='bootstrap5'>Bootstrap 5 theming</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/bootstrap5'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/bootstrap5?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/bootstrap</strong>
    </td>
    <td>
      Offers <a href='bootstrap4'>Bootstrap 4 theming</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/bootstrap'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/bootstrap?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/google-calendar</strong>
    </td>
    <td>
      For loading events from a public <a href='google-calendar'>Google Calendar feed</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/google-calendar'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/google-calendar?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/icalendar</strong>
    </td>
    <td>
      For loading events from an <a href='icalendar'>iCalendar feed</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/icalendar'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/icalendar?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/rrule</strong>
    </td>
    <td>
      For <a href='rrule-plugin'>leveraging the RRule library</a> for event recurrence
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/rrule'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/rrule?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/luxon2</strong>
    </td>
    <td>
      Offers a named-timezone implementation, a formatting string implementation, and utilities for converting to Luxon DateTimes. <a href='luxon2'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/luxon2'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/luxon2?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/luxon</strong>
    </td>
    <td>
      Supports Luxon v1. <a href='luxon1'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/luxon'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/luxon?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/moment</strong>
    </td>
    <td>
      Offers a formatting string implementation and utilities fo convert to Moment objects. <a href='moment-plugin'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/moment'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/moment?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/moment-timezone</strong>
    </td>
    <td>
      Offers a named timezone implementation. <a href='moment-timezone-plugin'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/moment-timezone'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/moment-timezone?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/react</strong>
    </td>
    <td>
      Offers a React component. <a href='react'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/react'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/react?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/vue3</strong>
    </td>
    <td>
      Offers a Vue 3 component. <a href='vue'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/vue3'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/vue3?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/vue</strong>
    </td>
    <td>
      Offers a Vue 2 component. <a href='vue'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/vue'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/vue?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/angular</strong>
    </td>
    <td>
      Offers an Angular component. <a href='angular'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/angular'>Yarn</a></td>
    <td><a href='https://www.jsdelivr.com/package/npm/@fullcalendar/angular?version={{ site.data.latest-releases.v5 }}'>jsDelivr</a></td>
  </tr>
</tbody>
</table>
