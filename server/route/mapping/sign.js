module.exports = function(app, mw, sign) {

	//用户登录
	app.post('/api/sign/login', sign.login);
	app.post('/api/sign/isLogin', sign.isLogin);
	app.get('/api/sign/out', sign.signout);

};