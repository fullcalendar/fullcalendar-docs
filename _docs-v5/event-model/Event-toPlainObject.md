---
title: Event::toPlainObject
---

Serializes an [Event API Object](event-object) to a plain object that would be fit for [JSON.stringify].

<div class='spec' markdown='1'>
event.toPlainObject( *settings* )
</div>

This methods attempts to aggregate all non-empty properties. Some properties are not yet supported, such as most [recurrence](recurring-events) propreties. If the resulting object does not look as desired, it is best to write your own serialization function from scratch.

The optional `settings` argument contains properties that affect serialization:

<table>

<tr>
<th>collapseExtendedProps</th>
<td>If set to <code>true</code>, the <code>extendedProperties</code> hash will be merged into the root outputted object. If <code>false</code> (the default), <code>extendedProperties</code> will be its own object nested within the root object.</td>
</tr>

<tr>
<th>collapseColor</th>
<td>If set to <code>true</code>, and the <code>backgroundColor</code> and <code>borderColor</code> properties are identical, they will be merged and outputted as a single <code>color</code> property. If <code>false</code> (the default), they will be outputted as separate properties.</td>
</tr>

</table>

The `toPlainObject` method is aliased to the `toJSON` method so that [JSON.stringify] works.


[JSON.stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
