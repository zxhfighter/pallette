var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');

var src = {
    less: 'src/css/*.less',
    css: 'dist/css',
    html: 'index.html'
};

gulp.task('serve', ['less'], function() {
    browserSync({
        server: "."
    });

    gulp.watch(src.less, ['less']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('less', function() {
    return gulp.src(src.less)
        .pipe(less())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);