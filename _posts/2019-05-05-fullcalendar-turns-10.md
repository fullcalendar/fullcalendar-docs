---
title: 'From Dead Code to Company: The FullCalendar JS Lib Turns 10'
date: 2019-05-05T00:00:00+00:00
is_secret: true
---

I've been working on the FullCalendar for a really long time. Though I couldn't remember exactly *how* long, so I dove into the archives of old releases. I found the source code for [version 1.0.0](#). Wow, I sure did love deeply nested functions and nonsensical variable names (does `bo` stand for body odor?). And tabs!? I'm a different person now, don't worry.

But when my eyes stumbled across the release date (obviously formatted in ISO8601), I was shocked. I've really been working on FullCalendar for TEN years!? What have I been doing all this time? Just endlessly switching build systems? (Make -> Grunt -> Gulp -> Webpack -> Rollup) Well yeah, but also a TON of bugfixes, a lot of new features, a fair bit of doing nothing, and all the things *outside* of development you wouldn't expect.

This blog post is a stroll down memory lane, an attempt to summarize what the heck I've been doing over the past 10 years as I grew FullCalendar from hobby project to company. It's now my full-time gig. I'm the only full-time employee in agile organization of contractors and contributors. It's allowing me to do the digital nomad thing (hola from Medellín, Colombia!) But things weren't always like this, so let's take a look:



The Y Combinator Days
---------------------
-1 year (2008 - 2009)

A friend and I were accepted into the world's most prestigious startup incubator: [Y Combinator](#). We had the noble goal of creating another Content Management System the world didn't need. That's a bit harsh, we had the goal of fixing "group-based" "collaborative" website publishing, but the results were lackluster. When Paul Graham, our coding idol, told us our product was shit, it didn't feel very good!

We flailed around, switching ideas, changing names from "Orgu" (yuck!) to "People and Pages", and eventually throwing in the towel. I was depressed, but at least I had a big heap of useless JS and PHP to keep me company. I needed a new job. What's the best way to prove you're a good potential engineering hire? Have open source contributions! So, I took the event-scheduling functionality of our defunct product, extracted the JS, and open sourced it.


Thanks John Resig!
------------------
Birth Day (Apr 2009)

I spent one afternoon turning the calendar functionality into a proper jQuery plugin. I then published v1 on the now-defunct jQuery Plugin Registry. Guess what happened? John Resig, THE creator of jQuery, saw it and tweeted about it!

(insert tweet here)

So cool! My website received a huge spike in traffic and all of a sudden I was the maintainer or a semi-popular open-source JS project. I rode that high for quite a while, gleefully improving the API and fixing bugs. I encountered just about every DST-related bug known to man in the first 6 months. Turns out not everyone is in the America/Chicago timezone.


Turning Up
----------
Apr 2009 - Apr 2011

I continued to add features and usage continued to increase. I added jQuery UI theme support (just like John requested) and added a few new calendar "views". By April 2011, I was getting about 30k unique visitors and counting.

(graphic of Google Analytics traffic)


Burnout
-------
May 2011 - Feb 2013

After about three years of being a happy-go-lucky maintainer, I began to have doubts. Why was I investing all this time on nights and weekends? Why was I doing all this work for free when others were using it for profit? Why are people such a-holes on the issue tracker? What's the POINT!?

What followed was a period of relative inactivity for about 2 years. I made a bugfix release here and there, but I had essentially checked out. Ironically, usage continued to increase, to the point where I had about 60k uniques each month. The issue tracker, which was hosted on Google Code at the time, grew out of control. At one point there were 750 untriaged tickets.

(graphic of dude who is burnt out)


Rebirth
-------
Mar 2013

The history of FullCalendar is intertwined with my employment at [Weebly](#). I joined Weebly as their second engineer when I needed a job after my failed company. The company grew to over 200 employees and I eventually became an engineering manager. While I enjoyed exercising my soft skills as a manager, I missed coding.

The lack of coding, combined with the vague idea of FullCalendar being a potential escape hatch from corporate culture, motivated me to resume work!

I overhauled FullCalendar's internal date system, opting to rely on [MomentJS](#). With the help of the community, I built an automated test suite. As a self-identified gunslinging code ninja, I had always been opposed to automated tests, but man, these tests turned out to be SUCH a worthwhile investment. Refactors suddenly became a possibility.

(graphic of momentjs logo)

(graphic of karma logo)


New Website
-----------
Sep 2014

The project finally got its own website and domain name, fullcalendar.io. Throw your hands up for the Indian Ocean!

Unfortunately my [*personal* website](#) is still hosted at the same place. For having dedicated my whole career to improving website publishing for the masses, wow that sure is embarrassing!

(thumbnail of fc website)


Added a PayPal Button
---------------------
Aug 2015

Anyone who's ever had a pet project knows there are certain features you don't *want* to implement. Even though they might be extreeemely useful, they would turn your project from something cute and clever into something big and messy. Issue number 1234 (TODO: get exact issue) was one of these issues. It dealt with assigning events to "resources" (like employees or conference rooms). I ignored it for years.

Combine that with the state of mind I was in at the time. I wanted to make FullCalendar my "Full"-time gig. A LOT of people were using the project at that point. They weren't paying, but given the sheer numbers and my knowledge of "freemium", I figured I had to be an idiot if I couldn't generate *some* type of revenue. Maybe something similar to CKEditor, which was also a freemium JS lib.

So I took that hairy Issue 1234 and asked the FullCalendar community what they thought if I made it a *paid* feature. I had fears this would constitute selling out, abandoning my loyalty to open source. But instead, there was resounding approval, as depicted by the graphic @asdfasdf posted (TODO: get person's name) in the blog comments at the time.

I moonlighted the implementation of it over the course of a year. I released it with a simple PayPay button connected to an API hook that sent out an email with a license key. The next day I got 8 sales! (TODO: verify this number)

(graphic of what @asdfasdf posted - https://a.disquscdn.com/uploads/mediaembed/images/2098/8495/original.jpg)


Beer Money
----------
(date TODO)

Sales slowly but steadily began to climb. I added another highly requested feature to the premium offering that boosted sales even more (Issue 4567). My revenue went from beer money, to rent money, to enough money to live off of. I promised myself if the revenue ever eclipsed the salary from my day job, I would quit and pursue FullCalendar full-time. That happened around the summer of 1989 (TODO: get correct date) and I followed through with my promise.

A cool guy by the name of Dylan eventually came aboard and began to own all customer support duties, both on the private support inbox and on GitHub issues. Dylan has freed up sooo much of my time to be able to work on core development, where my time is best spent.

(graphic of person chugging beer?)


Modernizing
-----------
(date TODO)

I *could* have continued to crank out premium features to increase revenue, but instead I chose to address the increasingly audible grumbling I heard from developers. Developers didn't like that FullCalendar relied on jQuery. They also weren't thrilled about the dependency on Moment, and tangentially, they were confused by how time zones operated with FullCalendar's Moment-reliant API.

Boy do times change! Just a few years back, I was touting jQuery and Moment as key selling points!

I understood the criticism however. The DOM is much easier to work with these days, weakening the case for jQuery. Lots of developers use frameworks like React, Vue, and Angular. Having to load one of those PLUS jQuery just feels dirty. The built-in [Intl API](#) could now be relied upon for date formatting, weakening the case for Moment. These complaints were actually valid.

So, I stripped out jQuery, Moment, overhauled timezone support, modernized the whole API, switched over to a Redux-style data flow, built connectors for React/Vue/Angular (thanks to Rustam and Josh) and it only took ... drumroll please ... an entire freakin' year (ugh). Note to self: release things more incrementally.

(graphic of React/Vue/Angular logos?)


10 Years Old
------------
(May 2019)

I redesigned the website and wrote this blog post to celebrate the 10 year anniversary of FullCalendar! Also, the homepage now sports a call-to-action button and a direct link to the purchase page, which I've been told by smart people is a good idea for business.

Happy birthday FullCalendar!

(graphic of cake)

