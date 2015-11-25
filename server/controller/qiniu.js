var qiniu = require('qiniu');
qiniu.conf.ACCESS_KEY = '_M6eLfYIUPdwhUhap6a_7HQGfRifyV_fGOZRJlt6';
qiniu.conf.SECRET_KEY = 'zU3Dm7a8oOV1mtIZbkDLkLNm0UBO0lslglK_3rCA';

var QN = function(bucketName) {
    this.bucketName = bucketName;
};

QN.prototype.init = function() {

};



//scope 限定客户端的权限。如果 scope 是 bucket，则客户端只能新增文件到指定的 bucket，
//不能修改文件。如果 scope 为 bucket:key，则客户端可以修改指定的文件。
//注意： key必须采用utf8编码，如使用非utf8编码访问七牛云存储将反馈错误
QN.prototype.uptoken = function(_key) {
    var bucketName = this.bucketName;
    var putPolicy;
    var key = _key;
    if (key) {
        putPolicy = new qiniu.rs.PutPolicy(bucketName + ':' + key);
    } else {
        putPolicy = new qiniu.rs.PutPolicy(bucketName);
    }
    //putPolicy.callbackUrl = callbackUrl;
    //putPolicy.callbackBody = callbackBody;
    //putPolicy.returnUrl = returnUrl;
    //putPolicy.returnBody = returnBody;
    //putPolicy.asyncOps = asyncOps;
    //putPolicy.expires = expires;
    return putPolicy.token();
};

QN.prototype.PutExtra = function(params, mimeType, crc32, checkCrc) {
    this.paras = params || {};
    this.mimeType = mimeType || null;
    this.crc32 = crc32 || null;
    this.checkCrc = checkCrc || 0;
};

QN.prototype.uploadFile = function(localFile, key, callback) {
    var uptoken = this.uptoken(key);
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if (!err) {

            callback(null, {
                key: ret.key,
                has: ret.hash
            });
            // ret.key & ret.hash
        } else {
            console.log(err);
            // 上传失败， 处理返回代码
            callback(err);
            // http://docs.qiniu.com/api/put.html#error-code
        }
    });
};


//流上传方式
QN.prototype.uploadBuf = function(localStream, key, callback) {
    var uptoken = this.uptoken(key);
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    qiniu.io.put(uptoken, key, localStream, extra, function(err, ret) {
        if (!err) {
            callback(null, {
                key: ret.key,
                has: ret.hash
            });
        } else {
            console.log(err);
            // 上传失败， 处理返回代码
            callback(err);
            // http://docs.qiniu.com/api/put.html#error-code
        }
    });
};

QN.prototype.getFile = function(key, callback) {
    var client = new qiniu.rs.Client();
    var bucketName = this.bucketName;
    key = '/';
    client.stat(bucketName, key, function(err, ret) {
        if (!err) {
            callback(null, ret);
        } else {
            console.log(err);
            callback(err);
        }
    });
};

QN.prototype.batchDeleteFile = function(keys, callback) {
    var entries = [];
    var client = new qiniu.rs.Client();
    for (var i = 0; i < keys.length; i++) {
        entries.push(new qiniu.rs.EntryPath(this.bucketName, keys[i]));
    }
    client.batchDelete(entries, function(err, ret) {
        if (!err) {
            callback(null, ret);
        } else {
            console.log(err);
            callback(err);
        }
    });
};
module.exports = QN;