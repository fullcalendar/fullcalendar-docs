---
title: CSS Customization
---

This article describes the various techniques for customizing the CSS of your calendar.


## When NOT to use CSS customization

Firstly, you should NOT use CSS customization if a setting already exists for what you want to achieve. For example, if you want to change the color of the events on your calendar, use the [eventColor](eventColor) setting. For more event-related visual customization settings, see [Event Display](event-display).


<h2 id='css-properties'>Technique 1) Custom Properties</h2>

To surgically customize CSS, set [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) on the root selector:

```css
:root {
  --fc-border-color: black;
  --fc-daygrid-event-dot-width: 5px;
}
```

This example customizes just two variables, but there are many more! You can browser fullcalendar's source code to see all available variables:

- [common CSS variables](https://github.com/fullcalendar/fullcalendar/blob/v6/packages/common/src/styles/vars.css)
- [daygrid CSS variables](https://github.com/fullcalendar/fullcalendar/blob/v6/packages/daygrid/src/styles/vars.css)
- [list CSS variables](https://github.com/fullcalendar/fullcalendar/blob/v6/packages/list/src/styles/vars.css)
- and potentially other plugins, located in `<package-root>/src/styles/vars.css`



## Technique 2) Overriding Properties

Use the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/css) or equivelant to pinpoint the element you want to customize. Then, view its active CSS statements. For example, if you want to customize the day-of-week headers at the top of dayGrid view, you'll see this CSS:

```css
.fc .fc-col-header-cell-cushion {
  display: inline-block;
  padding: 2px 4px;
}
```

Imagine you want to adjust the top/bottom padding which is curently set to `2px`. Include this statement in a stylesheet somewhere else in your project:

```css
.fc .fc-col-header-cell-cushion { /* needs to be same precedence */
  padding-top: 5px; /* an override! */
  padding-bottom: 5px; /* an override! */
}
```

As long as your statement is loaded AFTER fullcalendar's stylesheets, your padding will take effect. If your statement is NOT written after, or if your statement does not have the same precedence as the original, you'll need to think about CSS [precedence](https://css-tricks.com/precedence-css-order-css-matters/) and [specificity](https://css-tricks.com/specifics-on-css-specificity/).

While this technique is rather simple to implement, it is brittle because if fullcalendar adjusts its CSS statements in future versions, you might need to adjust your CSS as well.
