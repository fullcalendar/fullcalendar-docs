---
title: Content Security Policy (CSP)
---

If your application has a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), there are some things to consider.


## Icon Font

FullCalendar's icon-font is embedded into its CSS with a `data:` protcol. You must whitelist the `data:` protocol for fonts:

```html
<meta http-equiv='Content-Security-Policy' content="font-src data:">
```

[This ticket](https://github.com/fullcalendar/fullcalendar/issues/5685) proposes moving to SVG icons to avoid this problem.


## Dynamically-Generated Styles

FullCalendar injects its own `<style>` tags onto the page. Your CSP might prohibit this. The solution is to use a [nonce value](https://content-security-policy.com/nonce/).

On your server, generate a random nonce value (`abc123` in this example). Then, register it with your CSP. The following line achieves this while also whitelisting the icon-font mentioned above:

```html
<meta http-equiv='Content-Security-Policy' content="default-src 'nonce-abc123'; font-src data:">
```

Then, when writing your application's `<script>` and `<link>` tags, include the `nonce` attribute:

```html
<script src='fullcalendar/dist/index.js' nonce='abc123'></script>
<script src='app/index.js' nonce='abc123'></script>
```

Starting with **v6.1.0**, FullCalendar is able to output nonce values.

By default, FullCalendar will scan for the first `nonce` attribute it sees in any `<script>` tag. It will use this nonce value when injecting its own `<style>` tags, essentially outputting `<style nonce='abc123'>`.

You may override this behavior by including a meta at the head of your page. It must have the name `csp-nonce`:

```html
<meta name='csp-nonce' content='qwerty456' />
```

For nonce values to be secure, they must be randomly generated on the server and only used once. Consult documentation elsewhere on the web for best practices.
