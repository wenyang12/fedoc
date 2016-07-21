var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var config = context.config,
    util = context.util;

var config = context.config;
var superadmins = config.USERS.superadmins;
var schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: config.USERS.avatar.default
    },
    hashed_pwd: String,
    salt: String,
    createdTime: {
        type: Date,
        get: util.dateTimeFormat,
        default: Date.now
    }

});

/**
 * Virtuals
 */
schema.virtual('pwd').set(function(pwd) {
    this._pwd = pwd;
    this.salt = this.makeSalt();
    this.hashed_pwd = this.encryptPassword(pwd);
}).get(function() {
    return this._pwd;
});

schema.virtual('isAdmin').get(function() {
    var email = this.email;
    for (var i = 0, len = superadmins.length; i < len; i++) {
        if (superadmins[i].email === email) {
            return true;
        }
    }
    return false;
});

/**
 * Methods
 */
schema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_pwd;
    },
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },
    encryptPassword: function(pwd) {
        if (!pwd) return '';
        return crypto.createHmac('sha1', this.salt).update(pwd).digest('hex');
    }
};

mongoose.model('User', schema);
