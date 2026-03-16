---
title: V7 Release Notes & Upgrade Guide
layout: text
---

<!--
Create aXe scrollbar workaround
Create new issues for various things, update total
-->

<style>
  #toc {
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 25px;
  }
  #toc h2 { margin: 0 0 0 20px; }
  #toc ul { margin: 0 0 0 25px; list-style-position: inside; font-size: 14px  }
</style>

<div class='sidebar-layout'>
<div class='sidebar-layout__main' id='summary' markdown='1'>

This major release simplifies the **DOM structure** for custom styling and improves **performance**, **accessibility**, **responsiveness**, **sizing**, and **print-view**. In total, **57 tickets** were resolved.

**There are very few breaking API changes.** However, if you've written custom CSS, you'll likely need to modify a few selectors, as tag-names and class-names have changed in the calendar's DOM. We've written a separate **[upgrade guide for your CSS&raquo;](v7-release-notes-css)**

This guide assumes you're **upgrading from v6**. To upgrade from **v5**, first follow the **[v5 &rarr; v6 guide](v6-release-notes)** and then return to this guide. The two upgrade guides can be stacked with no issue.

**Want the code?** [Read the instructions](initialize-es6)

**Want the full docs** in a non-changelog format? [View the docs]({{ site.baseurl }})

**Found a bug?** [Report it on the issue tracker](/reporting-bugs)


## DOM Structure & CSS

**Feature:** slimmed down HTML skeleton. Removed nested `<table>`s in favor of Flexbox. Accessibility is maintained and even improved in many instances via `role`/`aria` attributes.

**Breaking:** as a result of the changed HTML skeleton and class-names, a number of selectors must be rewritten in your custom CSS. Please review the separate **[upgrade guide for your CSS&raquo;](v7-release-notes-css)**

**Breaking-Visual:** Column headers in DayGrid and TimeGrid are no longer bold by default. To restore previous behavior, add the following CSS:

```css
.fc-header-cell {
  font-weight: bold;
}
```


## Performance

