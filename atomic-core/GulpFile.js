var gulp = require('gulp');
var sass = require('gulp-sass');

var order = require("gulp-order");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function styles() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
}

function styles2() {
    return gulp.src('../scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css/'));
}

var jsDest = 'js/min';

function scripts() {
    return gulp.src('js/*.js')
        .pipe(order([
            'js/enquire.js',
            'js/bootstrap.min.js',
            'js/prism.js',
            'js/spectrum-picker.js',
            'js/uncomment.js',
            'js/prism-builder.js',
            'js/velocity.js',
            'js/velocity-ui.js',
            'js/_expand-form.js',
            'js/formShowHide.js',
            'js/slideAnimation.js',
            'js/hideAll.js',
            'js/hideCode.js',
            'js/hideNotes.js',
            'js/hideTitle.js',
            'js/navSmall.js',
            'js/animateHeight.js',
            'js/editor-stuff.js',
            'js/editable-content.js'
        ], { base: './' }))
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('compiled.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
}




var jsDest2 = '../js/min';

function scripts2() {
    return gulp.src('../js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest2))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest2));
}




//Watch task
// gulp.task('default',function() {
//     gulp.watch('scss/**/*.scss',['styles']);
//     gulp.watch('../scss/**/*.scss',['styles2']);
//     gulp.watch('js/*.js',['scripts']);
//     gulp.watch('../js/*.js',['scripts2']);
// });

// gulp.task('setup', ['styles']);

// gulp.task('setup', ['styles2']);

function watch() {

    gulp.watch('scss/**/*.scss',styles);
    gulp.watch('../scss/**/*.scss',styles2);
    gulp.watch('js/*.js',scripts);
    gulp.watch('../js/*.js',scripts2);

}

var build = gulp.parallel(styles, styles2, watch, scripts, scripts2);

gulp.task('default', build);