
# FullCalendar Website Static Content [![Build Status](https://travis-ci.org/fullcalendar/fullcalendar-site-static.svg?branch=master)](https://travis-ci.org/fullcalendar/fullcalendar-site-static)

This repo contains the static content for [fullcalendar.io](https://fullcalendar.io).

The source for documentation articles are found in directories like `_docs-*`.


## Reporting Problems

See a problem with the docs? Create a ticket in the [main dev repo's issue tracker](https://github.com/fullcalendar/fullcalendar/issues). All docs-related bugs have the [docs label](https://github.com/fullcalendar/fullcalendar/issues?q=is%3Aopen+is%3Aissue+label%3ADocs).


## Contributing

To make edits to the documentation please submit a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) against the `master` branch of this repo.


## Getting Set Up

First, [clone](https://help.github.com/articles/cloning-a-repository/) this repo.

Then, install [Jekyll](https://jekyllrb.com/) (a static-site generator) on your local machine. You can [view in-depth instructions](https://jekyllrb.com/docs/installation/), but essentially you need to have ruby available on your machine and then you can run:

```sh
gem install jekyll
```

You also need to have the [Rubygem bundler](https://bundler.io/) installed:

```sh
gem install bundler
```

Then, `cd` into the `fullcalendar-site-static` directory you cloned.

Then, run the following:

```sh
bundler install

npm install

jekyll serve --watch
```

A url will pop up, probably `http://127.0.0.1:4000`, which you can then view in a browser. If you used the `--watch` parameter, the built site will rebuild with every edit. If you want a speedier build, use the `--incremental` parameter, but be aware of its shortcoming.
