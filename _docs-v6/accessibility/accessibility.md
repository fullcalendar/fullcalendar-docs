---
title: Accessibility
children:
  - eventInteractive
  - article: hints
    points:
      - buttonHints
      - viewHint
      - navLinkHint
      - timeHint
      - eventHint
      - closeHint
related:
  - customButtons
  - touch
  - print
layout: docs-sublanding
---

FullCalendar leverages [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) techniques for increased accessibility with keyboard usage and screen readers. These improvements are available in versions [5.10.0](https://github.com/fullcalendar/fullcalendar/releases/tag/v5.10.0) and later.

More specifically, [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and `title` attributes annotate interactive HTML elements within the calendar. Furthermore, any interactive element can be focused with the tab key.

Options related to accessibility:
