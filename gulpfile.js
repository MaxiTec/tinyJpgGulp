var gulp = require('gulp')
var tinyimg = require('gulp-tinyimg')
gulp.task('tinyimg', function () {
  return gulp.src('./src/*.{png,jpg}')
  .pipe(tinyimg('LnFDPkVdzr0yXDqL8vxBHGbF6YR6x3NF'))
  .pipe(gulp.dest('dist'))
})
