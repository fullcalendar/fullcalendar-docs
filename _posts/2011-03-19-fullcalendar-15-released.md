---
id: 9
title: FullCalendar 1.5 Released
date: 2011-03-19T17:00:00+00:00
author: arshaw
layout: post
guid: http://7
excerpt_separator: <!--more-->
dsq_thread_id:
  - "1735760452"
---
<div style="margin: 1em 0; text-align: left;">
  Today marks the release of FullCalendar 1.5, which contains improvements in theming and visual customization, as well as increased flexibility with the JavaScript API. It also marks the first time a release has been announced on this shiny new blog, an upgrade from the boring changelog format.<!--more-->
</div>

<div>
  <!--BLOG_SUMMARY_END-->
</div>

<h2 style="text-align: left;">
  New Default Look
</h2>

<div style="margin: 1em 0; text-align: left;">
  FullCalendar has always provided a default styling for its buttons that looks consistent across all browsers (including the IEs) without using any image dependencies. That styling now looks more sleek and modern:
</div>

<div>
  <div style="text-align: center;">
    <div style="display: block; font-size: 90%; margin-top: -10px; margin-bottom: 10px;">
      <img class="alignnone size-full wp-image-29" alt="after" src="/assets/images/blog/2011/03/after.png" width="210" height="106" />
    </div>
  </div>
</div>

<div style="margin: 1em 0; text-align: center;">
  compared to the old version:
</div>

<div>
  <div style="text-align: center;">
    <div style="display: block; font-size: 90%; margin-top: -10px; margin-bottom: 10px;">
      <img class="alignnone size-full wp-image-30" alt="before" src="/assets/images/blog/2011/03/before.png" width="205" height="104" />
    </div>
  </div>
</div>

<h2 style="text-align: left;">
  HTML/CSS Restructuring and jQuery UI Theming
</h2>

<div style="margin: 1em 0; text-align: left;">
  A lot of FullCalendar&#8217;s internal HTML, CSS, and class names have been changed in order to simplify the codebase and solve some bugs. This might be a backwards-compatibility issue for developers that have written advanced CSS.
</div>

<div style="margin: 1em 0; text-align: left;">
  This changes the way FullCalendar inherits jQuery UI theme styles (for the better). If you are familiar with the <a title="" href="http://jqueryui.com/themeroller/" target="_blank">jQuery UI ThemeRoller</a>, it separates the &#8220;Clickable&#8221; button styles from the &#8220;Header&#8221; and &#8220;Content&#8221; styles so you can manipulate them independently.
</div>

<div style="margin: 1em 0; text-align: left;">
  <p>
    Here is how the stock &#8220;Cupertino&#8221; theme looks, which is now bundled with FullCalendar:
  </p>
</div>

<div>
  <div style="text-align: center;">
    <div style="display: block; font-size: 90%; margin-top: -10px; margin-bottom: 10px;">
      <img class="alignnone size-full wp-image-31" alt="8854370" src="/assets/images/blog/2011/03/8854370.png" width="438" height="354" 
	   sizes="(max-width: 438px) 100vw, 438px" />
    </div>
  </div>
</div>

<h2 style="text-align: left;">
  Event Colors
</h2>

<div style="margin: 1em 0; text-align: left;">
  It has always been a bit of a pain to change the color of your calendar&#8217;s events. It has traditionally been done through a [rather complicated] CSS statement you had to write by hand. However, the new preferred way of coloring events is through the <em>eventColor</em>, <em>eventBackgroundColor</em>, <em>eventBorderColor</em>, and <em>eventTextColor</em> options in the JavaScript (<a title="" href="http://arshaw.com/fullcalendar/docs/event_rendering/Colors/">more info</a>).
</div>

<div style="margin: 1em 0; text-align: left;">
  You can also change the color of individual events using the <em>color</em>, <em>backgroundColor</em>, <em>borderColor</em>, and <em>textColor</em> options of each <a title="" href="http://arshaw.com/fullcalendar/docs/event_data/Event_Object/">Event Object</a>.
</div>

<div style="margin: 1em 0; text-align: left;">
  Additionally, you can easily change the color of all events within a given &#8220;event source&#8221; (talked about in the next section&#8230;)
</div>

<h2 style="text-align: left;">
  Event Source Options
</h2>

<div style="margin: 1em 0; text-align: left;">
  Many developers have used the <a title="" href="http://arshaw.com/fullcalendar/docs/event_data/eventSources/">eventSources</a> option to include events from a number of different feeds onto a single calendar. Developers are now able to embed options into these event sources, such as <em>color</em> and <em>className</em>. This avoids having to include the same data within every event of a feed.
</div>

<div style="margin: 1em 0; text-align: left;">
  If you want to use this new feature, it requires you to write your event sources a <a href="http://arshaw.com/fullcalendar/docs/event_data/Event_Source_Object/">little differently</a>.
</div>

<div style="margin: 1em 0; text-align: left;">
  One of the cool things about this new format is that you can include any of the <a title="" href="http://api.jquery.com/jQuery.ajax/" target="_blank">jQuery $.ajax</a> settings in your JSON feed sources! This lets you easily pass additional parameters to your server-side script, change from GET to POST, or even listen to callbacks such as <em>success</em> or <em>error</em> (<a href="http://arshaw.com/fullcalendar/docs/event_data/events_json_feed/">more info</a>).
</div>

<div style="margin: 1em 0; text-align: left;">
  <strong>Issues that have been closed:</strong></p> 
  
  <ul>
    <li>
      Event coloring through Event properties [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=117" target="_blank">117</a>]
    </li>
    <li>
      Day numbers not visible in certain jQuery UI themes [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=299" target="_blank">299</a>]
    </li>
    <li>
      Default cursor for non-editable no-url events [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=327" target="_blank">327</a>]
    </li>
    <li>
      Allow json feed caching [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=355" target="_blank">355</a>]
    </li>
    <li>
      Control $.ajax options when fetching feed [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=386" target="_blank">386</a>]
    </li>
    <li>
      Don't use  tags for events with no URLs [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=395" target="_blank">395</a>]
    </li>
    <li>
      SSL in IE7 forces a nonsecure popup [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=504" target="_blank">504</a>]
    </li>
    <li>
      Ajax error callback [<a title="" href="http://code.google.com/p/fullcalendar/issues/detail?id=754" target="_blank">754</a>]
    </li>
  </ul>
  
  <p>
    <a href="http://arshaw.com/js/fullcalendar-1.5/changelog.txt" target="_blank">View the Changelog</a>
  </p>
</div>