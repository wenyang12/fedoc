module.exports = function(app, mw, tag) {
	//用户登录
	app.post('/api/tags', mw.requireAdminLogin, tag.create);
	app.get('/api/tags', tag.listAll);
	app.get('/api/tags/:tagId', tag.get);
	app.put('/api/tags/:tagId', mw.requireAdminLogin, tag.update);
	app.delete('/api/tags/:tagId', mw.requireAdminLogin, tag.delete);
};