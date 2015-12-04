#!/bin/bash
git pull origin master
node_modules/gulp/bin/gulp.js copy 
node_modules/gulp/bin/gulp.js compress