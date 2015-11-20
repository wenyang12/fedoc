var path = require('path'),
    gulp = require('gulp'),
    gutil = require("gulp-util"),
    nodemon = require('gulp-nodemon'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    scss = require('gulp-ruby-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require("webpack"),
    $$ = require('gulp-load-plugins')(),
    webpackDevServer = require("webpack-dev-server");

var webpackConfig = require("./webpack.config.js");

var paths = {
    scss: {
        site: 'client/src/site/site.scss'
    },
    js: [
        'client/src/main.js',
        'client/src/site/**/*.js'
    ]
};

// webpack:build-dev
var myDevConfig = webpackConfig;
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
    devCompiler.run(function(err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('scss:site', function() {
    gulp.src(paths.scss.site)
        .pipe(scss({
            loadPath: 'client/src/site',
            compass: true,
            require: ['bootstrap-sass', 'font-awesome-sass']
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('client/src/build'));
});

// 监控服务端文件改动，并重启
gulp.task('restart', function() {

    // 监控服务端模板，脚本
    $$.nodemon({
            // 注意这边watch的写法
            watch: ['client/src/views/', 'server/'],
            script: 'server/server.js',
            ext: 'html js'
        })
        .on('restart', function() {
            console.log('restarted!');
        });
});


gulp.task('watch', function() {
    gulp.watch(paths.js, ["webpack:build-dev"]);
    gulp.watch(paths.scss.site, ["scss:site"]);
});

gulp.task('default', ['watch', 'scss:site', 'restart']);