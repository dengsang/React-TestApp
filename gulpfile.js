/**
 * Created by DENG on 10/13/2017.
 */
"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open'); // open a URl in a web browser
var browserify = require('browserify'); //Bundle JS
var reactify = require('reactify'); // Transform React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with Gulp
var concat = require('gulp-concat'); ///
var lint = require('gulp-eslint');

var config = {
    port: 9005,
    devBaseUrl: 'http:localhost',
    paths: {
        html: './src/*.html',
        js: './src/*.js',
        css: [
            'node_module/bootstrap/dist/css/bootstrap.min.css',
            'node_module/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

// start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });

});


// before you run the task open first run the task connect
gulp.task('open', ['connect'], function () {
   gulp.src('dist/index.html')
       .pipe(open({ url: config.devBaseUrl + ':' + config.port + '/'}))

});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});



gulp.task('js', function () {
   browserify(config.paths.mainJs)
       .transform(reactify)   // uses reactify to transform jsx to js using reactify
       .bundle()  // it bundles
       .on('error', console.error.bind(console)) // it cuptures errors
       .pipe(source('bundle.js')) // where bundle will be named
       .pipe(gulp.dest(config.paths.dist + '/scripts'))  // defined destination  using the path
       .pipe(connect.reload());  // reload the browser
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))

});

gulp.task('lint', function () {
   return gulp.src(config.paths.js)
       .pipe(lint({config: 'eslint.config.json'}))
       .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);  // watch for javascript task  to be runned aoutomatically
});



gulp.task('default', ['html', 'js', 'lint', 'css', 'open', 'watch']);