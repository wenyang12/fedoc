var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

var clientSrcPath = path.join(__dirname, 'client', 'src'),
    clientSrcBuildPath = path.join(__dirname, 'client', 'src', 'build'),
    appPath = path.join(clientSrcPath, 'app'),
    clientDistPAth = path.join(__dirname, 'client', 'dist'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    assetsPath = path.join(clientSrcPath, 'assets'),
    libsPath = path.join(assetsPath, 'libs');

module.exports = {
    context: clientSrcPath, // entry的basePath
    entry: {
        main: 'main'
    },
    output: {
        path: clientSrcBuildPath,
        filename: 'main.js'
    },
    resolve: {
        root: [clientSrcPath],
        alias: {
            'libs$': '/client/src/assets/libs',
            'vendor$': '/client/src/assets/vendor'
        },
        extensions: ['', '.js', '.coffee', '.html', '.css', '.scss']
    },
    externals: {
        'md': 'markdownit'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass'
        }, {
            test: /\.woff$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.ttf$/,
            loader: "file"
        }, {
            test: /\.eot$/,
            loader: "file"
        }, {
            test: /\.svg$/,
            loader: "file"
        }]
    }
};
