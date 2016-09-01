#!/bin/bash
git reset --hard origin/master
git clean -f
git pull origin master
npm run build-product
npm run restart-server
