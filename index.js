var fs = require("fs");
var path = require("path");

module.exports = function(cachePath){
    // var currentPath = process.cwd();
    // console.log("The current path is: " + currentPath);
    //
    // console.log("Now we need to go to " + cachePath);
    // process.chdir(cachePath);
    // console.log("The new directory we are in is: " + process.cwd());
    //
    // console.log("Listing files in this directory:");

    var p = cachePath;

    fs.readdir(p, function(err, files){
        if (err){
            throw err;
        }

        files.map(function(file){
            return path.join(p, file);
        }).filter(function(file){
            return fs.statSync(file).isFile();
        }).forEach(function(file){
            console.log("%s", file);
        })
    })
};
