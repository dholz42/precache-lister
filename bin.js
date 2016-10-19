#!/usr/bin/env node

var program = require("commander");
var precacheList = require('./');

var cachePath = ".";
var outPath = "";
var outName = "precacheList.js";
var ignored = [];
program
    .arguments('[pathToCache], [outputPath], [outputName] [ignoredFileArray]')
    .action(function(pathToCache, outputPath, outputName, ignoredFileArray){
      cachePath = pathToCache || ".";
      outPath = outputPath || "";
      outName = outputName || "precacheList.js";
      ignored = ignoredFileArray || [];
    })
    .parse(process.argv);


precacheList(cachePath, outPath, outName, ignored);
