module.exports = function (app, mw, site) {

	// 首页
	app.get('/', site.index);

};