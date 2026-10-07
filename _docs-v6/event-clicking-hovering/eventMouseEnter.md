---
title: eventMouseEnter
type: callback
---

Triggered when the user mouses over an event. Similar to the native [mouseenter](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter).

<div class='spec' markdown='1'>
function( *mouseEnterInfo* ) { }
</div>

`mouseEnterInfo` is a plain object with the following properties:

<table>

<tr>
<th>event</th>
<td markdown='1'>
The associated [Event Object](event-object).
</td>
</tr>

<tr>
<th>el</th>
<td markdown='1'>
The HTML element for this event.
</td>
</tr>

<tr>
<th>jsEvent</th>
<td markdown='1'>
The native JavaScript event with low-level information such as click coordinates.
</td>
</tr>

<tr>
<th>view</th>
<td markdown='1'>
The current [View Object](view-object).
</td>
</tr>

</table>

Unlike some other event-related interactions, `eventMouseEnter` does not require the `interaction` plugin.

## Hover Card / Tooltip (no external library)

Rather than reaching for a tooltip library — whose DOM attachment model often conflicts with FullCalendar's rendering cycle — you can build a dependency-free hover card using `eventMouseEnter`, `eventMouseLeave`, and a `position: fixed` element driven by `getBoundingClientRect()`.

The key insight is a **short hide delay** (≈120 ms): this gives the cursor time to travel from the event pill to the card without the card disappearing mid-transit. Wiring `mouseenter`/`mouseleave` on the card itself cancels or restarts that timer.

### Vanilla JS example

```js
let hoverEl = null;
let hideTimer = null;

function cancelHide() { clearTimeout(hideTimer); }
function scheduleHide() { hideTimer = setTimeout(removeCard, 120); }

function removeCard() {
  if (hoverEl) { hoverEl.remove(); hoverEl = null; }
}

function showCard(event, rect) {
  removeCard();
  const CARD_W = 260;
  const left = (rect.right + 8 + CARD_W > window.innerWidth)
    ? rect.left - CARD_W - 8   // flip left if near right edge
    : rect.right + 8;
  const top = Math.max(8, Math.min(rect.top, window.innerHeight - 200 - 12));

  hoverEl = document.createElement('div');
  hoverEl.className = 'fc-hover-card';
  hoverEl.style.cssText =
    `position:fixed;left:${left}px;top:${top}px;width:${CARD_W}px;z-index:9999;` +
    'background:#fff;border:1px solid #ddd;border-radius:8px;padding:12px;box-shadow:0 4px 20px rgba(0,0,0,.15)';
  hoverEl.innerHTML = `<strong>${event.title}</strong><br>${event.startStr}`;
  hoverEl.addEventListener('mouseenter', cancelHide);
  hoverEl.addEventListener('mouseleave', scheduleHide);
  document.body.appendChild(hoverEl);
}

var calendar = new Calendar(calendarEl, {
  // ...
  eventMouseEnter: function(info) {
    cancelHide();
    showCard(info.event, info.el.getBoundingClientRect());
  },
  eventMouseLeave: scheduleHide,
});
```

### Viewport collision

- **Horizontal**: if `rect.right + cardWidth > window.innerWidth`, render to the left of the event instead.
- **Vertical**: clamp `top` to `window.innerHeight - cardHeight - 12` so the card never clips the bottom of the viewport.

### React / Vue / Angular

In component frameworks, replace the imperative DOM manipulation with state:

```jsx
// React (abbreviated)
const [hoverCard, setHoverCard] = useState(null);
const hideTimer = useRef(null);
const cancelHide = () => clearTimeout(hideTimer.current);
const scheduleHide = () => { hideTimer.current = setTimeout(() => setHoverCard(null), 120); };

<FullCalendar
  eventMouseEnter={(arg) => {
    cancelHide();
    const r = arg.el.getBoundingClientRect();
    setHoverCard({ event: arg.event, x: r.right + 8, y: r.top });
  }}
  eventMouseLeave={scheduleHide}
/>

{hoverCard && (
  <div
    style={{ position: 'fixed', left: hoverCard.x, top: hoverCard.y, zIndex: 9999 }}
    onMouseEnter={cancelHide}
    onMouseLeave={scheduleHide}
  >
    <strong>{hoverCard.event.title}</strong>
  </div>
)}
```

This pattern requires no additional packages and works with any FullCalendar view.
