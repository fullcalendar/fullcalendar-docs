---
title: Event Dragging & Resizing
children:
  - external-dragging
  - other-calendar-dragging
  - third-party-dragging
  - title: Flags
    children:
      - editable
      - eventStartEditable
      - eventResizableFromStart
      - eventDurationEditable
      - eventResourceEditable
      - droppable
  - title: Effects
    children:
      - eventDragMinDistance
      - dragRevertDuration
      - dragScroll
      - snapDuration
      - allDayMaintainDuration
  - title: Control
    children:
      - eventOverlap
      - eventConstraint
      - eventAllow
      - dropAccept
  - title: Callbacks
    children:
      - eventDragStart
      - eventDragStop
      - eventDrop
      - drop
      - eventReceive
      - eventResizeStart
      - eventResizeStop
      - eventResize
related:
  - validRange
  - touch
demos:
  - event-dragging-resizing-demo
  - external-dragging-demo
  - event-constraint-demo
---

How to enable and control where the user can drag-n-drop and resize events. Start by setting the [editable](editable) setting to `true`. If you want to allow external elements to be dropped onto your calendar, visit the [droppable](droppable), [drop](drop), and [eventReceive](eventReceive) articles.
