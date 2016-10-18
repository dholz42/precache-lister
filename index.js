var recursive = require("recursive-readdir");

module.exports = function(pathToCache, outputPath, outputName){
    // var currentPath = process.cwd();
    // console.log("The current path is: " + currentPath);
    //
    // console.log("Now we need to go to " + cachePath);
    // process.chdir(cachePath);
    // console.log("The new directory we are in is: " + process.cwd());
    //
    // console.log("Listing files in this directory:");

    var p = pathToCache;

    recursive(p, function(err, files){
        if (err){
            throw err;
        }

        files.forEach(function(file){
            console.log("%s", file);
        })

    })
};
