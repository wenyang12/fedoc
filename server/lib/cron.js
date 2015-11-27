var config = context.config,
    fs = require('fs-extra'),
    cronJob = require('cron').CronJob,
    dirPath = context.dirPath,
    mongodbBackuper = require('mongodb-backuper'),
    path = require('path');

module.exports = function() {
    // 数据库定时备份
    console.log('[备份机制激活]' + config.TIME.midnight);
    var jobDBBackup = new cronJob(config.TIME.midnight, function() {
        backupTplDb();
    }, null, true, 'Asia/Shanghai');
};

//备份社区数据库
function backupTplDb() {
    var dbBackupPath = dirPath.dbBackup;

    // 确保数据库备份文件夹存在
    fs.ensureDirSync(dbBackupPath);

    mongodbBackuper.init({
        // 备份数据存储父级目录
        path: dbBackupPath,
        // 数据库连接
        host: config.APP.db.host,
        // 数据库名称
        name: config.APP.db.name
    });
}