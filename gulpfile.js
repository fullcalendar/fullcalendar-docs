const gulp = require('gulp');
const lintspaces = require('gulp-lintspaces');

gulp.task('lintspaces', function() {
  return gulp.src([
    '{_includes,_layouts,fragments,pages}/**/*.{html,md}',
    '_docs-*/**/*.{html,md}',
    '_saas/**/*.scss',
    'assets/**/*.{js,css,scss}',
    '!assets/*.*',
    '_plugins/**/*.rb',
    'scripts/**/*.sh',
    '_config.yml', // top level
    'gulpfile.js' // top level
  ])
    .pipe(lintspaces({
      editorconfig: '.editorconfig'
    }))
    .pipe(lintspaces.reporter({
      breakOnWarning: true
    }));
});
