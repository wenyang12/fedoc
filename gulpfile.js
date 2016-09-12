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
    concat = require('gulp-concat'),
    webpack = require("webpack"),
    del = require('del'),
    $$ = require('gulp-load-plugins')(),
    webpackDevServer = require("webpack-dev-server"),
    gulpSequence = require('gulp-sequence')
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
    },
    assets: {
        js: [
            'client/src/assets/libs/angular/angular.min.js',
            'client/src/assets/libs/markdown-it/markdown-it.min.js',
            'client/src/assets/libs/lodash/lodash.min.js',
            'client/src/assets/libs/angular-sanitize/angular-sanitize.min.js',
            'client/src/assets/libs/angular-ui-router/angular-ui-router.min.js',
            'client/src/assets/libs/restangular/restangular.min.js',
            'client/src/assets/libs/angular-ui-bootstrap/angular-ui-bootstrap.min.js',
            'client/src/assets/libs/angular-toasty/angular-toasty.min.js',
            'client/src/assets/libs/angular-file-upload/angular-file-upload.min.js',
            'client/src/assets/libs/angular-animate/angular-animate.min.js',
            'client/src/assets/libs/angular-busy/angular-busy.min.js',
            'client/src/assets/libs/simplemde/simplemde.min.js',
            'client/src/assets/libs/jquery/dist/jquery.min.js',
            'client/src/assets/libs/duoshuo/duoshuo.js',
            'client/src/assets/libs/loading-bar/loading-bar.min.js'
        ],
        css: [
            'client/src/assets/libs/bootstrap//bootstrap.min.css',
            'client/src/assets/libs/angular-toasty/angular-toasty.min.css',
            'client/src/assets/libs/Font-Awesome/css/font-awesome.min.css',
            'client/src/assets/libs/simplemde/simplemde.min.css',
            'client/src/assets/libs/github-markdown-css/github-markdown.css',
            'client/src/assets/libs/angular-busy/angular-busy.min.css',
            'client/src/assets/libs/loading-bar/loading-bar.min.css'
        ]
    }
};

// webpack:build-dev
var myDevConfig = webpackConfig;
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
var devCompiler = webpack(myDevConfig);


//构建js插件集合
gulp.task('concat:assets:js', function() {
    return gulp.src(paths.assets.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('client/src/build'));
});

gulp.task('concat:assets:css', function() {
    return gulp.src(paths.assets.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('client/src/build'));
});




gulp.task("webpack:build-dev", function(callback) {
    devCompiler.run(function(err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('scss:site', function(cb) {
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
    return cb(null);
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
gulp.task('copy', function(cb) {
    gulp.src(['client/src/**/*',
            '!client/src/site/**/*.js',
            '!client/src/site/**/*.scss'
        ])
        .pipe(gulp.dest(paths.dist.root));
    return cb(null);
});



gulp.task('clean:dist', function(cb) {
    del(paths.dist.root);
    return cb(null);
});
//压缩css
gulp.task('cssmin', function(cb) {
    gulp.src(paths.dist.build + '*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.dist.build));
    return cb(null);
});

gulp.task('uglify', function(cb) {
    gulp.src(paths.dist.build + '/*.js')
        .pipe(uglify({
            compress: true
        }))
        .pipe(gulp.dest(paths.dist.build));
    return cb(null);
});

gulp.task('htmlmin', function(cb) {
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src(paths.dist.root + '/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(paths.dist.root));
    return cb(null);
});


gulp.task('watch', function() {
    gulp.watch(paths.js, ["webpack:build-dev"]);
    gulp.watch(paths.scss.siteDepdency, ["scss:site"]);
});

gulp.task('default', ['watch', 'scss:site', 'restart']);
gulp.task('compress', ['cssmin', 'uglify', 'htmlmin']);

gulp.task('build-product', gulpSequence(['scss:site', 'copy', 'compress'])); //,
