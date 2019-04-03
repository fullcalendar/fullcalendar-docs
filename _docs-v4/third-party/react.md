---
title: React Component
title_for_landing: React
---

mention samples project. mention typescript project too.
uses babel (with a "react preset") and sass
has main.jsx file that mounts the component


npm install (main lib)

```bash
npm install --save @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid
```

```jsx
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss'

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }

}
```

All attributes are just options! including events

```jsx
<FullCalendar
  defaultView="dayGridMonth"
  plugins={calendarPlugins}
  weekends={false}
  events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]}
  />
```

you see the main.scss?

```scss
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
```

callbacks

```jsx
export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar dateClick={this.handleDateClick} plugins={[ dayGridPlugin ]} />
    )
  }

  handleDateClick = (arg) => { // bind it!
    alert('clicked ' + arg.dateStr)
  }

}
```

calling api methods? (discourage, but mention defaultDate situation)

```jsx
export default class DemoApp extends React.Component {

  calendarRef = React.createRef()

  render() {
    return (
      <FullCalendar ref={this.calendarRef} plugins={[ dayGridPlugin ]} />
    )
  }

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.next()
  }

}
```
