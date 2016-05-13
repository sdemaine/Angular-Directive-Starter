var gulp = require('gulp'),
    inject = require('gulp-inject'),
    watch = require('gulp-watch');

var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function() {
    return gulp.src(['**/*.tmpl.html'])
        .pipe(templateCache())
        .pipe(gulp.dest('./'));
});
``
gulp.task('index', ['templates'], function() {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['app.js', 'routing.js', './**/*.js', '!./node_modules/**/*', '!gulpfile.js', './styles/**/*.css'], {
        read: false
    });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(['**/*.js', '**/*.tmpl*', '!templates.js'], ['index']);
});
