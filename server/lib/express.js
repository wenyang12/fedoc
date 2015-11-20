var path = require('path'),
	express = require('express'),
	compression = require('compression'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	mongoStore = require('connect-mongo')(session),
	methodOverride = require('method-override'),
	serveStatic = require('serve-static'),
	favicon = require('serve-favicon'),
	errorHandler = require('errorhandler'),
	logger = require('morgan'),
	multer = require('multer'),
	hbs = require('hbs'),
	hbsutils = require('hbs-utils')(hbs),
	basicAuth = require('connect-basic-auth');


var env = context.env,
	config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath,
	APP_CONFIG = config.APP;

module.exports = function(app, passport, mongoose) {
	// 开发环境
	if (app.get('env') === 'dev') {
		app.use(errorHandler());
		app.use(logger('dev')); // 纪录每一个请求
	}
	// 生产环境
	// if (app.get('env') === 'pro') {
	// 	return;
	// }

	// res的中间件
	app.use(function(req, res, next) {
		res.errorMsg = function(code, msg) {
			res.json({
				code: code,
				msg: msg
			});
		};
		res.successMsg = function(data) {
			res.json({
				code: 200,
				msg: data
			});
		};
		next();
	});


	app.set('port', APP_CONFIG.port);
	app.set('views', dirPath.view);

	app.set('view engine', 'html');
	app.engine('html', hbs.__express);
	hbs.registerPartials(path.join(dirPath.view, 'partial'));
	hbs.registerPartials(path.join(dirPath.client, 'src', 'app'));
	hbs.registerPartials(path.join(dirPath.client, 'src', 'module'));

	hbsutils.registerWatchedPartials(path.join(dirPath.view, 'partial'));
	hbsutils.registerWatchedPartials(path.join(dirPath.client, 'src', 'app'));
	app.enable('jsonp callback');


	// compress requests and responses
	app.use(compression()); // 需要进一步设置
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	// 静态文件目录，可以设置多个
	//!TODO 这边需要修改为 dirPath.build
	// js css引用，css中image的引用
	app.use(serveStatic(path.join(dirPath.client, 'src')));


	app.use(session({
		resave: true,
		saveUninitialized: true,
		secret: APP_CONFIG.session.secret,
		store: new mongoStore({
			mongooseConnection: mongoose.connection,
			collection: APP_CONFIG.session.collection
		}),
		cookie: APP_CONFIG.cookie,
		key: APP_CONFIG.session.key
	}));

	// 必须放在cookieParser和session后面
	app.use(passport.initialize());
	app.use(passport.session());

	// Node.js middleware for handling `multipart/form-data`.
	app.use(multer());
};