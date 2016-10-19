#!/usr/bin/env node

var precacheList = require('./');

var help = false;
var dashdash = false;
var args = process.argv.slice(2).filter(function(arg) {
  if (dashdash)
    return !!arg;
  else if (arg === '--')
    dashdash = true;
  else
    return !!arg;
});

go();

function go() {
  precacheList.apply(this, args);
}

