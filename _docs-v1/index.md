---
# we actually want "/docs/v1" (without the trailing slash),
# but wildcard URL for doc articles confuses things.
permalink: /docs/v1/

layout: docs-landing

children:
  - title: Getting Started
    children:
      - intro
      - date-library
  - title: Overall Display
    children:
      - toolbar
      - theme
      - sizing
  - title: Views
    children:
      - month-view
      - agenda-view
      - basic-view
      - view-api
  - title: Date & Time
    children:
      - date-display
      - date-navigation
      - week-numbers
      - date-clicking-selecting
  - title: Events
    children:
      - event-data
      - event-display
      - event-clicking-hovering
      - event-dragging-resizing
  - title: International
    children:
      - localization
  - title: Misc
    children:
      - deprecated
---
