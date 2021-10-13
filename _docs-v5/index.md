---
# we actually want "/docs" (without the trailing slash),
# but wildcard URL for doc articles confuses things.
permalink: /docs/

layout: docs-landing

children:
  - title: Getting Started
    children:
      - intro
      - premium
      - date-library
  - title: Overall Display
    children:
      - toolbar
      - theming
      - sizing
  - title: Views
    children:
      - month-view
      - timegrid-view
      - list-view
      - daygrid-view
      - timeline-view
      - vertical-resource-view
      - custom-views
      - view-api
  - title: Date & Time
    children:
      - date-display
      - date-navigation
      - date-nav-links
      - week-numbers
      - date-clicking-selecting
      - now-indicator
      - business-hours
  - title: Events
    children:
      - event-model
      - event-source
      - event-display
      - event-clicking-hovering
      - event-dragging-resizing
      - event-popover
      - background-events
  - title: Resources
    children:
      - resource-data
      - resource-display
  - title: International
    children:
      - localization
      - timeZone
  - title: Third Party
    children:
      - typescript
      - react
      - vue
      - angular
  - title: Accessibility
    children:
      - accessibility
      - touch
      - print
---
