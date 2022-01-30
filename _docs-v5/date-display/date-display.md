---
title: Date & Time Display
children:
  - title: Whole-day Settings
    children:
      - weekends
      - hiddenDays
      - dayHeaders
      - dayHeaderFormat
      - dayMinWidth
      - article: day-header-render-hooks
        points:
          - dayHeaderClassNames
          - dayHeaderContent
          - dayHeaderDidMount
          - dayHeaderWillUnmount
      - article: day-cell-render-hooks
        points:
          - dayCellClassNames
          - dayCellContent
          - dayCellDidMount
          - dayCellWillUnmount
  - title: Time-Axis Settings
    children:
      - slotDuration
      - slotLabelInterval
      - slotLabelFormat
      - slotMinTime
      - slotMaxTime
      - scrollTime
      - scrollTimeReset
      - article: slot-render-hooks
        points:
          - slotLabelClassNames
          - slotLabelContent
          - slotLabelDidMount
          - slotLabelWillUnmount
          - slotLaneClassNames
          - slotLaneContent
          - slotLaneDidMount
          - slotLaneWillUnmount
  - title: Methods
    children:
      - scrollToTime
  - title: Callbacks
    children:
      - datesSet
related:
  - firstDay
  - showNonCurrentDates
---

Settings that control presence/absense of dates as well as their styling and text. These settings work across a variety of different views.
