var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var config = context.config,
    util = context.util;

var config = context.config;
var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isTop: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        require: true
    },
    attachments: {
        type: Array
    },
    user: {
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    createdTime: {
        type: Date,
        get: util.dateTimeFormat,
        default: Date.now
    }

});

mongoose.model('Article', schema);
