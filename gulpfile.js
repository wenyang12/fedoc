var path = require('path'),
    gulp = require('gulp'),
    gutil = require("gulp-util"),
    nodemon = require('gulp-nodemon'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    scss = require('gulp-ruby-sass'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    webpack = require("webpack"),
    del = require('del'),
    $$ = require('gulp-load-plugins')(),
    webpackDevServer = require("webpack-dev-server");

var webpackConfig = require("./webpack.config.js");

var paths = {
    scss: {
        site: 'client/src/site/site.scss',
        siteDepdency: 'client/src/site/**/*.scss'
    },
    js: [
        'client/src/main.js',
        'client/src/site/**/*.js'
    ],
    dist: {
        root: 'client/dist/',
        build: 'client/dist/build/',
        site: 'client/dist/site/'
    }
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
        .pipe(gulp.dest(paths.dist.build));
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

// 监控服务端文件改动，并重启
gulp.task('copy', function() {
    gulp.src(['client/src/**/*',
            '!client/src/site/**/*.js',
            '!client/src/site/**/*.scss'
        ])
        .pipe(gulp.dest(paths.dist.root));

});



gulp.task('clean:dist', function() {
    return del(paths.dist.root);
});
//压缩css
gulp.task('cssmin', function() {
    return gulp.src(paths.dist.build + '*.css')
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist.build));
});

gulp.task('uglify', function() {
    return gulp.src(paths.dist.build + '/*.js')
        .pipe(uglify({
                compress:true
            }))
        .pipe(gulp.dest(paths.dist.build));

});

gulp.task('htmlmin', function() {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src(paths.dist.root + '/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(paths.dist.root));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ["webpack:build-dev"]);
    gulp.watch(paths.scss.siteDepdency, ["scss:site"]);
});

gulp.task('default', ['watch', 'scss:site', 'restart']);

gulp.task('build-product', ['scss:site', 'copy', 'cssmin', 'uglify', 'htmlmin']); //'scss:site',