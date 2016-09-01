var mongoose = require('mongoose'),
    async = require('async'),
    fs = require('fs-extra'),
    _ = require('lodash'),
    path = require('path'),
    util = context.util,
    config = context.config,
    dirPath = context.dirPath,
    spawn = require('child_process').spawn;



exports.init = function(req, res) {
    var startSt = new Date().getTime();
    console.log('[构建开始]' + dirPath.root);
    var cmd = spawn(dirPath.root + '/deploy.sh');

    cmd.stdout.on('data', function(data) {
        console.log('stdout: ' + data.toString());
    });

    cmd.stderr.on('data', function(data) {
        console.log('stderr: ' + data.toString());
    });

    cmd.on('exit', function(code) {
        var log = '[构建成功] 耗时：' + (new Date().getTime() - startSt) + 'ms';
        console.log(log);
        res.send(log);
    });

};
