const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    imagemin = require('gulp-imagemin');

gulp.task('serve', function() {
    php.server({
        base: './public'
    });
});

gulp.task('imagemin', () =>
    gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js')
       .task('serve')
       .task('imagemin')
       .browserSync({proxy: 'localhost:8000'});
});
