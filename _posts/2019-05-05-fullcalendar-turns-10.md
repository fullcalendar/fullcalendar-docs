---
title: 'From Dead Code to Company: The FullCalendar JS Lib Turns 10'
date: 2019-05-05T00:00:00+00:00
is_secret: true
---

I've been working on the FullCalendar for a really long time. Though I couldn't remember exactly *how* long, so I dove into the archives of old releases. I found the source code for [version 1.0.0](#). Wow, I sure did love deeply nested functions and nonsensical variable names (does `bo` stand for body odor?). And tabs!? I'm a different person now, don't worry.

But when my eyes stumbled across the release date (obviously formatted in ISO8601), I was shocked. I've really been working on FullCalendar for TEN years!? What have I been doing all this time? Just endlessly switching build systems? (Make -> Grunt -> Gulp -> Webpack -> Rollup) Well yeah, but also a TON of bugfixes, a lot of new features, a fair bit of doing nothing, and all the things *outside* of development you wouldn't expect.

This blog post is a stroll down memory lane, an attempt to summarize what the heck I've been doing over the past 10 years as I grew FullCalendar from hobby project to company. It's now my full-time gig. I'm the only full-time employee in agile organization of contractors and contributors. It's allowing me to do the digital nomad thing (hola from Medellín, Colombia!) But things weren't always like this, so let's take a look:

<div class='vtimeline'>
<div class='vtimeline__event' markdown='1'>


## The Y Combinator Days <span class='vtimeline__date'>-1 year (2008 - 2009)</span>

<img src='{{ site.baseurl }}/assets/images/10-year/yc.svg' width='200' height='200' style='float:right; margin: 0 -125px 40px 40px' />

A friend and I were accepted into the world's most prestigious startup incubator: [Y Combinator](#). We had the noble goal of creating another Content Management System the world didn't need. That's a bit harsh, we had the goal of fixing "group-based" "collaborative" website publishing, but the results were lackluster. When Paul Graham, our coding idol, told us our product was shit, it didn't feel very good!

We flailed around, switching ideas, changing names from "Orgu" (yuck!) to "People and Pages", and eventually throwing in the towel. I was depressed, but at least I had a big heap of useless JS and PHP to keep me company. I needed a new job. What's the best way to prove you're a good potential engineering hire? Have open source contributions! So, I took the event-scheduling functionality of our defunct product, extracted the JS, and open sourced it.


</div>
<div class='vtimeline__event' markdown='1'>


## Thanks John Resig! <span class='vtimeline__date'>Birth Day (Apr 2009)</span>

I spent one afternoon turning the calendar functionality into a proper jQuery plugin. I then published v1 on the now-defunct jQuery Plugin Registry. Guess what happened? John Resig, THE creator of jQuery, saw it and tweeted about it!

<div style='margin:2em'>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I really like the jQuery Full Calendar plugin: http://bit.ly/Dp71L if it used the jQuery UI Themeroller it&#39;d be perfect.</p>&mdash; John Resig (@jeresig) <a href="https://twitter.com/jeresig/status/1642888023?ref_src=twsrc%5Etfw">April 28, 2009</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

So cool! My website received a huge spike in traffic and all of a sudden I was the maintainer of a semi-popular open-source JS project. I rode that high for quite a while, gleefully improving the API and fixing bugs. I encountered just about every DST-related bug known to man in the first 6 months. Turns out not everyone is in the America/Chicago timezone.


</div>
<div class='vtimeline__event' markdown='1'>


## Turning Up <span class='vtimeline__date'>Apr 2009 - Apr 2011</span>

I continued to add features and usage continued to increase. I added jQuery UI theme support (just like John requested) and added a few new calendar "views". By April 2011, I was getting about 38k unique visitors and counting.

<img src='{{ site.baseurl }}/assets/images/10-year/ga.png' width='650' height='187' style='margin-left:2em' />


</div>
<div class='vtimeline__event' markdown='1'>


## Burning Out <span class='vtimeline__date'>May 2011 - Feb 2013</span>

<img src='{{ site.baseurl }}/assets/images/10-year/hustle-and-bustle.jpg' width='350' height='258' style='float:right; margin: 0 -255px 40px 40px' />

After about three years of being a happy-go-lucky maintainer, I began to have doubts. Why was I investing all this time on nights and weekends? Why was I doing all this work for free when others were using it for profit? Why are people such a-holes on the issue tracker? What's the POINT!?

What followed was a period of relative inactivity for about 2 years. I made a bugfix release here and there, but I had essentially checked out. Ironically, usage continued to increase, to the point where I had about 60k uniques each month. The issue tracker, which was hosted on Google Code at the time, grew out of control. At one point there were 750 untriaged tickets.


</div>
<div class='vtimeline__event' markdown='1'>


## Rebirth <span class='vtimeline__date'>Mar 2013</span>

<img src='{{ site.baseurl }}/assets/images/10-year/momentjs.png' width='300' height='124' style='float:right; margin: 0 -225px 40px 40px' />
<img src='{{ site.baseurl }}/assets/images/10-year/karma.png' width='300' height='70' style='clear: right; float:right; margin: 40px -225px 40px 40px' />

The history of FullCalendar is intertwined with my employment at [Weebly](#). I joined Weebly as their second engineer when I needed a job after my failed company. The company grew to over 200 employees and I eventually became an engineering manager. While I enjoyed exercising my soft skills as a manager, I missed coding.

The lack of coding, combined with the vague idea of FullCalendar being a potential escape hatch from corporate culture, motivated me to resume work!

I overhauled FullCalendar's internal date system, opting to rely on [MomentJS](#). With the help of the community, I built an automated test suite. As a self-identified gunslinging code ninja, I had always been opposed to automated tests, but man, these tests turned out to be SUCH a worthwhile investment. Refactors suddenly became a possibility.


</div>
<div class='vtimeline__event' markdown='1'>


<img src='{{ site.baseurl }}/assets/images/10-year/newsite.png' width='350' height='366' style='float:right; margin: 0 -255px 40px 40px' />

## New Website <span class='vtimeline__date'>Sep 2014</span>

The project finally got its own website and domain name, fullcalendar.io. Throw your hands up for the Indian Ocean!

Unfortunately my [*personal* website](#) is still hosted at the same place. For having dedicated my whole career to improving website publishing for the masses, wow that sure is embarrassing!


</div>
<div class='vtimeline__event' markdown='1'>


## Added a PayPal Button <span class='vtimeline__date'>Aug 2015</span>

Anyone who's ever had a pet project knows there are certain features you don't *want* to implement. Even though they might be extreeemely useful, they would turn your project from something cute and clever into something big and messy. Issue number 1234 (TODO: get exact issue) was one of these issues. It dealt with assigning events to "resources" (like employees or conference rooms). I ignored it for years.

Combine that with the state of mind I was in at the time. I wanted to make FullCalendar my "Full"-time gig. A LOT of people were using the project at that point. They weren't paying, but given the sheer numbers and my knowledge of "freemium", I figured I had to be an idiot if I couldn't generate *some* type of revenue. Maybe something similar to CKEditor, which was also a freemium JS lib.

<img src='{{ site.baseurl }}/assets/images/10-year/shut-up.jpg' width='350' height='219' style='float:right; margin: 0 -255px 40px 40px' />

So I took that hairy Issue 1234 and asked the FullCalendar community what they thought if I made it a *paid* feature. I had fears this would constitute selling out, abandoning my loyalty to open source. But instead, there was resounding approval, as depicted by the graphic @asdfasdf posted (TODO: get person's name) in the blog comments at the time.

I moonlighted the implementation of it over the course of a year. I released it with a simple PayPay button connected to an API hook that sent out an email with a license key. The next day I got 8 sales! (TODO: verify this number)


</div>
<div class='vtimeline__event' markdown='1'>


## Beer Money <span class='vtimeline__date'>(date TODO)</span>

<img src='{{ site.baseurl }}/assets/images/10-year/beer.jpg' width='350' height='263' style='float:right; margin: 0 -255px 40px 40px' />

Sales slowly but steadily began to climb. I added another highly requested feature to the premium offering that boosted sales even more (Issue 4567). My revenue went from beer money, to rent money, to enough money to live off of. I promised myself if the revenue ever eclipsed the salary from my day job, I would quit and pursue FullCalendar full-time. That happened around the summer of 1989 (TODO: get correct date) and I followed through with my promise.

A cool guy by the name of Dylan eventually came aboard and began to own all customer support duties, both on the private support inbox and on GitHub issues. Dylan has freed up sooo much of my time to be able to work on core development, where my time is best spent.


</div>
<div class='vtimeline__event' markdown='1'>


## Modernizing <span class='vtimeline__date'>(date TODO)</span>

<img src='{{ site.baseurl }}/assets/images/10-year/react.svg' width='275' height='194' style='clear:right; float:right; margin:-20px -163px 0 -20px' />
<img src='{{ site.baseurl }}/assets/images/10-year/vue.png' width='160' height='160' style='clear:right; float:right; margin:0 -105px 0 40px' />
<img src='{{ site.baseurl }}/assets/images/10-year/angular.svg' width='200' height='200' style='clear:right; float:right; margin:0 -125px 0 40px' />

I *could* have continued to crank out premium features to increase revenue, but instead I chose to address the increasingly audible grumbling I heard from developers. Developers didn't like that FullCalendar relied on jQuery. They also weren't thrilled about the dependency on Moment, and tangentially, they were confused by how timezones operated with FullCalendar's Moment-reliant API.

Boy do times change! Just a few years back, I was touting jQuery and Moment as key selling points!

I understood the criticism however. The DOM is much easier to work with these days, weakening the case for jQuery. Lots of developers use frameworks like React, Vue, and Angular. Having to load one of those PLUS jQuery just feels dirty. The built-in [Intl API](#) could now be relied upon for date formatting, weakening the case for Moment. These complaints were actually valid.

So, I stripped out jQuery, Moment, overhauled timezone support, modernized the whole API, switched over to a Redux-style data flow, built connectors for React/Vue/Angular (thanks to Rustam and Josh) and it only took ... drumroll please ... an entire freakin' year (ugh). Note to self: release things more incrementally. That being said, the final product was spectacular.


</div>
<div class='vtimeline__event' markdown='1'>


## 10 Years Old <span class='vtimeline__date'>(May 2019)</span>

I redesigned the website and wrote this blog post to celebrate the 10 year anniversary of FullCalendar! Also, the homepage now sports a call-to-action button and a direct link to the purchase page, which I've been told by smart people is a good idea for business.

Happy birthday FullCalendar!

<img src='{{ site.baseurl }}/assets/images/10-year/cake.jpg' width='400' height='300' />


</div>
</div>
