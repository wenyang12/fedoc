var mongoose = require('mongoose'),
    async = require('async'),
    fs = require('fs-extra'),
    _ = require('lodash'),
    path = require('path'),
    util = context.util,
    config = context.config,
    dirPath = context.dirPath,
    exec = require('child_process').exec;


exports.init = function(req, res) {
    var startSt = new Date().getTime();
    res.write('[构建开始]' + dirPath.root);
    exec(dirPath.root + '/deploy.sh', {
        cwd: dirPath.root
    }, function(err) {
        if (!err) {
            res.write('[构建成功] 耗时：' + (new Date().getTime() - startSt));
            res.end();
        } else {
            console.log(err);
        }
    });

};
