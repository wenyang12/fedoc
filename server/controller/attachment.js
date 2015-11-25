var path = require('path');
var url = require('url');
var Qiniu = require('./qiniu');
var fs = require('fs-extra');
var qn = require('qn');
qnClient = qn.create({
	accessKey: '_M6eLfYIUPdwhUhap6a_7HQGfRifyV_fGOZRJlt6',
	secretKey: 'zU3Dm7a8oOV1mtIZbkDLkLNm0UBO0lslglK_3rCA',
	bucket: 'fedoc'
});
var defaultDomain = 'http://7xohgg.com2.z0.glb.qiniucdn.com';
var async = require('async');
var path = require('path');
var Busboy = require('busboy');
exports.upload = function(req, res) {

	var busboy = new Busboy({
		headers: req.headers
	});

	busboy.on('finish', function() {
		var file = req.files.file;
		var originFileName = file.originalname;
		async.auto({
				'upload': function(cb) {
					var uploadKey = path.join('attachments', originFileName),
						cloudUrl = url.resolve(defaultDomain, uploadKey),
						localFilePath = file.path;

					qnClient.upload(localFilePath, {
						key: uploadKey
					}, function() {
						cb(null, {
							fileUrl: cloudUrl,
							fileName: originFileName
						});
					});

				}
			},
			function(err, results) {
				if (!err) {
					return res.successMsg(results.upload);
				} else {
					return res.errorMsg(201, err);
				}

			});
	});
	req.pipe(busboy);
};