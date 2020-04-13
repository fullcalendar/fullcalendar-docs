---
title: Getting Started
---

There are a few different ways to install the FullCalendar library.


## Individual Packages

Use fullcalendar's individual packages if you use an ES6 build system like Webpack. First, install them from [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/). You'll first need to install FullCalendar’s `core` package as well as any plugins. Example:

```sh
npm install --save @fullcalendar/core@5.0.0-beta.2 @fullcalendar/daygrid@5.0.0-beta.2
```

To initialize a calendar, <a href='initialize-es6' class='more-link'>read about using an ES6 build system</a>


## Pre-built Bundles

You might want to avoid a built system by [initializing fullcalendar with script tags and globals](initialize-globals). Or, you might simply want to avoid dealing with individual plugins. If so, use one of the pre-built bundles:

- `fullcalendar`
  - **Download**: [fullcalendar-5.0.0-beta.2.zip](https://github.com/fullcalendar/fullcalendar/releases/download/v5.0.0-beta.1/fullcalendar-5.0.0-beta.2.zip)
  - **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar?version=5.0.0-beta.2)
  - **NPM:** `npm install fullcalendar@5.0.0-beta.2`
- `fullcalendar-scheduler` - [a premium product](premium)
  - **Download**: [fullcalendar-scheduler-5.0.0-beta.2.zip](https://github.com/fullcalendar/fullcalendar-scheduler/releases/download/v5.0.0-beta.1/fullcalendar-scheduler-5.0.0-beta.2.zip)
  - **CDN:** [jsdelivr](https://www.jsdelivr.com/package/npm/fullcalendar-scheduler?version=5.0.0-beta.2)
  - **NPM:** `npm install fullcalendar-scheduler@5.0.0-beta.2`


## Bundle Contents

Here are the packages inside of each bundle:

- `fullcalendar`
  - the `main.js` and `main.css` include the following packages:
    - `@fullcalendar/core`
    - `@fullcalendar/interaction`
    - `@fullcalendar/daygrid`
    - `@fullcalendar/timegrid`
    - `@fullcalendar/list`
    - `@fullcalendar/bootstrap`
  - the bundle includes the following packages in separate files within the same directory:
    - `@fullcalendar/google-calendar`
    - `@fullcalendar/rrule`
    - `@fullcalendar/luxon`
    - `@fullcalendar/moment`
    - `@fullcalendar/moment`
- `fullcalendar-scheduler`
  - the `main.js` and `main.css` include the following packages:
    - `@fullcalendar/core`
    - `@fullcalendar/interaction`
    - `@fullcalendar/daygrid`
    - `@fullcalendar/timegrid`
    - `@fullcalendar/list`
    - `@fullcalendar/bootstrap`
    - `@fullcalendar/scrollgrid` ([premium](premium))
    - `@fullcalendar/timeline` ([premium](premium))
    - `@fullcalendar/resource-common` ([premium](premium))
    - `@fullcalendar/resource-daygrid` ([premium](premium))
    - `@fullcalendar/resource-timegrid` ([premium](premium))
    - `@fullcalendar/resource-timeline` ([premium](premium))
  - the bundle includes the following packages in separate files within the same directory:
    - `@fullcalendar/google-calendar`
    - `@fullcalendar/rrule`
    - `@fullcalendar/luxon`
    - `@fullcalendar/moment`
    - `@fullcalendar/moment`
