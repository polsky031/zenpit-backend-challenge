'use strict';

/**
 * Module Dependencies
 */
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('serve', function () {
    nodemon({
        script: './bin/www',
        watch: './app.js'
    });
});


gulp.task('default', ['serve']);
