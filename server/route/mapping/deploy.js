module.exports = function(app, mw, deploy) {
	//用户登录
	app.get('/api/deploy', deploy.init);
	app.post('/api/deploy', deploy.init);

};