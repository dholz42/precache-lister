#!/usr/bin/env node

var precacheList = require('./');

var args = process.argv.slice(2);

precacheList.apply(this, args);

