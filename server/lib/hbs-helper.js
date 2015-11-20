var hbs = require('hbs'),
    path = require('path'),
    _ = require('lodash'),
    express = require('express'),
    config = process.common.config,
    fs = require('fs');

module.exports = function(app) {
    hbsHelper(hbs, config.PATHS.views.partials);
};

var hbsHelper = function(hbs, viewPartialsPath) {
    //copied form https://github.com/donpark/hbs/blob/master/examples/extend/app.js
    hbs.registerHelper('extend', function(name, context) {
        hbs.__blocks = hbs.__blocks || {};
        var block = hbs.__blocks[name];
        if (!block) {
            block = hbs.__blocks[name] = [];
        }
        block.push(context.fn(this));
    });

    hbs.registerHelper('block', function(name) {
        hbs.__blocks = hbs.__blocks || {};
        var val = (hbs.__blocks[name] || []).join('\n');
        // clear the block
        hbs.__blocks[name] = [];
        return val;
    });
    hbs.registerHelper('equal', function(value1, value2, context) {

        if (value1 === value2) {
            return context.fn(this);
        } else {
            context.inverse(this);
        }
    });

    hbs.registerHelper('gt', function(value1, value2, context) {

        if (value1 > value2) {
            return context.fn(this);
        } else {
            context.inverse(this);
        }
    });


    // https://github.com/donpark/hbs#helpers-and-partials
    hbs.registerPartials(path.join(viewPartialsPath));



    // var filenames = fs.readdirSync(viewPartialsPath);

    // filenames.forEach(function(filename) {
    //     var matches = /^([^.]+).html$/.exec(filename);
    //     if (!matches) {
    //         return;
    //     }
    //     var name = matches[1];
    //     var template = fs.readFileSync(viewPartialsPath + '/' + filename, 'utf8');
    //     hbs.registerPartial(name, template);
    // });
};
