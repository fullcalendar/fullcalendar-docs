---
title: CSS Customization
---

This article describes the various techniques for customizing the CSS of your calendar.


## When NOT to use CSS customization

Firstly, you should NOT use CSS customization if a setting already exists for what you want to achieve. For example, if you want to change the color of the events on your calendar, use the [eventColor](eventColor) setting. For more event-related visual customization settings, see [Event Display](event-display).


## Technique 1) Overriding Whole Properties

This is the most basic technique you probably already know how to do. Use the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/css) or equivelant to pinpoint the element you want to customize. Then, view its active CSS statements. For example, if you want to customize the day-of-week headers at the top of dayGrid view, you'll see this CSS:

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


<h2 id='css-variables'>Technique 2) Customizing CSS Variables</h2>

It's possible to customize fullcalendar's CSS in a more surgical way. FullCalendar's CSS source code was originally written with [custom CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), aka "CSS variables". These variables are compiled down to plain CSS statements that all supported browsers can understand. However, fullcalendar also leaves these variables in the compiled CSS code for you to override.

To override these variables, you must be [using a build system](initialize-es6) like Webpack or Rollup. Then, you must install the following:

- [PostCSS](https://postcss.org/) - a system that allows you to transform your project's generated CSS in various ways. For Webpack, use [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
- Either [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) or [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables)
- [postcss-calc](https://github.com/postcss/postcss-calc)

<a href='https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/custom-css-vars' class='more-link'>View an example repo that does all this</a>

Once PostCSS and all necessary plugins are installed, begin to configure PostCSS. You can do this in a number of ways, but the easiest is to create a `postcss.config.js` in the root of your project:

```js
module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: false, // completely reduce all css vars
      importFrom: [
        'src/fullcalendar-vars.css' // look here for the new values
      ]
    }),
    require('postcss-calc')
  ]
}
```

The above example uses the [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) plugin to compile the variables. You can use the [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) plugin instead, but be aware that you'll need to configure the `variables` key-value map instead of the `importFrom` setting.

Once you've wired up `postcss-custom-properties`, write a `src/fullcalendar-vars.css` file that contains the new variable values:

```css
:root {
  --fc-border-color: black;
  --fc-daygrid-event-dot-width: 5px;
}
```

This example customizes just two variables, but there are many more! You can browser fullcalendar's source code to see all available variables:

- [common CSS variables](https://github.com/fullcalendar/fullcalendar/blob/master/packages/common/src/styles/vars.css)
- [daygrid CSS variables](https://github.com/fullcalendar/fullcalendar/blob/master/packages/daygrid/src/styles/vars.css)
- [list CSS variables](https://github.com/fullcalendar/fullcalendar/blob/master/packages/list/src/styles/vars.css)
- and potentially other plugins, located in `<package-root>/src/styles/vars.css`
