---
title: schedulerLicenseKey
---

The `schedulerLicenseKey` setting is the license key you must enter to use premium features in premium plugins.

Example:

```js
// a premium plugin
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

var calendar = new Calendar(calendarEl, {
  schedulerLicenseKey: '<YOUR-LICENSE-KEY-GOES-HERE>',
  plugins: [resourceTimelinePlugin],
  initialView: 'resourceTimelineWeek'
});
```


<h2 id='outdated'>An Outdated License Key</h2>

Often times existing customers who purchase [FullCalendar Scheduler]({{site.baseurl}}/premium) see license key warnings when they upgrade versions. This is usually due to the expiration of the 1-year free upgrade policy that comes with Scheduler. When this happens, you can do one of two things:

1. Use a downgraded version
2. Purchase an additional year of support

To purchase an additional year, either check your email for a renewal notification or send an email to <a href='mailto:sales@fullcalendar.io'>sales@fullcalendar.io</a>


<h2 id='invalid'>An Invalid License Key</h2>

Sometimes the wrong piece of text is pasted into the `schedulerLicenseKey` setting. Make sure you use the correct key, exactly as sent in your email/invoice. It should be in the form `XXXXXXXXXX-XXX-XXXXXXXXXX`.
