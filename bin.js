#!/usr/bin/env node

var program = require("commander");
var precacheList = require('./');

var cachePath = ".";
var outPath = "";
var outName = "precacheList.js";
var outPrefix = "";
var ignored = [];
program
    .arguments('[pathToCache], [outputPath], [outputName], [outputPrefix], [ignoredFileArray]')
    .action(function (pathToCache, outputPath, outputName, outputPrefix, ignoredFileArray) {
        cachePath = pathToCache || ".";
        outPath = outputPath || "";
        outName = outputName || "precacheList.js";
        outPrefix = outputPrefix || "";
        ignored = ignoredFileArray || [];
    })
    .parse(process.argv);


precacheList(cachePath, outPath, outName, outPrefix, ignored);
