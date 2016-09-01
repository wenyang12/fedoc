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
    console.log('[构建开始]' + dirPath.root);
    exec(dirPath.root + '/deploy.sh', {
        cwd: dirPath.root
    }, function(err, stdout) {
        console.log(stdout);
        if (!err) {
            var log = '[构建成功] 耗时：' + (new Date().getTime() - startSt) + 'ms';
            console.log(log);
            res.send(log);
        } else {
            console.log(err);
        }
    });

};
