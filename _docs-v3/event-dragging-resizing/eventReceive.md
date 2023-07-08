---
title: eventReceive
type: callback
since_version: 2.2
---

Called when a valid external jQuery UI draggable, containing event data, has been dropped onto the calendar.

<div class='spec' markdown='1'>
function( *event* ) { }
</div>

This function is triggered after the [drop](drop) callback has been called and after the new event has already been rendered on the calendar. `event` is the [Event Object](event-object) associated with the dropped element.

The [droppable](droppable) setting must be activated and the necessary jQuery UI requirements must be fulfilled.

The [eventDrop](eventDrop) callback *does not* get called when an external event is dragged onto the calendar.


## Associating Event Data

To make a normal draggable element represent an event, the element must have "data" associated with it, labeled as "event". It must be `1`, `true`, or an object. This can be done through jQuery's [data method](https://api.jquery.com/data/) in JavaScript:

```js
$('.draggable').data('event', { title: 'my event' });
```

[View a live demo](external-dragging-demo) of the above technique.

Alternatively, you can use an HTML5 data attribute:

```html
<div class='draggable' data-event='{"title":"my event"}' />
```

If done through an HTML5 attribute, make sure it is **valid JSON**! For example, property names must be enclosed in double quotes! For more information, see [parseJSON](https://api.jquery.com/jquery.parsejson/).

In the provided object, any of the [Event Object](event-object) properties can be specified. There are a few additional properties that provide special functionality:

`start` or `time`
:   A time-of-day an event should start if dragged onto a whole day. A [Duration](moment-duration)-ish input like `'09:00'` (9am).

`duration`
:   The the duration of the event when dropped. A [Duration](moment-duration)-ish input like `'03:00'` (3 hours). If not specified, [defaultAllDayEventDuration](defaultAllDayEventDuration) or [defaultTimedEventDuration](defaultTimedEventDuration) will apply.

`stick`
:   Whether the event should persist after the initial render. See the `stick` flag in the [renderEvent method](renderEvent).


These special properties can either be specified in the provided event object, or they can be standalone data attributes:

```html
<div class='draggable' data-event='1' data-duration='03:00' />
```

## Overlapping and Constraining

When there is event data associated with the drag, normal event overlap/constraint rules apply, such as [eventOverlap](eventOverlap) and [eventConstraint](eventConstraint).

## Resources

When an event has been newly dropped on a resource, the [Event Object's](event-object) `resourceId` will be updated to reflect.
