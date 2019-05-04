---
title: React, Vue, and Angular Connectors
date: 2019-04-05T05:41:48+00:00
excerpt_separator: <!--more-->
---

I'm happy to announce the release of three new FullCalendar subprojects. They provide components for the three most popular front-end JavaScript frameworks: [React](https://reactjs.org), [Vue](https://vuejs.org/), and [Angular](https://angular.io/).<!--more--> In order to do this, I needed to enlist some help:

- [Josh Ruff](https://github.com/joshuaRuff) (of [Sardius Media](http://sardius.media/)) had developed *sardius-fullcalendar-wrapper*, a high-quality connector between React and FullCalendar v4.
- [irustm](https://github.com/irustm) had developed _ng-fullcalendar_, the most popular connector between Angular and FullCalendar.

I worked with Josh and irustm to get their components to API-parity with FullCalendar v4, write docs, write tests, and do a million other things to prepare these projects to be part of the FullCalendar family. In just a week and a half, we did it! Please check them out:

<table>
  <tr>
    <th>
      Github Project
    </th>
    <th>
      NPM Package
    </th>
    <th>
      Docs
    </th>
  </tr>
  <tr>
    <td>
      <a style="font-weight: bold; color: #000;" href="https://github.com/fullcalendar/fullcalendar-react">fullcalendar-react</a><span style="display: inline-block; vertical-align: middle; position: relative; top: 2px; left: 5px;"><a class="github-button" href="https://github.com/fullcalendar/fullcalendar-react" data-icon="octicon-star">Star</a></span>
    </td>
    <td>
      @fullcalendar/react
    </td>
    <td>
      <a href="{{ site.baseurl }}/docs/react">view the docs »</a>
    </td>
  </tr>
  <tr>
    <td>
      <a style="font-weight: bold; color: #000;" href="https://github.com/fullcalendar/fullcalendar-angular">fullcalendar-angular</a><span style="display: inline-block; vertical-align: middle; position: relative; top: 2px; left: 5px;"><a class="github-button" href="https://github.com/fullcalendar/fullcalendar-angular" data-icon="octicon-star">Star</a></span>
    </td>
    <td>
      @fullcalendar/angular
    </td>
    <td>
      <a href="{{ site.baseurl }}/docs/angular">view the docs »</a>
    </td>
  </tr>
  <tr>
    <td>
      <a style="font-weight: bold; color: #000;" href="https://github.com/fullcalendar/fullcalendar-vue">fullcalendar-vue</a><span style="display: inline-block; vertical-align: middle; position: relative; top: 2px; left: 5px;"><a class="github-button" href="https://github.com/fullcalendar/fullcalendar-vue" data-icon="octicon-star">Star</a></span>
    </td>
    <td>
      @fullcalendar/vue
    </td>
    <td>
      <a href="{{ site.baseurl }}/docs/vue">view the docs »</a>
    </td>
  </tr>
</table>

<script src='https://buttons.github.io/buttons.js'></script>

In case you're wondering, I (Adam Shaw) built the Vue connector. You're welcome.

All three of these projects are in beta and need people to play with them. Please check them out!
