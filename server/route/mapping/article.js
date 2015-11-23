module.exports = function(app, mw, article) {
	//用户登录
	app.post('/api/articles', mw.requireLogin, article.create);
	app.get('/api/articles', article.list);
	app.get('/api/articles/:articleId', article.get);
	app.put('/api/articles/:articleId', mw.requireLogin, article.update);
	app.delete('/api/articles/:articleId', mw.requireLogin, article.delete);
};