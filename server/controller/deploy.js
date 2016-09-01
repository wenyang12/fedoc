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
    var cmd = spawn(dirPath.root + '/deploy.sh');
    cmd.stdout.on('data', function(data) {
        console.log('stdout: ' + data.toString());
    });

    cmd.stderr.on('data', function(data) {
        console.log('stderr: ' + data.toString());
    });

    cmd.on('exit', function(code) {

    });
    res.send('[构建开始]' + dirPath.root);

};