- Fixed unnecessary event rendering and calling of `eventContent` when unrelated events change ([#3003](https://github.com/fullcalendar/fullcalendar/issues/3003), [#7650](https://github.com/fullcalendar/fullcalendar/issues/7650))
- DayGrid/TimeGrid rendering performance gain ([#7677](https://github.com/fullcalendar/fullcalendar/issues/7677))
- MultiMonth performance gain, solving "Forced reflow while executing JavaScript took <#> ms" violation ([#7209](https://github.com/fullcalendar/fullcalendar/issues/7209)) <!-- manually verified -->
- Less layout thrashing ([#4906](https://github.com/fullcalendar/fullcalendar/issues/4906))
- Less flickering during event rerendering for React connector ([#7488](https://github.com/fullcalendar/fullcalendar/issues/7488))


## Accessibility

- Better table semantics for screen readers ([#6641](https://github.com/fullcalendar/fullcalendar/issues/6641), [#7656](https://github.com/fullcalendar/fullcalendar/issues/7656), [#7455](https://github.com/fullcalendar/fullcalendar/issues/7455))
- Non-editable events should not be rendered as anchor tags ([#7675](https://github.com/fullcalendar/fullcalendar/issues/7675))
- List-view weekday navLinks should not have `aria-hidden` ([#7645](https://github.com/fullcalendar/fullcalendar/issues/7645))
- List-view accessibility markup less table-like, more list-like. Removed table pseudo-headers and thus removed the `eventHint` and `timeHint` locale settings.
- TimeGrid accessibility markup more table-like, puts timed events in single "row" labelled by `timedText` setting
- Add `aria-current="date"` for "today" highlight ([#7502](https://github.com/fullcalendar/fullcalendar/issues/7502))
- Use aria-label instead of title attribute ([#7584](https://github.com/fullcalendar/fullcalendar/issues/7584))
- Aria improvement for view-switcher within toolbar ([#7809](https://github.com/fullcalendar/fullcalendar/issues/7809), [#6522](https://github.com/fullcalendar/fullcalendar/issues/6522))
- Customizable heading hierarchy level via `headingLevel` ([#6972](https://github.com/fullcalendar/fullcalendar/issues/6972)) <!-- TODO: document new feature -->
- Improve MultiMonth title hierarchy via `role=list` ([#7537](https://github.com/fullcalendar/fullcalendar/issues/7537))
- Improve +more link popover-like aria attributes ([#7567](https://github.com/fullcalendar/fullcalendar/issues/7567))
- Improve nav-link aria attributes, give `role=link` ([#7567](https://github.com/fullcalendar/fullcalendar/issues/7567))
- Give `role=button` to clickable event elements w/o urls ([#7567](https://github.com/fullcalendar/fullcalendar/issues/7567))
- Tabbable popover close button ([#7157](https://github.com/fullcalendar/fullcalendar/issues/7157))
- Navigate popover items with keyboard ([#6624](https://github.com/fullcalendar/fullcalendar/issues/6624))
- Disabled day cells have broken ARIA references ([#7379](https://github.com/fullcalendar/fullcalendar/issues/7379))
- Move aria-label/labelledby away from invalid elements to cells ([#7566](https://github.com/fullcalendar/fullcalendar/issues/7566))
- Invalid `role` attributes on td/th/tr elements inside a table element ([#7568](https://github.com/fullcalendar/fullcalendar/issues/7568))
- Event time order different than DOM order, bad for tabbing ([#6943](https://github.com/fullcalendar/fullcalendar/issues/6943))
- Certain date/time text should be text-selectable ([#5628](https://github.com/fullcalendar/fullcalendar/issues/5628))

All calendar views now pass [Axe accessibility testing](https://www.deque.com/axe/) with the exception of a false-positive [scrollbar error](https://github.com/fullcalendar/fullcalendar/issues/7481), [which has a workaround](#).


## Sizing & Scrollbars

- **Feature:** No longer a need to call `.updateSize()` after the page's dimensions have been programmatically changed. All sizing/positioning of events and views will stay updated automatically.
- **Bugfix:** Layout does not resize to new container width after browser resizing ([#6407](https://github.com/fullcalendar/fullcalendar/issues/6407)) <!-- too hard to recreate... definitely fixed -->
- **Bugfix:** Dynamic calendar width doesn't adjust ([#5507](https://github.com/fullcalendar/fullcalendar/issues/5507)) <!-- no repro available -->
- **Bugfix:** Adjust calendar sizing when scrollbar width changes (or (de)activated) ([#5561](https://github.com/fullcalendar/fullcalendar/issues/5561)) <!-- tested manually w/ system settings -->
- **Bugfix:** Don't show MacOS/iOS hovering scrollbars in timeline header/left ([#5180](https://github.com/fullcalendar/fullcalendar/issues/5180))
- **Bugfix:** Disable hovering scrollbars in header/resourceArea ([#6894](https://github.com/fullcalendar/fullcalendar/issues/6894))
- **Bugfix:** Unnecessary scrollbars in day headers ([#6047](https://github.com/fullcalendar/fullcalendar/issues/6047))
- **Breaking-API:** `windowResize` event removed, no longer fires. To adjust your dimensions in response to the calendar's dimensions changing, use [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
- **Breaking-API:** `handleWindowResize` setting removed. Controlled if `windowResize` should fire.
- **Breaking-API:** `windowResizeDelay` setting removed. Controlled how often `windowResize` should fire.


## Print-View

Print improvements to **DayGrid:**

- Event titles should not repeat each day ([#6657](https://github.com/fullcalendar/fullcalendar/issues/6657))

Print improvements to **TimeGrid:**

- First page blank when multiple pages ([#7007](https://github.com/fullcalendar/fullcalendar/issues/7007))
- Last event cut-off when multiple pages ([#7673](https://github.com/fullcalendar/fullcalendar/issues/7673))
- Show all time slot lines ([#5465](https://github.com/fullcalendar/fullcalendar/issues/5465)). *Note:* it was impossible to achieve multi-page breaking in Firefox, so falls back to flat list of events without slot lines.

Print improvements to **Timeline:**

- Show all time slot lines ([#6636](https://github.com/fullcalendar/fullcalendar/issues/6636), [#6802](https://github.com/fullcalendar/fullcalendar/issues/6802))
- Resource rows no longer break across pages
- Resource-area columns shrink-to-fit based on percentage, saving more space for timeline


## Toolbar

- **Feature:** Toolbar CSS is more robust on smaller screens and more customizable for desired responsive behavior ([#4638](https://github.com/fullcalendar/fullcalendar/issues/4638))
- **Breaking-Visual:** For `headerToolbar`/`footerToolbar`, when calendar `direction:'rtl'`, elements within toolbar sections specified as `left` and `right` now span right-to-left


## DayGrid Plugin

Updates to the `@fullcalendar/daygrid` and `@fullcalendar/resource-daygrid` plugins:

<!-- TODO: make docs article for eventSlicing -->
- **Feature:** `eventSlicing` setting, which controls whether DayGrid can can put fragments of multi-day events with +more links. Defaults to `true` (same behavior as v6). <!-- https://fullcalendar.freshdesk.com/a/tickets/9203, TODO: make ticket!!! -->
- **Bugfix:** "More" button (events) on smartphones not responsive ([#2991](https://github.com/fullcalendar/fullcalendar/issues/2991)) <!-- no repro, not sure if fixed in past version, but definitely fixed now) -->
- **Bugfix:** Day number in day cells are hidden by vertical scrollbar ([#6798](https://github.com/fullcalendar/fullcalendar/issues/6798))
- **Bugfix:** Better dayGrid row height, `height:'auto'`, and +more link behavior ([#6033](https://github.com/fullcalendar/fullcalendar/issues/6033)) <!-- ^^^ repro in other issue vvv -->
- **Bugfix:** Day cells are not always equal height with calendar `height:'auto'` ([#5762](https://github.com/fullcalendar/fullcalendar/issues/5762))
- **Bugfix:** Events not rendered when container is resized ([#7555](https://github.com/fullcalendar/fullcalendar/issues/7555)) <!-- can't produce - ask them -->
- **Bugfix:** Events overflow below day cell with `dayMaxEvents:true` and `showNonCurrentDates:false` ([#6749](https://github.com/fullcalendar/fullcalendar/issues/6749)) <!-- updated original repro: https://codepen.io/arshaw/pen/NWQGQLN?editors=0110 -->
- **Bugfix:** Events times are cutoff with `eventDisplay:'block'` when there is not enough space for the title ([#6457](https://github.com/fullcalendar/fullcalendar/issues/6457))
- **Bugfix:** Compressed space between events in dayGrid when month-start title ([#7184](https://github.com/fullcalendar/fullcalendar/issues/7184))
- **Bugfix:** `resourceDayGrid`-views with no resources shows blank resource row ([#7377](https://github.com/fullcalendar/fullcalendar/issues/7377))
- **Bugfix & Breaking-API:** The `moreLinkClick` date is always UTC, not adjusted by timezone plugins ([#7314](https://github.com/fullcalendar/fullcalendar/issues/7314)). If your integration relies on an always-UTC result, and you use a [time zone plugin](timeZone#with-a-timezone-plugin), you must adjust for time zone variations.
- **Breaking-Visual:** When `height:'auto'`, day cells now maintain `aspectRatio` whereas prior, they maintained a min-height of about 3.5em ((#7900)[https://github.com/fullcalendar/fullcalendar/issues/7900])
- **Breaking-Visual:** Disabled days (via `validRange`) now display text in DayGrid header cells. Still no content within body cells.
- **Breaking-Visual:** The `weekNumbers:true` setting no longer displays week numbers in `dayGridDay` view, `dayGridWeek` view, or any `dayGrid`-based view with only one row


## TimeGrid Plugin

Updates to the `@fullcalendar/timegrid` and `@fullcalendar/resource-timegrid` plugins:

- **Bugfix:** TimeGrid "all-day" text is better aligned, better split across multiple lines
- **Bugfix:** `resourceTimeGrid`-views with no resources shows blank resource row ([#7377](https://github.com/fullcalendar/fullcalendar/issues/7377))
- **Bugfix & Breaking-API:** The `moreLinkClick` date is always UTC, not adjusted by timezone plugins ([#7314](https://github.com/fullcalendar/fullcalendar/issues/7314)). If your integration relies on an always-UTC result, and you use a [time zone plugin](timeZone#with-a-timezone-plugin), you must adjust for time zone variations.
- **Breaking-Visual:** Newlines in `allDayText` will be displayed as line breaks in TimeGrid
- **Breaking-Visual:** TimeGrid overlapping events that previously spanned full column width now have a right margin. This was an accidental regression from v5 &rarr; v6, and the v5 behavior is restored ([#6569](https://github.com/fullcalendar/fullcalendar/issues/6569))
- **Breaking-Visual:** Disabled days (via `validRange`) now display text in TimeGrid header cells. Still no content within body cells.
- **Breaking-Visual:** The `weekNumbers:true` setting no longer displays week numbers in `resourceTimeGridDay` view, because x-axis header cell alongside resource names is reserved for a future label


## List Plugin

Updates to the `@fullcalendar/list` plugin:

- **Bugfix:** List View sticky headers lack bottom border ([#7778](https://github.com/fullcalendar/fullcalendar/issues/7778))


## MultiMonth Plugin

Updates to the `@fullcalendar/multimonth` plugin:

- **Breaking-Visual:** The `multiMonthMinWidth` pixel value now *includes* the padding within each month tile


## Timeline Plugin

Updates to the `@fullcalendar/timeline` and `@fullcalendar/resource-timeline` plugins:

- **Feature:** In Resource Timeline view, `resourceAreaHeaderContent` above columns now stays fixed during horizontal scrolling ([#7779](https://github.com/fullcalendar/fullcalendar/issues/7779))
- **Feature:** If `resourceAreaWidth` or `resourceAreaColumns.width` specified as percentage, will persist as percentage after user-resize
- **Bugfix:** Resource rows don't adjust height to fit resourceLaneContent ([#6103](https://github.com/fullcalendar/fullcalendar/issues/6103))
- **Bugfix:** Resource rows don't render with correct height ([#6082](https://github.com/fullcalendar/fullcalendar/issues/6082)) <!-- no good reproduction - ask them to do it -->
- **Bugfix:** Resource-Timeline scrolls down when it shouldn't, attempting to preserve scroll state ([#4443](https://github.com/fullcalendar/fullcalendar/issues/4443))
- **Bugfix & Breaking-API:** The `moreLinkClick` date is always UTC, not adjusted by timezone plugins ([#7314](https://github.com/fullcalendar/fullcalendar/issues/7314)). If your integration relies on an always-UTC result, and you use a [time zone plugin](timeZone#with-a-timezone-plugin), you must adjust for time zone variations.


## Bootstrap 5 Plugin

Updates to the `@fullcalendar/bootstrap5` plugin:

- **Feature:** Improve Bootstrap 5 theme color mode, use of semantic color vars ([#7465](https://github.com/fullcalendar/fullcalendar/issues/7465)) <!-- TODO: make demo, add to docs -->
- **Breaking:** You must upgrade the `bootstrap` dependency to 5.2.x or newer and explicitly list it as as `peerDependency` in your `package.json`
- **Breaking-Visual:** Bootstrap theme default line-height less chunky


## iCalendar Plugin

Updates to the `@fullcalendar/icalendar` plugin:

- **Breaking:** Your must upgrade the `ical.js` `peerDependency` to v2 ([#7734](https://github.com/fullcalendar/fullcalendar/issues/7734))


## Angular Plugin

Updates to the `@fullcalendar/angular` plugin:

- **Breaking:** Removed Angular 12 support <!-- TODO: add to docs -->


## Internal Import Statements

Hopefully you're not importing any 'internal' FullCalendar utilities, but if you are, you must adapt to the following changes:

```diff
// removed
- import { DayTable } from '@fullcalendar/daygrid/internal'

// renamed
- import { DayTableView } from '@fullcalendar/daygrid/internal'
+ import { DayGridView } from '@fullcalendar/daygrid/internal'

// removed
- import { DayTimeCols } from '@fullcalendar/timegrid/internal'

// renamed
- import { DayTimeColsView } from '@fullcalendar/timegrid/internal'
+ import { TimeGridView } from '@fullcalendar/timegrid/internal'
```


## Features Postponed Until v7.1

Unfortunately we didn't have time to do these but will implement them in a follow-up minor release:

- Improve resource timeline performance with virtual rendering ([#5673](https://github.com/fullcalendar/fullcalendar/issues/5673))
- Resource open/close animation ([#4844](https://github.com/fullcalendar/fullcalendar/issues/4844))


## License Change to Premium Packages

While the STANDARD FullCalendar packages have been, and always will be, licensed under the permissive MIT license, the PREMIUM packages have more complex licensing:

| Application Type | Company Type   | v6 Premium License                      |
| ---------------- | -------------- | --------------------------------------- |
| Closed-source    | For-profit     | Custom commercial license               |
| Closed-source    | Not-for-profit | Creative Commons non-commercial license |
| Open-source      | For-profit     | GPLv3 copyleft license                  |
| Open-source      | Not-for-profit | GPLv3 copyleft license                  |

In v7, [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html) is replacing GPLv3 as the copyleft license used for open-source projects. If your project's frontend and backend are open-source and AGPLv3-compliant, use the following license key:

```js
schedulerLicenseKey: 'AGPL-My-Frontend-And-Backend-Are-Open-Source'
```

We've discovered a few instances of for-profit companies using FullCalendar Premium in closed-source projects, claiming to be GPLv3-compliant via the [SaaS loophole](https://www.mend.io/blog/the-saas-loophole-in-gpl-open-source-licenses/). By switching to AGPLv3, we are closing this loophole and forcing such companies to either purchase a commercial license or stay on v6.

If you are the author of a GPL'd SaaS project that uses FullCalendar Premium and are concerned that you cannot upgrade to v7 due to the license change, please consider the benefits of switching to AGPLv3 yourself.

</div>
<div class='sidebar-layout__sidebar sidebar-layout__sidebar--bordered' id='toc' markdown='1'>

## Table of Contents

- [DOM Structure & CSS](#dom-structure--css)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Sizing & Scrollbars](#sizing--scrollbars)
- [Print-View](#print-view)
- [Toolbar](#toolbar)
- [DayGrid Plugin](#daygrid-plugin)
- [TimeGrid Plugin](#timegrid-plugin)
- [List Plugin](#list-plugin)
- [MultiMonth Plugin](#multimonth-plugin)
- [Timeline Plugin](#timeline-plugin)
- [Bootstrap 5 Plugin](#bootstrap-5-plugin)
- [iCalendar Plugin](#icalendar-plugin)
- [Angular Plugin](#angular-plugin)
- [Internal Import Statements](#internal-import-statements)
- [Postponed Features](#features-postponed-until-v71)
- [Premium License Changes](#license-change-to-premium-packages)

</div>
</div>
