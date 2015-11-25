var dirPath = context.dirPath;
var multer = require('multer');
var path = require('path');


module.exports = function(app, mw, attchment) {
	//用户登录
	app.post('/api/attachments/upload', attchment.upload);
};