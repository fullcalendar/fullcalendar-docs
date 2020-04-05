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
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/scrollgrid</strong>
    </td>
    <td>
      Provides advanced scrolling features such as horizontal scrolling to certain views
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/scrollgrid'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/timeline</strong>
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
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-common</strong>
    </td>
    <td>
      Offers base support for resources. Required for all resource-related plugins.
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-common'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-daygrid</strong>
    </td>
    <td>
      Offers <a href='resource-daygrid-view'>resource-enabled DayGrid</a> views:
      <code>resourceDayGridMonth</code>,
      <code>resourceDayGridWeek</code>,
      <code>resourceDayGridDay</code>,
      <code>resourceDayGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-daygrid'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-timegrid</strong>
    </td>
    <td>
      Offers <a href='vertical-resource-view'>resource-enabled TimeGrid</a> views:
      <code>resourceTimeGridWeek</code>,
      <code>resourceTimeGridDay</code>,
      <code>resourceTimeGrid</code> (<a href='custom-view-with-settings'>generic</a>)
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/resource-timegrid'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/resource-timeline</strong>
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
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/bootstrap</strong>
    </td>
    <td>
      Offers <a href='bootstrap-theme'>Bootstrap theming</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/bootstrap'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/google-calendar</strong>
    </td>
    <td>
      For loading events from a public <a href='google-calendar'>Google Calendar feed</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/google-calendar'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/rrule</strong>
    </td>
    <td>
      For <a href='rrule-plugin'>leveraging the RRule library</a> for event recurrence
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/rrule'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/luxon</strong>
    </td>
    <td>
      Offers a named-timezone implementation, a formatting string implementation, and utilities for converting to Luxon DateTimes. <a href='luxon-plugin'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/luxon'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/moment</strong>
    </td>
    <td>
      Offers a formatting string implementation and utilities fo convert to Moment objects. <a href='moment-plugins'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/moment'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/moment-timezone</strong>
    </td>
    <td>
      Offers a named timezone implementation. <a href='moment-plugins#moment-timezone'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/moment-timezone'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/react</strong>
    </td>
    <td>
      Offers a React component. <a href='react'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/react'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/vue</strong>
    </td>
    <td>
      Offers a Vue component. <a href='vue'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/vue'>Yarn</a></td>
  </tr>
  <tr>
    <td>
      <strong>@fullcalendar/angular</strong>
    </td>
    <td>
      Offers an Angular component. <a href='angular'>More info</a>
    </td>
    <td><a href='https://yarnpkg.com/package/@fullcalendar/angular'>Yarn</a></td>
  </tr>
</tbody>
</table>
