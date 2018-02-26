const gulp = require('gulp');
const lintspaces = require('gulp-lintspaces');

gulp.task('lintspaces', function() {
  return gulp.src([
    '{_data,_includes,_layouts,_plugins,_saas,fragments,pages}/**/*.*',
    '_docs-*/**/*.*',
    'bin/*',
    'assets/**/*.{js,css,scss}',
    '_config.yml', // top level
    'gulpfile.js' // top level
  ])
    .pipe(lintspaces({
      editorconfig: '.editorconfig'
    }))
    .pipe(lintspaces.reporter());
});
