
# FullCalendar Docs

This repo contains the static content for [fullcalendar.io/docs](https://fullcalendar.io/docs)

Documentation articles are found in directories like `_docs-*`.

Made with [Jekyll](https://jekyllrb.com/).


## Reporting Problems

See a problem with the docs? Create a ticket in the [main dev repo's issue tracker](https://github.com/fullcalendar/fullcalendar/issues). All docs-related bugs have the [docs label](https://github.com/fullcalendar/fullcalendar/issues?q=is%3Aopen+is%3Aissue+label%3ADocs).


## Installation

Clone this repo:

```sh
git clone git@github.com:fullcalendar/fullcalendar-docs.git
cd fullcalendar-docs
```

Prerequisites:

- NPM / PNPM
- Ruby 2.x
- [Rubygem bundler](https://bundler.io/) (`gem install bundler`)


## CLI

```sh
npm install

# watch & serve while developing
npm run dev

# build into _site directory
npm run build
```


## Contributing

To make edits to the documentation please submit a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) against the `main` branch of this repo.

Ensure linting passes before submitting PRs:

```sh
npm run lint
```
