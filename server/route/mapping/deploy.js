module.exports = function(app, mw, deploy) {
	//用户登录
	app.post('/api/deploys', deploy.create);
	app.get('/api/deploys', deploy.listAll);
	app.get('/api/deploys/:deployId', deploy.get);
	app.put('/api/deploys/:deployId',  deploy.update);
	app.delete('/api/deploys/:deployId',  deploy.delete);
};