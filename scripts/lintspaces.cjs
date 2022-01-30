#!/usr/bin/env node

const path = require('path')
const globby = require('globby')
const Validator = require('lintspaces')

const PROJECT_ROOT = path.join(__dirname, '..')

const FILES = [
  '{_includes,_layouts,fragments,pages}/**/*.{html,md}',
  '_docs-*/**/*.{html,md}',
  '_plugins/**/*.rb',
  'scripts/**/*.sh',
  '_config.yml', // top level
  'gulpfile.js' // top level
]

let paths = globby.sync(FILES, {
  cwd: PROJECT_ROOT
})

let validator = new Validator({
  editorconfig: path.join(PROJECT_ROOT, '.editorconfig')
})

for (let thePath of paths) {
  validator.validate(
    path.join(PROJECT_ROOT, thePath)
  )
}

let errors = validator.getInvalidFiles()
let errorCnt = Object.keys(errors).length

if (errorCnt) {
  console.error(`${errorCnt} lintspaces errors.`)
  console.error(errors)
  process.exit(1)

} else {
  console.log('No lintspaces errors.')
}
