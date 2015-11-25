var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var config = context.config,
	util = context.util;

var config = context.config;
var schema = new Schema({
	name: {
		type: String,
		required: true
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

mongoose.model('Tag', schema);