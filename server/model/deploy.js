var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var config = context.config,
	util = context.util;

var config = context.config;
var schema = new Schema({
	name: {
		type: String,
		required: true
	},
	reason:{
		type: String
	},
	version: {
		type: String
	},
	range:{
		type:String
	},
	developer: {
		type: String
	},
	runTime:{
		type: Date,
		get: util.dateTimeFormat,
		default: Date.now
	},
	createdTime: {
		type: Date,
		get: util.dateTimeFormat,
		default: Date.now
	}

});

mongoose.model('Deploy', schema);