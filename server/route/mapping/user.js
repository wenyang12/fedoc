module.exports = function(app, mw, user) {
	//用户登录
	app.post('/api/users', mw.requireAdminLogin, user.create);
	app.get('/api/users', mw.requireAdminLogin, user.list);
	app.get('/api/users/:userId', mw.requireLogin, user.get);
	app.put('/api/users/:userId/info', mw.requireAdminLogin, user.updateInfo);
	app.put('/api/users/:userId/pwd', mw.requireLogin, user.updatePwd);
	app.delete('/api/users/:userId', mw.requireAdminLogin, user.delete);
};